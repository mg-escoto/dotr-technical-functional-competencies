// Migrates one division's Position Competency Profile from positionProfiles.ts
// into the division_position_profiles table, so it becomes live-editable via
// the comment review workflow. Divisions not run through this script keep
// reading straight from the static file, unaffected.
//
// Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed-division-positions.ts ID

import { createClient } from '@supabase/supabase-js'
import { getPositionProfile } from '../lib/data/positionProfiles'

const divisionCode = process.argv[2]
if (!divisionCode) {
  console.error('Usage: npx tsx scripts/seed-division-positions.ts <DIVISION_CODE>')
  process.exit(1)
}

const url = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !serviceRoleKey) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in the environment.')
  process.exit(1)
}

const profile = getPositionProfile(divisionCode)
if (!profile) {
  console.error(`No position profile found for division "${divisionCode}".`)
  process.exit(1)
}

const supabase = createClient(url, serviceRoleKey, { auth: { persistSession: false } })

const rows = profile.positions.map((pos, index) => ({
  division_code: profile.divisionCode.toUpperCase(),
  position_index: index,
  title: pos.title,
  section: pos.section,
  competencies: pos.competencies,
}))

async function main() {
  const { error } = await supabase
    .from('division_position_profiles')
    .upsert(rows, { onConflict: 'division_code,position_index' })

  if (error) {
    console.error('Seed failed:', error.message)
    process.exit(1)
  }

  console.log(`Seeded ${rows.length} positions for ${profile!.divisionCode}.`)
}

main()
