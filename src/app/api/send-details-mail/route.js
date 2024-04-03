import sendDetailsMail from '@/utils/sendDetailsMail';
import { NextResponse } from 'next/server';

export async function POST(req) {


    try {
        const { details } = await req.json();

        await sendDetailsMail(details);

        return new NextResponse(JSON.stringify({ success: true, message: ' email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error:', error);

        return new NextResponse(JSON.stringify({ success: false, error: error.toString() }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
