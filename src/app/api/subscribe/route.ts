// src/app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // sikre Node-runtime

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey) {
      return NextResponse.json({ error: 'Server misconfigured: BREVO_API_KEY is missing' }, { status: 500 });
    }
    if (!listId) {
      return NextResponse.json({ error: 'Server misconfigured: BREVO_LIST_ID is missing' }, { status: 500 });
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const data = await res.json().catch(() => ({} as any));

    if (!res.ok) {
      console.error('Brevo subscribe error', res.status, data);
      return NextResponse.json(
        { error: data?.message || data?.errors?.[0]?.message || 'Failed to subscribe' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe route error', err);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
