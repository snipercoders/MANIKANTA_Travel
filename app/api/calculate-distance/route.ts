// File Path: app/api/calculate-distance/route.ts

import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY;

interface DistanceResponse {
  distance: number;
  duration: string;
  route: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { from, to } = await request.json();

    console.log('Calculating distance from:', from, 'to:', to);

    if (!from || !to) {
      return NextResponse.json(
        { error: 'Both pickup and destination locations are required' },
        { status: 400 }
      );
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key not configured');
      return NextResponse.json(
        { 
          error: 'API configuration error',
          details: 'Google Maps API key is missing' 
        },
        { status: 500 }
      );
    }

    // Clean location strings
    const cleanFrom = from.trim();
    const cleanTo = to.trim();

    // Step 1: Use Distance Matrix API
    const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(cleanFrom)}&destinations=${encodeURIComponent(cleanTo)}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;

    console.log('Fetching from URL:', distanceMatrixUrl.replace(GOOGLE_MAPS_API_KEY, 'HIDDEN_KEY'));

    const distanceResponse = await fetch(distanceMatrixUrl);
    const distanceData = await distanceResponse.json();

    console.log('Distance Matrix Status:', distanceData.status);
    console.log('Distance Matrix Element Status:', distanceData.rows?.[0]?.elements?.[0]?.status);

    if (distanceData.status !== 'OK') {
      return NextResponse.json(
        { 
          error: `Google Maps API error: ${distanceData.status}`,
          details: distanceData.error_message || 'No additional details'
        },
        { status: 400 }
      );
    }

    const element = distanceData.rows?.[0]?.elements?.[0];

    if (!element || element.status !== 'OK') {
      let errorMessage = 'Could not calculate distance between the specified locations';
      if (element?.status === 'ZERO_RESULTS') {
        errorMessage = 'No driving route found between these locations. Please check if both locations exist and are connected by road.';
      } else if (element?.status === 'NOT_FOUND') {
        errorMessage = 'One or both locations could not be found. Please check the spelling and try again.';
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: element?.status
        },
        { status: 400 }
      );
    }

    // Convert meters to kilometers and round to nearest whole number
    const distanceInKm = Math.round(element.distance.value / 1000);
    const duration = element.duration.text;

    // Step 2: Get route details (optional, for better UX)
    let route: string[] = [cleanFrom, cleanTo];
    
    try {
      const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(cleanFrom)}&destination=${encodeURIComponent(cleanTo)}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;
      const routeResponse = await fetch(directionsUrl);
      const routeData = await routeResponse.json();

      if (routeData.status === 'OK' && routeData.routes?.[0]?.legs?.[0]?.steps) {
        const steps = routeData.routes[0].legs[0].steps;
        const waypoints: string[] = [];
        
        // Take every 5th step to get major waypoints (but not too many)
        for (let i = 0; i < steps.length && waypoints.length < 3; i += Math.max(1, Math.floor(steps.length / 4))) {
          const step = steps[i];
          const htmlText = step.html_instructions;
          
          // Extract text from HTML instructions
          const text = htmlText.replace(/<[^>]*>/g, '');
          if (text.length > 10 && text.length < 100 && !waypoints.includes(text)) {
            waypoints.push(text.substring(0, 50) + '...');
          }
        }
        
        if (waypoints.length > 0) {
          route = [cleanFrom, ...waypoints, cleanTo];
        }
      }
    } catch (routeError) {
      console.warn('Route details failed, using basic route:', routeError);
      // Continue with basic route if directions fail
    }

    const response: DistanceResponse = {
      distance: distanceInKm,
      duration: duration,
      route: route
    };

    console.log('Successfully calculated distance:', response.distance, 'km');

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error calculating distance:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error while calculating distance',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}