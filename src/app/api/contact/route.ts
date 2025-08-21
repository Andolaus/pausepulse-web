import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

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
    const { name, email, message } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const templateId = Number(process.env.BREVO_TEMPLATE_ID);
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !templateId || !senderEmail || !toEmail) {
      return NextResponse.json(
        {
          error:
            'Server misconfigured: missing one or more of BREVO_API_KEY, BREVO_TEMPLATE_ID, BREVO_SENDER_EMAIL, CONTACT_TO_EMAIL',
        },
        { status: 500 },
      );
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'PausePulse', email: senderEmail },
        to: [{ email: toEmail, name: 'Andreas' }],
        templateId,
        params: { name, email, message },
      }),
    });

    let data: unknown = null;
    try {
      data = await response.json();
    } catch {
      /* tom body */
    }

    if (!response.ok) {
      const msg = getErrMsg(data) ?? 'Send failed';
      console.error('Brevo send error', response.status, data);
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unexpected server error';
    console.error('Contact route error', err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
