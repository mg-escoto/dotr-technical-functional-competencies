import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

// Actual duties/responsibilities keyed in per position + competency. Directly
// editable on the public positions page — no HRDD review gate, since this is
// factual input from the head of office rather than a proposed framework change.

export async function GET(_req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from('position_duties')
    .select('position_index, competency_name, duties_text, updated_at')
    .eq('division_code', code.toUpperCase())

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ duties: data ?? [] })
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const body = await req.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { position_index, competency_name, duties_text } = body

  if (
    typeof position_index !== 'number' ||
    typeof competency_name !== 'string' ||
    !competency_name.trim() ||
    typeof duties_text !== 'string'
  ) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('position_duties')
    .upsert(
      {
        division_code: code.toUpperCase(),
        position_index,
        competency_name,
        duties_text: duties_text.trim(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'division_code,position_index,competency_name' }
    )
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ duty: data })
}
