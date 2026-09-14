import { NextRequest, NextResponse } from 'next/server'
import { createSessionToken, ADMIN_COOKIE_NAME, SESSION_MAX_AGE_SECONDS } from '@/lib/adminAuth'

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({ password: '' }))
  const expected = process.env.HRDD_ADMIN_PASSWORD

  if (!expected) {
    return NextResponse.json({ error: 'Server is not configured with an admin password.' }, { status: 500 })
  }
  if (typeof password !== 'string' || password !== expected) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  })
  return res
}
