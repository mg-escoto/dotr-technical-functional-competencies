import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminAuth'
import { getSupabaseAdmin } from '@/lib/supabase/server'

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ error: 'Not authenticated.' }, { status: 401 })
  }

  const { id } = await params
  const supabase = getSupabaseAdmin()

  const { data: duty, error: fetchError } = await supabase
    .from('position_duties')
    .select('*')
    .eq('id', id)
    .single()

  if (fetchError || !duty) {
    return NextResponse.json({ error: 'Entry not found.' }, { status: 404 })
  }
  if (duty.status !== 'pending') {
    return NextResponse.json({ error: `Entry is already ${duty.status}.` }, { status: 409 })
  }

  const { error: updateError } = await supabase
    .from('position_duties')
    .update({ status: 'rejected' })
    .eq('id', id)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
