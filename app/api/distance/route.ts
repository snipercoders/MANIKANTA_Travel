// app/api/distance/route.ts
import { NextRequest } from 'next/server';

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

  try {
    const prompt = `
You are a travel expert in India.
User wants to go from "${origin}" to "${destination}".
Respond ONLY in this exact JSON format (no extra text, no markdown, no code blocks):
{
  "distance_km": 148,
  "famous_places_near_destination": [
    "Mysore Palace",
    "Brindavan Gardens",
    "Chamundi Hills",
    "Mysore Zoo"
  ]
}
Give realistic distance in KM (rounded) and top 4 famous places near the destination city.
Do not add any explanation. No backticks. Just pure JSON.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            // Removed responseMimeType — causes 400 error in this endpoint
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    console.log('Gemini raw response:', text);

    let result;
    try {
      // Clean text and parse JSON (handles any extra whitespace)
      const cleanedText = text.trim().replace(/```json|```/g, '').trim();
      result = JSON.parse(cleanedText);
    } catch (err) {
      console.error('Failed to parse Gemini JSON:', err);
      result = {
        distance_km: 150,
        famous_places_near_destination: [
          'Mysore Palace',
          'Brindavan Gardens',
          'Chamundi Hills',
          'Mysore Zoo',
        ],
      };
    }

    return Response.json({
      distance: result.distance_km,
      famous_places: result.famous_places_near_destination || [],
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return Response.json(
      {
        error: 'Failed to get distance from Gemini AI',
        details: error instanceof Error ? error.message : 'Unknown error',
        fallback_distance: 150,
        fallback_places: [
          'Mysore Palace',
          'Brindavan Gardens',
          'Chamundi Hills',
          'Mysore Zoo',
        ],
      },
      { status: 500 }
    );
  }
};