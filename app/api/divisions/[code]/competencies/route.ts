import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/server'

// Returns this division's competencies from the database, or { competencies: null }
// if the division hasn't been migrated yet — callers should fall back to the
// static technical-competencies.json in that case.
export async function GET(_req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from('division_competencies')
    .select('competency_index, name, definition, dimensions')
    .eq('division_code', code.toUpperCase())
    .order('competency_index', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  if (!data || data.length === 0) {
    return NextResponse.json({ competencies: null })
  }

  const competencies = data.map(row => ({
    name: row.name,
    definition: row.definition,
    dimensions: row.dimensions,
  }))
  return NextResponse.json({ competencies })
}
