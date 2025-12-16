// app/api/admin/debug/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    
    // Get all items (including inactive)
    const allItems = await GalleryMedia.find({}).sort({ uploadedAt: -1 }).lean();
    
    // Count by type
    const imageCount = await GalleryMedia.countDocuments({ type: 'image' });
    const videoCount = await GalleryMedia.countDocuments({ type: 'video' });
    
    return NextResponse.json({
      success: true,
      stats: {
        total: allItems.length,
        images: imageCount,
        videos: videoCount,
        active: await GalleryMedia.countDocuments({ isActive: true }),
        inactive: await GalleryMedia.countDocuments({ isActive: false })
      },
      items: allItems.map(item => ({
        id: item._id,
        title: item.title,
        type: item.type,
        url: item.url,
        category: item.category,
        isActive: item.isActive,
        uploadedAt: item.uploadedAt
      }))
    });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}