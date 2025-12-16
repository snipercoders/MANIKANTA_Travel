// app/api/gallery/route.ts - UPDATED for Next.js 15+
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    console.log('✅ Database connected');
    
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    
    const query: any = { isActive: true };
    if (category && category !== 'all') {
      query.category = category;
    }
    
    console.log('📋 Fetching with query:', query);
    
    const items = await GalleryMedia.find(query).sort({ uploadedAt: -1 }).lean();
    
    console.log(`✅ Found ${items.length} items`);
    
    // Transform the data properly
    const transformedItems = items.map((item: any) => ({
      id: item._id?.toString() || item.id,
      _id: item._id?.toString(),
      type: item.type || 'image',
      url: item.url || '',
      title: item.title || 'Untitled',
      location: item.location || '',
      description: item.description || '',
      category: item.category || 'other',
      vehicleName: item.vehicleName || '',
      publicId: item.publicId,
      tags: item.tags || [],
      orientation: item.orientation || 'landscape',
      uploadedAt: item.uploadedAt,
      isActive: item.isActive || true,
      createdAt: item.createdAt || item.uploadedAt,
    }));
    
    return NextResponse.json({ 
      success: true, 
      data: transformedItems,
      count: transformedItems.length
    });
  } catch (error: any) {
    console.error('❌ Fetch error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to fetch gallery items' 
    }, { status: 500 });
  }
}