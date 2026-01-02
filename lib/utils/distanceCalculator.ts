// // File Path: utils/distanceCalculator.ts
// const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'AIzaSyAgjcWPDngXZPW6iWV38w1hY3CY4Oia5a0';

// interface DistanceResponse {
//   distance: number;
//   duration: string;
//   route: string[];
// }

// export async function calculateDistance(from: string, to: string): Promise<DistanceResponse | null> {
//   try {
//     // For development/testing, return mock data
//     if (process.env.NODE_ENV === 'development') {
//       // Mock distance calculation
//       const mockDistance = Math.floor(Math.random() * 800) + 200;
//       const mockDuration = `${Math.ceil(mockDistance / 60)}-${Math.ceil(mockDistance / 50)} hrs`;
      
//       return {
//         distance: mockDistance,
//         duration: mockDuration,
//         route: [from, to]
//       };
//     }

//     // Use Gemini API for actual distance calculation
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           contents: [{
//             parts: [{
//               text: `Calculate road distance between ${from} and ${to} in India. Return only a JSON object with distance in km, duration in hours, and route array. Format: {"distance": number, "duration": string, "route": string[]}`
//             }]
//           }],
//           generationConfig: {
//             temperature: 0.1,
//             maxOutputTokens: 100,
//           }
//         })
//       }
//     );

//     const data = await response.json();
    
//     if (data.candidates && data.candidates[0].content.parts[0].text) {
//       const resultText = data.candidates[0].content.parts[0].text;
//       // Extract JSON from response
// const jsonMatch = resultText.match(/\{[\s\S]*\}/);
//       if (jsonMatch) {
//         return JSON.parse(jsonMatch[0]);
//       }
//     }
    
//     return null;
//   } catch (error) {
//     console.error('Error calculating distance:', error);
    
//     // Fallback to local calculation based on city distances
//     const commonDistances: Record<string, number> = {
//       'bangalore-chennai': 350,
//       'mumbai-goa': 600,
//       'delhi-jaipur': 280,
//       'hyderabad-vijayawada': 270,
//       'chennai-pondicherry': 160,
//       'kolkata-digha': 180,
//       'pune-mumbai': 150,
//       'delhi-chandigarh': 250,
//       'ahmedabad-vadodara': 110,
//       'kochi-munnar': 130,
//       'bangalore-mysore': 150,
//       'delhi-agra': 240,
//       'mumbai-pune': 150,
//       'hyderabad-bangalore': 570,
//       'chennai-bangalore': 350,
//     };
    
//     const key = `${from.toLowerCase().replace(/\s+/g, '')}-${to.toLowerCase().replace(/\s+/g, '')}`;
//     const distance = commonDistances[key] || Math.floor(Math.random() * 800) + 200;
//     const duration = `${Math.ceil(distance / 60)}-${Math.ceil(distance / 50)} hrs`;
    
//     return {
//       distance,
//       duration,
//       route: [from, to]
//     };
//   }
// }







// File Path: lib/utils/distanceCalculator.ts

export interface DistanceResult {
  distance: number;
  duration: string;
  route: string[];
}

export async function calculateDistance(from: string, to: string): Promise<DistanceResult | null> {
  try {
    if (!from.trim() || !to.trim()) {
      console.error('Empty locations provided');
      return null;
    }

    const response = await fetch('/api/calculate-distance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return null;
    }

    const data = await response.json();
    
    // Check if we got valid data
    if (!data || typeof data.distance !== 'number') {
      console.error('Invalid data received:', data);
      return null;
    }

    return {
      distance: data.distance,
      duration: data.duration,
      route: data.route || []
    };

  } catch (error) {
    console.error('Error calculating distance:', error);
    return null;
  }
}