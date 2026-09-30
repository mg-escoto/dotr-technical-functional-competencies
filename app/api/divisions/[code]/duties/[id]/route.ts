import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

// Lets the submitter fix their own entry while it's still awaiting HRDD
// review. Once an entry is 'final' or 'rejected' it's locked — HRDD has
// already acted on that exact wording.

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ code: string; id: string }> }) {
  const { code, id } = await params
  const body = await req.json().catch(() => null)
  const duties_text = body?.duties_text

  if (typeof duties_text !== 'string' || !duties_text.trim()) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()

  const { data: existing, error: fetchError } = await supabase
    .from('position_duties')
    .select('id, division_code, status')
    .eq('id', id)
    .eq('division_code', code.toUpperCase())
    .single()

  if (fetchError || !existing) {
    return NextResponse.json({ error: 'Entry not found.' }, { status: 404 })
  }
  if (existing.status !== 'pending') {
    return NextResponse.json({ error: `Entry is already ${existing.status} and can no longer be edited.` }, { status: 409 })
  }

  const { data, error } = await supabase
    .from('position_duties')
    .update({ duties_text: duties_text.trim() })
    .eq('id', id)
    .select('id, position_index, competency_name, duties_text, status, created_at')
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ duty: data })
}
