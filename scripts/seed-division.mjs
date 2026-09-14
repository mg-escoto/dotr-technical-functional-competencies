// Migrates one division's competencies from the static JSON into the
// division_competencies table, so its content becomes live-editable via the
// comment review workflow. Divisions not run through this script keep
// reading straight from the static JSON, unaffected.
//
// Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-division.mjs ID

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const divisionCode = process.argv[2]
if (!divisionCode) {
  console.error('Usage: node scripts/seed-division.mjs <DIVISION_CODE>')
  process.exit(1)
}

const url = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !serviceRoleKey) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in the environment.')
  process.exit(1)
}

const raw = readFileSync(join(__dirname, '..', 'lib', 'data', 'technical-competencies.json'), 'utf-8')
const divisions = JSON.parse(raw)
const division = divisions.find(d => d.code.toLowerCase() === divisionCode.toLowerCase())

if (!division) {
  console.error(`No division found with code "${divisionCode}".`)
  process.exit(1)
}
if (!division.competencies || division.competencies.length === 0) {
  console.error(`Division "${divisionCode}" has no competencies to seed.`)
  process.exit(1)
}

const supabase = createClient(url, serviceRoleKey, { auth: { persistSession: false } })

const rows = division.competencies.map((comp, index) => ({
  division_code: division.code.toUpperCase(),
  competency_index: index,
  name: comp.name,
  definition: comp.definition,
  dimensions: comp.dimensions,
}))

const { error } = await supabase
  .from('division_competencies')
  .upsert(rows, { onConflict: 'division_code,competency_index' })

if (error) {
  console.error('Seed failed:', error.message)
  process.exit(1)
}

console.log(`Seeded ${rows.length} competencies for ${division.code} (${division.name}).`)
