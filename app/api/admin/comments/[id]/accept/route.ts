import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminAuth'
import { getSupabaseAdmin } from '@/lib/supabase/server'

const VALID_LEVELS = ['Emerging', 'Developing', 'Proficient', 'Advanced']

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
    .select('*')
    .eq('id', id)
    .single()

  if (fetchError || !comment) {
    return NextResponse.json({ error: 'Comment not found.' }, { status: 404 })
  }
  if (comment.status !== 'pending') {
    return NextResponse.json({ error: `Comment is already ${comment.status}.` }, { status: 409 })
  }

  const finalText: string | null =
    typeof body.final_text === 'string' && body.final_text.trim()
      ? body.final_text.trim()
      : comment.suggested_text

  if (!finalText) {
    return NextResponse.json(
      { error: 'No text to embed — provide final_text, or the comment must already have suggested_text.' },
      { status: 400 }
    )
  }

  if (comment.target_type === 'position') {
    if (!VALID_LEVELS.includes(finalText)) {
      return NextResponse.json(
        { error: `Level to embed must be one of ${VALID_LEVELS.join(', ')}.` },
        { status: 400 }
      )
    }

    const { data: posRow, error: posFetchError } = await supabase
      .from('division_position_profiles')
      .select('*')
      .eq('division_code', comment.division_code)
      .eq('position_index', comment.position_index)
      .single()

    if (posFetchError || !posRow) {
      return NextResponse.json({ error: 'Target position not found in the database.' }, { status: 404 })
    }

    const competencies = (posRow.competencies as { name: string; level: string }[]).map(c =>
      c.name === comment.competency_name ? { ...c, level: finalText } : c
    )
    const { error: updateError } = await supabase
      .from('division_position_profiles')
      .update({ competencies, updated_at: new Date().toISOString() })
      .eq('id', posRow.id)
    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 })
    }
  } else {
    const { data: compRow, error: compFetchError } = await supabase
      .from('division_competencies')
      .select('*')
      .eq('division_code', comment.division_code)
      .eq('competency_index', comment.competency_index)
      .single()

    if (compFetchError || !compRow) {
      return NextResponse.json({ error: 'Target competency not found in the database.' }, { status: 404 })
    }

    if (comment.dimension_name) {
      const dimensions = (compRow.dimensions as { name: string; definition: string | null; levels: Record<string, string> }[]).map(
        dim => (dim.name === comment.dimension_name ? { ...dim, definition: finalText } : dim)
      )
      const { error: updateError } = await supabase
        .from('division_competencies')
        .update({ dimensions, updated_at: new Date().toISOString() })
        .eq('id', compRow.id)
      if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 })
      }
    } else {
      const { error: updateError } = await supabase
        .from('division_competencies')
        .update({ definition: finalText, updated_at: new Date().toISOString() })
        .eq('id', compRow.id)
      if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 })
      }
    }
  }

  const { error: commentUpdateError } = await supabase
    .from('comments')
    .update({
      status: 'accepted',
      final_text: finalText,
      hrdd_note: hrddNote,
      reviewed_at: new Date().toISOString(),
    })
    .eq('id', id)

  if (commentUpdateError) {
    return NextResponse.json({ error: commentUpdateError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, final_text: finalText })
}
