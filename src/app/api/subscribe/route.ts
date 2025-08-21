import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Liten util for å hente ut feilmelding fra vilkårlig JSON
function getErrMsg(data: unknown): string | undefined {
  if (data && typeof data === 'object') {
    const obj = data as Record<string, unknown>;
    if (typeof obj.error === 'string') return obj.error;
    if (typeof obj.message === 'string') return obj.message;
    const errors = obj.errors;
    if (Array.isArray(errors) && errors.length > 0) {
      const first = errors[0] as Record<string, unknown>;
      if (typeof first?.message === 'string') return first.message;
    }
  }
  return undefined;
}

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };

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
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      /* tom body */
    }

    if (!res.ok) {
      const msg = getErrMsg(data) ?? 'Failed to subscribe';
      console.error('Brevo subscribe error', res.status, data);
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unexpected server error';
    console.error('Subscribe route error', err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
