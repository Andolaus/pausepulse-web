import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY || '',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: 'PausePulse',
        email: 'no-reply@pausepulse.com',
      },
      to: [
        {
          email: 'andreas@pausepulse.com',
          name: 'Andreas',
        },
      ],
      templateId: 1, // 👈 Bruker ID-en din her
      params: {
        name,
        email,
        message,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json({ error: error.message || 'Send failed' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
