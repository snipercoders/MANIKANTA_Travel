// app/api/gallery/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';
import cloudinary from '@/lib/cloudinary';

// Simple admin authentication
const validateAdminAuth = (req: NextRequest): boolean => {
  try {
    // Get cookies from request
    const cookieHeader = req.headers.get('cookie') || '';
    
    // Parse cookies
    const cookies: Record<string, string> = {};
    cookieHeader.split(';').forEach(cookie => {
      const [key, value] = cookie.trim().split('=');
      if (key && value) {
        cookies[key] = decodeURIComponent(value);
      }
    });

    // Check for admin auth cookie
    const authStatus = cookies['gallery_admin_auth'];
    return authStatus === 'authenticated';
  } catch (error) {
    console.error('Auth validation error:', error);
    return false;
  }
};

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Get the ID from params
    const { id } = await params;
    
    console.log(`🔍 DELETE Request for ID: ${id}`);
    
    if (!id || typeof id !== 'string' || id.length !== 24) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid item ID format' 
      }, { status: 400 });
    }

    // Validate admin authentication
    if (!validateAdminAuth(req)) {
      console.log('❌ Unauthorized delete attempt');
      return NextResponse.json({ 
        success: false, 
        message: 'Unauthorized: Admin access required' 
      }, { status: 401 });
    }

    console.log('✅ Admin authenticated, connecting to database...');
    await dbConnect();

    // Find the item first
    console.log(`🔍 Looking for item in database: ${id}`);
    const item = await GalleryMedia.findById(id);
    
    if (!item) {
      console.log(`❌ Item not found in database: ${id}`);
      return NextResponse.json({ 
        success: false, 
        message: 'Item not found' 
      }, { status: 404 });
    }

    console.log(`🗑️ Deleting item: "${item.title}" (Type: ${item.type})`);
    console.log(`📁 Cloudinary Public ID: ${item.publicId || 'None'}`);

    let cloudinaryDeleted = false;
    
    // Delete from Cloudinary if publicId exists
    if (item.publicId) {
      try {
        const resourceType = item.type === 'video' ? 'video' : 'image';
        console.log(`☁️ Deleting from Cloudinary (${resourceType}): ${item.publicId}`);
        
        // Cloudinary delete with retry logic
        const result = await cloudinary.uploader.destroy(item.publicId, { 
          resource_type: resourceType,
          invalidate: true // Invalidate CDN cache
        });
        
        console.log(`✅ Cloudinary delete result:`, result);
        
        if (result.result === 'ok') {
          cloudinaryDeleted = true;
          console.log(`☁️ Successfully deleted from Cloudinary`);
        } else if (result.result === 'not found') {
          console.warn(`⚠️ Cloudinary item not found, continuing with database deletion`);
          cloudinaryDeleted = true; // Consider it deleted
        } else {
          console.warn(`⚠️ Cloudinary delete returned: ${result.result}`);
        }
      } catch (cloudinaryError: any) {
        console.error('❌ Cloudinary delete failed:', cloudinaryError.message);
        console.log('⚠️ Continuing with database deletion despite Cloudinary error...');
      }
    } else {
      console.log('ℹ️ No Cloudinary publicId found, skipping Cloudinary deletion');
    }

    // Perform hard delete from database
    console.log(`🗄️ Deleting from database: ${item._id}`);
    const deleteResult = await GalleryMedia.findByIdAndDelete(id);
    
    if (!deleteResult) {
      console.error(`❌ Database delete failed for ID: ${id}`);
      throw new Error('Failed to delete from database');
    }

    console.log(`✅ Successfully deleted: "${item.title}"`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Item deleted successfully',
      data: { 
        id: item._id,
        title: item.title,
        type: item.type,
        cloudinaryDeleted,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error: any) {
    console.error('❌ DELETE error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to delete item',
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}

// Optional: GET endpoint to verify item exists
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await dbConnect();
    
    const item = await GalleryMedia.findById(id);
    
    if (!item) {
      return NextResponse.json({ 
        success: false, 
        message: 'Item not found' 
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true, 
      data: {
        id: item._id,
        title: item.title,
        type: item.type,
        category: item.category,
        url: item.url,
        publicId: item.publicId,
        isActive: item.isActive
      }
    });
  } catch (error: any) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to fetch item'
    }, { status: 500 });
  }
}