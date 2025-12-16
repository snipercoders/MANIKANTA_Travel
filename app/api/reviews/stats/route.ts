// app/api/reviews/stats/route.ts

import { NextResponse } from 'next/server';
import { reviewService } from '@/lib/database/reviews';

export async function GET() {
  try {
    const stats = await reviewService.getStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching review stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch review stats' },
      { status: 500 }
    );
  }
}