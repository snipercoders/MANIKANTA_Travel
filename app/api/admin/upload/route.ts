// app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const vehicleName = formData.get('vehicleName') as string;
    const type = formData.get('type') as string;

    if (!file || !title) {
      return NextResponse.json({ success: false, message: 'File and title are required' }, { status: 400 });
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataUrl = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(dataUrl, {
      folder: 'chandan-tours-gallery',
      resource_type: type === 'video' ? 'video' : 'image',
    });

    // Save to MongoDB
    const galleryItem = await GalleryMedia.create({
      type: type || 'image',
      url: uploadResult.secure_url,
      cloudinaryId: uploadResult.public_id,
      title,
      location: location || '',
      description: description || '',
      category: category || 'destination',
      vehicleName: vehicleName || '',
      isActive: true,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Upload successful',
      data: galleryItem 
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Upload failed' 
    }, { status: 500 });
  }
}