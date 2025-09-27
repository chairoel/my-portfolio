import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.text();
  try {
    const data = JSON.parse(body || '{}');
    console.log('Contact form:', data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
