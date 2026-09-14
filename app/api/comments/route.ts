import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const division = req.nextUrl.searchParams.get('division')
  if (!division) {
    return NextResponse.json({ error: 'division query param is required.' }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('comments')
    // Public list intentionally omits hrdd_note (internal reviewer notes) and
    // author_role — only what's needed to show status to anyone on the page.
    .select('id, competency_index, competency_name, dimension_name, author_name, comment_text, suggested_text, status, final_text, created_at, reviewed_at')
    .eq('division_code', division.toUpperCase())
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ comments: data })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const {
    division_code,
    competency_index,
    competency_name,
    dimension_name,
    author_name,
    author_role,
    comment_text,
    suggested_text,
  } = body

  if (
    typeof division_code !== 'string' ||
    typeof competency_index !== 'number' ||
    typeof competency_name !== 'string' ||
    typeof comment_text !== 'string' ||
    !comment_text.trim()
  ) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('comments')
    .insert({
      division_code: division_code.toUpperCase(),
      competency_index,
      competency_name,
      dimension_name: typeof dimension_name === 'string' && dimension_name ? dimension_name : null,
      author_name: typeof author_name === 'string' && author_name.trim() ? author_name.trim() : 'Anonymous',
      author_role: typeof author_role === 'string' && author_role.trim() ? author_role.trim() : null,
      comment_text: comment_text.trim(),
      suggested_text: typeof suggested_text === 'string' && suggested_text.trim() ? suggested_text.trim() : null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ comment: data })
}
