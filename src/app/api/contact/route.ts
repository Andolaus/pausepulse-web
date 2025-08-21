import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const templateId = Number(process.env.BREVO_TEMPLATE_ID);
    const senderEmail = process.env.BREVO_SENDER_EMAIL;      // verifisert i Brevo
    const toEmail = process.env.CONTACT_TO_EMAIL;            // mottaker

    if (!apiKey || !templateId || !senderEmail || !toEmail) {
      return NextResponse.json(
        { error: 'Server misconfigured: missing one or more of BREVO_API_KEY, BREVO_TEMPLATE_ID, BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'PausePulse',
          email: senderEmail,
        },
        to: [{ email: toEmail, name: 'Andreas' }],
        templateId,
        params: { name, email, message },
      }),
    });

    const data = await response.json().catch(() => ({} as any));

    if (!response.ok) {
      console.error('Brevo send error', response.status, data);
      return NextResponse.json(
        { error: data?.message || data?.errors?.[0]?.message || 'Send failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact route error', err);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
