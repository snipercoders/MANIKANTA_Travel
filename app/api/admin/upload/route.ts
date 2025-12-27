// app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';

export async function POST(req: NextRequest) {
  try {
    // Connect to database
    await dbConnect();
    console.log('✅ Database connected for upload');

    // Get form data
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const vehicleName = formData.get('vehicleName') as string;
    const type = formData.get('type') as string;

    console.log('📝 Upload data:', { 
      title, 
      location, 
      category, 
      vehicleName, 
      type,
      fileName: file?.name,
      fileSize: file?.size
    });

    // Validate required fields
    if (!file || !title) {
      return NextResponse.json({ 
        success: false, 
        message: 'File and title are required' 
      }, { status: 400 });
    }

    // Convert file to base64 for Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataUrl = `data:${file.type};base64,${base64}`;

    console.log('☁️ Uploading to Cloudinary...');

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(dataUrl, {
      folder: 'sri-manikanta-tours/gallery',
      resource_type: type === 'video' ? 'video' : 'image',
      use_filename: true,
      unique_filename: true,
    });

    console.log('✅ Cloudinary upload successful:', {
      publicId: uploadResult.public_id,
      url: uploadResult.secure_url,
      type: uploadResult.resource_type
    });

    // Determine orientation
    let orientation: 'landscape' | 'portrait' | 'square' = 'landscape';
    if (uploadResult.width && uploadResult.height) {
      if (uploadResult.width > uploadResult.height) {
        orientation = 'landscape';
      } else if (uploadResult.width < uploadResult.height) {
        orientation = 'portrait';
      } else {
        orientation = 'square';
      }
    }

    // Save to MongoDB - CORRECT FIELD NAME: publicId
    const galleryItem = await GalleryMedia.create({
      type: type || 'image',
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id, // ✅ CORRECT: Using publicId
      title,
      location: location || '',
      description: description || '',
      category: category || 'destination',
      vehicleName: vehicleName || '',
      orientation,
      tags: [],
      isActive: true,
      uploadedAt: new Date(),
      metadata: {
        format: uploadResult.format,
        width: uploadResult.width,
        height: uploadResult.height,
        bytes: uploadResult.bytes,
        originalFilename: file.name
      }
    });

    console.log('💾 Saved to database:', galleryItem._id);

    return NextResponse.json({ 
      success: true, 
      message: 'Upload successful',
      data: {
        id: galleryItem._id,
        title: galleryItem.title,
        type: galleryItem.type,
        url: galleryItem.url,
        publicId: galleryItem.publicId
      }
    }, { status: 201 });
  } catch (error: any) {
    console.error('❌ Upload error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Upload failed',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}