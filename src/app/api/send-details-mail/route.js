import sendDetailsMail from '@/utils/sendDetailsMail';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { details } = await req.json();

    if (!details?.name || !details?.tel) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await sendDetailsMail(details);

    return NextResponse.json({ success: true, message: 'email sent successfully' });
  } catch (error) {
    console.error('Error sending lead mail:', error);

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
