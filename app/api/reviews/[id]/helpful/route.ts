// app/api/reviews/[id]/helpful/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { reviewService } from '@/lib/database/reviews';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in Next.js 15+
    const { id } = await params;
    const updatedReview = await reviewService.markHelpful(id);
    
    if (!updatedReview) {
      return NextResponse.json(
        { success: false, error: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedReview });
  } catch (error) {
    console.error('Error marking review as helpful:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to mark review as helpful' },
      { status: 500 }
    );
  }
}