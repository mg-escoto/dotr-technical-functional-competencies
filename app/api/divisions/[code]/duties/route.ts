import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

// Actual duties/responsibilities keyed in per position + competency. Directly
// submitted on the public positions page — no gate to submit, since this is
// factual input from the head of office rather than a proposed framework
// change. Multiple entries can exist for the same position+competency (e.g.
// two people collaborating on one position both submit their own wording);
// each stays 'pending' until a later review pass marks one 'final'.

export async function GET(_req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from('position_duties')
    .select('id, position_index, competency_name, duties_text, status, created_at')
    .eq('division_code', code.toUpperCase())
    .order('created_at', { ascending: true })

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
    typeof duties_text !== 'string' ||
    !duties_text.trim()
  ) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('position_duties')
    .insert({
      division_code: code.toUpperCase(),
      position_index,
      competency_name,
      duties_text: duties_text.trim(),
    })
    .select('id, position_index, competency_name, duties_text, status, created_at')
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ duty: data })
}
