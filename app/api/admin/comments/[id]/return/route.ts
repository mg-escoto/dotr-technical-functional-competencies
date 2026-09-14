import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminAuth'
import { getSupabaseAdmin } from '@/lib/supabase/server'

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json().catch(() => ({}))
  const hrddNote: string | null = typeof body.hrdd_note === 'string' ? body.hrdd_note : null

  const supabase = getSupabaseAdmin()

  const { data: comment, error: fetchError } = await supabase
    .from('comments')
    .select('status')
    .eq('id', id)
    .single()

  if (fetchError || !comment) {
    return NextResponse.json({ error: 'Comment not found.' }, { status: 404 })
  }
  if (comment.status !== 'pending') {
    return NextResponse.json({ error: `Comment is already ${comment.status}.` }, { status: 409 })
  }

  const { error: updateError } = await supabase
    .from('comments')
    .update({ status: 'returned', hrdd_note: hrddNote, reviewed_at: new Date().toISOString() })
    .eq('id', id)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
