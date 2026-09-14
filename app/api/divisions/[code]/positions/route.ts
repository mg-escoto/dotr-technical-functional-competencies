import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

// Returns this division's position profile from the database, or { positions: null }
// if it hasn't been migrated yet — callers should fall back to the static
// positionProfiles.ts in that case.
export async function GET(_req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from('division_position_profiles')
    .select('position_index, title, section, competencies')
    .eq('division_code', code.toUpperCase())
    .order('position_index', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  if (!data || data.length === 0) {
    return NextResponse.json({ positions: null })
  }

  const positions = data.map(row => ({
    title: row.title,
    section: row.section,
    competencies: row.competencies,
  }))
  return NextResponse.json({ positions })
}
