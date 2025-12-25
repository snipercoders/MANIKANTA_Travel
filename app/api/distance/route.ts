// // app/api/distance/route.ts
// import { NextRequest } from 'next/server';

// export const GET = async (request: NextRequest) => {
//   const { searchParams } = new URL(request.url);
//   const origin = searchParams.get('origin');
//   const destination = searchParams.get('destination');

//   if (!origin || !destination) {
//     return Response.json({ error: 'Missing origin or destination' }, { status: 400 });
//   }

//   const apiKey = process.env.GEMINI_API_KEY;
//   if (!apiKey) {
//     console.error('GEMINI_API_KEY is not set in .env.local');
//     return Response.json({ error: 'Gemini API key missing' }, { status: 500 });
//   }

//   try {
//     const prompt = `
// You are a travel expert in India.
// User wants to go from "${origin}" to "${destination}".
// Respond ONLY in this exact JSON format (no extra text, no markdown, no code blocks):
// {
//   "distance_km": 148,
//   "famous_places_near_destination": [
//     "Mysore Palace",
//     "Brindavan Gardens",
//     "Chamundi Hills",
//     "Mysore Zoo"
//   ]
// }
// Give realistic distance in KM (rounded) and top 4 famous places near the destination city.
// Do not add any explanation. No backticks. Just pure JSON.
// `;

//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           contents: [{ role: 'user', parts: [{ text: prompt }] }],
//           generationConfig: {
//             temperature: 0.1,
//             // Removed responseMimeType — causes 400 error in this endpoint
//           },
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Gemini HTTP ${response.status}: ${errorText}`);
//     }

//     const data = await response.json();
//     const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

//     console.log('Gemini raw response:', text);

//     let result;
//     try {
//       // Clean text and parse JSON (handles any extra whitespace)
//       const cleanedText = text.trim().replace(/```json|```/g, '').trim();
//       result = JSON.parse(cleanedText);
//     } catch (err) {
//       console.error('Failed to parse Gemini JSON:', err);
//       result = {
//         distance_km: 150,
//         famous_places_near_destination: [
//           'Mysore Palace',
//           'Brindavan Gardens',
//           'Chamundi Hills',
//           'Mysore Zoo',
//         ],
//       };
//     }

//     return Response.json({
//       distance: result.distance_km,
//       famous_places: result.famous_places_near_destination || [],
//     });
//   } catch (error) {
//     console.error('Gemini API error:', error);
//     return Response.json(
//       {
//         error: 'Failed to get distance from Gemini AI',
//         details: error instanceof Error ? error.message : 'Unknown error',
//         fallback_distance: 150,
//         fallback_places: [
//           'Mysore Palace',
//           'Brindavan Gardens',
//           'Chamundi Hills',
//           'Mysore Zoo',
//         ],
//       },
//       { status: 500 }
//     );
//   }
// };










// app/api/distance/route.ts
import { NextRequest } from 'next/server';

// Retry configuration
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1500;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    return Response.json({ error: 'Missing origin or destination' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set in .env.local');
    return Response.json({ error: 'Gemini API key missing' }, { status: 500 });
  }

  const prompt = `
You are a travel expert. User wants to go from "${origin}" to "${destination}".

Respond ONLY with valid JSON (no markdown, no code blocks, no extra text):
{
  "distance_km": 148,
  "famous_places_near_destination": ["Place 1", "Place 2", "Place 3", "Place 4"]
}

Provide realistic distance in KM and 4 famous places near the destination.
`;

  // Retry logic
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Using the correct v1 endpoint with gemini-pro
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 500,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Gemini API error (attempt ${attempt}):`, errorText);
        
        if ((response.status === 503 || response.status === 429) && attempt < MAX_RETRIES) {
          await delay(RETRY_DELAY_MS * attempt);
          continue;
        }
        
        throw new Error(`Gemini HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      
      console.log('Gemini response:', text);

      let result;
      try {
        const cleanedText = text.trim().replace(/```json|```/g, '').trim();
        result = JSON.parse(cleanedText);
      } catch (parseError) {
        console.error('JSON parse failed, using fallback');
        result = getFallbackData(destination);
      }

      return Response.json({
        distance: result.distance_km || 500,
        famous_places: result.famous_places_near_destination || [],
        source: 'gemini',
      });

    } catch (error) {
      if (attempt === MAX_RETRIES) {
        console.error('All retries failed:', error);
        const fallback = getFallbackData(destination);
        
        return Response.json({
          distance: fallback.distance,
          famous_places: fallback.places,
          source: 'fallback',
          error_message: 'Using fallback data',
        });
      }
      
      await delay(RETRY_DELAY_MS * attempt);
    }
  }

  // Final fallback
  const fallback = getFallbackData(destination);
  return Response.json({
    distance: fallback.distance,
    famous_places: fallback.places,
    source: 'fallback',
  });
};

function getFallbackData(destination: string) {
  const dest = destination.toLowerCase().trim();
  
  const fallbacks: Record<string, { distance: number; places: string[] }> = {
    'jammu': {
      distance: 2750,
      places: ['Vaishno Devi Temple', 'Raghunath Temple', 'Bahu Fort', 'Amar Mahal Museum'],
    },
    'mysore': {
      distance: 148,
      places: ['Mysore Palace', 'Brindavan Gardens', 'Chamundi Hills', 'Mysore Zoo'],
    },
    'delhi': {
      distance: 2150,
      places: ['Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple'],
    },
    'mumbai': {
      distance: 980,
      places: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Haji Ali Dargah'],
    },
    'goa': {
      distance: 560,
      places: ['Baga Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls'],
    },
    'chennai': {
      distance: 345,
      places: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'San Thome Basilica'],
    },
    'hyderabad': {
      distance: 575,
      places: ['Charminar', 'Golconda Fort', 'Hussain Sagar Lake', 'Ramoji Film City'],
    },
    'japan': {
      distance: 6800,
      places: ['Tokyo Tower', 'Mount Fuji', 'Fushimi Inari Shrine', 'Osaka Castle'],
    },
    'america': {
      distance: 13500,
      places: ['Statue of Liberty', 'Grand Canyon', 'Golden Gate Bridge', 'Times Square'],
    },
    'pakistan': {
      distance: 3200,
      places: ['Badshahi Mosque', 'Minar-e-Pakistan', 'Faisal Mosque', 'Lahore Fort'],
    },
  };

  for (const [key, value] of Object.entries(fallbacks)) {
    if (dest.includes(key)) {
      return value;
    }
  }

  return {
    distance: 800,
    places: ['Local Attractions', 'Historical Sites', 'Natural Landmarks', 'Cultural Centers'],
  };
}