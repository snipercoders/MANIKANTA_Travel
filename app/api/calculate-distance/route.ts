// File Path: app/api/calculate-distance/route.ts

import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

interface DistanceResponse {
  distance: number;
  duration: string;
  route: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { from, to } = await request.json();

    if (!from || !to) {
      return NextResponse.json(
        { error: 'Both pickup and destination locations are required' },
        { status: 400 }
      );
    }

    if (!GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key not configured');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Step 1: Use Distance Matrix API to get distance and duration
    const distanceMatrixUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(from)}&destinations=${encodeURIComponent(to)}&mode=driving&language=en&key=${GOOGLE_MAPS_API_KEY}`;

    const distanceResponse = await fetch(distanceMatrixUrl);
    const distanceData = await distanceResponse.json();

    console.log('Distance Matrix Response:', JSON.stringify(distanceData, null, 2));

    if (distanceData.status !== 'OK') {
      return NextResponse.json(
        { error: `Google Maps API error: ${distanceData.status}` },
        { status: 400 }
      );
    }

    const element = distanceData.rows?.[0]?.elements?.[0];

    if (!element || element.status !== 'OK') {
      return NextResponse.json(
        { error: 'Could not calculate distance between the specified locations' },
        { status: 400 }
      );
    }

    // Convert meters to kilometers and round to nearest whole number
    const distanceInKm = Math.round(element.distance.value / 1000);
    const duration = element.duration.text;

    // Step 2: Get route details using Directions API
    const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&mode=driving&key=${GOOGLE_MAPS_API_KEY}`;

    const routeResponse = await fetch(directionsUrl);
    const routeData = await routeResponse.json();

    let route: string[] = [from, to];

    if (routeData.status === 'OK' && routeData.routes?.[0]?.legs?.[0]) {
      const leg = routeData.routes[0].legs[0];
      
      // Extract major waypoints from the route steps
      const majorLocations: Set<string> = new Set();
      
      if (leg.steps) {
        for (const step of leg.steps) {
          const instructions = step.html_instructions;
          
          // Extract location names from instructions
          const locationPatterns = [
            /(?:via|through|onto|toward)\s+<b>([^<]+)<\/b>/gi,
            /(?:Take|Continue on)\s+<b>([^<]+)<\/b>/gi,
            /(?:Turn|Exit)\s+(?:left|right|onto)\s+<b>([^<]+)<\/b>/gi
          ];
          
          for (const pattern of locationPatterns) {
            let match;
            while ((match = pattern.exec(instructions)) !== null) {
              const location = match[1].trim();
              // Filter out short names and common road types
              if (location.length > 3 && 
                  !location.match(/^(Road|Street|Avenue|Highway|Route|Exit|Ramp)$/i) &&
                  !location.match(/^\d+$/)) {
                majorLocations.add(location);
              }
            }
          }
        }
      }
      
      // Limit to 3-4 major waypoints
      const uniqueLocations = Array.from(majorLocations).slice(0, 4);
      
      if (uniqueLocations.length > 0) {
        route = [from, ...uniqueLocations, to];
      }
    }

    const response: DistanceResponse = {
      distance: distanceInKm,
      duration: duration,
      route: route
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error calculating distance:', error);
    return NextResponse.json(
      { error: 'Internal server error while calculating distance' },
      { status: 500 }
    );
  }
}