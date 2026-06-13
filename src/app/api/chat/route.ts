import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const apiKey = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

const systemPrompt = `You are an AI receptionist named "Horizon Assistant" for "The Azure Horizon", a luxury hotel.
Your goal is to act like a lead connector: capture user details (name, check-in dates, email) and help them book a hotel room.
The Azure Horizon is a premium luxury hotel located in Orlando, Florida. We offer world-class amenities, stunning views, and exceptional service.

Keep your responses concise (2-3 sentences max), professional, warm, and highly focused on converting the visitor into a booked guest.
When the user provides their name, dates, and email, acknowledge them and say "Your booking is confirmed! Our concierge team will reach out shortly to finalize the details."
Always respond in the same language the user writes in.`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build conversation parts
    const contents = [
      { role: 'user' as const, parts: [{ text: systemPrompt }] },
      { role: 'model' as const, parts: [{ text: 'Understood. I am the Horizon Assistant for The Azure Horizon luxury hotel. How may I help you today?' }] },
      ...history.map((msg: { role: string; text: string }) => ({
        role: (msg.role === 'user' ? 'user' : 'model') as 'user' | 'model',
        parts: [{ text: msg.text }],
      })),
      { role: 'user' as const, parts: [{ text: message }] },
    ];

    const result = await model.generateContent({ contents });
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Chat API error:', errMsg);
    return NextResponse.json(
      { error: 'Failed to process chat message', details: errMsg },
      { status: 500 }
    );
  }
}
