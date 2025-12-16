// app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    
    // Hardcoded password
    const ADMIN_PASSWORD = "chandan@12345";
    
    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: true, 
        message: 'Authentication successful' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid password' 
      }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Auth error:', error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || 'Authentication failed' 
    }, { status: 500 });
  }
}