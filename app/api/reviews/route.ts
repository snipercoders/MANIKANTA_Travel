// app/api/reviews/route.ts - Updated

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongodb';

const COLLECTION_NAME = 'reviews';

export async function GET(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const searchParams = request.nextUrl.searchParams;
    const packageId = searchParams.get('packageId');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    let query = {};

    if (packageId) {
      query = { tourPackageId: parseInt(packageId) };
    }

    if (search) {
      query = {
        ...query,
        $or: [
          { author: { $regex: search, $options: 'i' } },
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
          { tourPackageName: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } }
        ]
      };
    }

    let cursor = db.collection(COLLECTION_NAME).find(query).sort({ createdAt: -1 });

    if (limit) {
      cursor = cursor.limit(parseInt(limit));
    }

    const reviews = await cursor.toArray();

    // Convert _id to id for frontend
    const formattedReviews = reviews.map(review => ({
      ...review,
      id: review._id.toString(),
      _id: review._id.toString(),
    }));

    return NextResponse.json({ success: true, data: formattedReviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { db } = await connectToDatabase();
    
    const reviewData = {
      ...body,
      date: new Date().toISOString().split('T')[0],
      verified: false,
      helpful: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection(COLLECTION_NAME).insertOne(reviewData);
    
    const newReview = {
      ...reviewData,
      _id: result.insertedId.toString(),
      id: result.insertedId.toString(),
    };

    return NextResponse.json(
      { success: true, data: newReview },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create review' },
      { status: 500 }
    );
  }
}