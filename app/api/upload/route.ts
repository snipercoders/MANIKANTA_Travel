// app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No files provided' },
        { status: 400 }
      );
    }

    // Validate file count
    if (files.length > 5) {
      return NextResponse.json(
        { success: false, error: 'Maximum 5 files allowed' },
        { status: 400 }
      );
    }

    const uploadedUrls: string[] = [];

    for (const file of files) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        continue; // Skip invalid files
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        continue; // Skip files that are too large
      }

      // Convert file to base64
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString('base64');

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:${file.type};base64,${base64}`,
        {
          folder: 'chandan-tours/reviews',
          resource_type: 'image',
        }
      );

      uploadedUrls.push(result.secure_url);
    }

    return NextResponse.json({
      success: true,
      data: uploadedUrls,
      message: `${uploadedUrls.length} image(s) uploaded successfully`,
    });
  } catch (error) {
    console.error('Error uploading images:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload images' },
      { status: 500 }
    );
  }
}