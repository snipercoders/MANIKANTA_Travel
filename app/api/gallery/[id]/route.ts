// app/api/gallery/[id]/route.ts - UPDATED for Next.js 15+
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import GalleryMedia from '@/lib/models/GalleryMedia';
import cloudinary from '@/lib/cloudinary';

// Simple admin authentication
const validateAdminAuth = (req: NextRequest): boolean => {
  try {
    // Check Authorization header
    const authHeader = req.headers.get('authorization');
    if (authHeader === 'Bearer admin_auth_token_12345') {
      return true;
    }

    // Check for admin token in headers (alternative)
    const adminToken = req.headers.get('x-admin-token');
    if (adminToken === 'admin_auth_token_12345') {
      return true;
    }

    // Check cookies for admin session
    const cookieHeader = req.headers.get('cookie') || '';
    if (cookieHeader.includes('gallery_admin_auth=authenticated')) {
      return true;
    }

    return false;
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
    // IMPORTANT: Await the params Promise
    const { id } = await params;
    
    console.log(`🔍 Attempting to delete item with ID: ${id}`);
    
    if (!id || typeof id !== 'string') {
      console.log('❌ Invalid ID provided');
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid item ID' 
      }, { status: 400 });
    }

    // Validate admin authentication
    const isAuthenticated = validateAdminAuth(req);
    if (!isAuthenticated) {
      console.log('❌ Unauthorized delete attempt');
      return NextResponse.json({ 
        success: false, 
        message: 'Unauthorized: Admin access required' 
      }, { status: 401 });
    }

    await dbConnect();
    
    console.log(`🔍 Looking for item in database: ${id}`);

    // Find the item first
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
        
        const result = await cloudinary.uploader.destroy(item.publicId, { 
          resource_type: resourceType,
          invalidate: true // Invalidate CDN cache
        });
        
        console.log(`✅ Cloudinary delete result:`, result);
        
        if (result.result === 'ok') {
          cloudinaryDeleted = true;
          console.log(`☁️ Successfully deleted from Cloudinary`);
        } else {
          console.warn(`⚠️ Cloudinary delete may have issues:`, result);
        }
      } catch (cloudinaryError: any) {
        console.error('❌ Cloudinary delete failed:', cloudinaryError.message);
        // Continue with database deletion even if Cloudinary fails
        console.log('⚠️ Continuing with database deletion...');
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
    console.error('❌ Delete error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Failed to delete item',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

// Also add GET endpoint to verify item exists
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