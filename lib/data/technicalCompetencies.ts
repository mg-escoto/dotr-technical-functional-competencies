import raw from './technical-competencies.json'

export type ProficiencyLevel = 'Emerging' | 'Developing' | 'Proficient' | 'Advanced'

export type Dimension = {
  name: string
  definition: string | null
  levels: Record<ProficiencyLevel, string>
}

export type Competency = {
  name: string
  definition: string
  dimensions: Dimension[]
}

export type CareerStage = {
  level: string
  stage: string
  meaning: string
}

export type DivisionCategory = 'with-framework' | 'without-framework'
export type DivisionStatus = 'populated' | 'under-construction'

export type Division = {
  code: string
  name: string
  category: DivisionCategory | null
  status: DivisionStatus
  office: string
  officeOrder: number
  parentCode: string | null
  reorgNote?: string
  sourceFile: string | null
  basis: string | null
  careerProgression: CareerStage[] | null
  competencies: Competency[]
}

export const divisions = raw as Division[]

export function getDivisionByCode(code: string): Division | undefined {
  return divisions.find(d => d.code.toLowerCase() === code.toLowerCase())
}

export type OfficeGroup = {
  office: string
  officeOrder: number
  divisions: Division[]
}

// Groups divisions by their parent office/service, in org-chart order. Within a group,
// top-level divisions come first, followed by any divisions nested under one of them
// (e.g. Dental Unit under General Services Division), placed right after their parent.
export function getDivisionsByOffice(): OfficeGroup[] {
  const byOrder = new Map<number, { office: string; divisions: Division[] }>()
  for (const d of divisions) {
    if (!byOrder.has(d.officeOrder)) {
      byOrder.set(d.officeOrder, { office: d.office, divisions: [] })
    }
  }
  for (const [, group] of byOrder) {
    const all = divisions.filter(d => d.office === group.office)
    const top = all.filter(d => !d.parentCode)
    const ordered: Division[] = []
    for (const parent of top) {
      ordered.push(parent)
      ordered.push(...all.filter(d => d.parentCode === parent.code))
    }
    group.divisions = ordered
  }
  return Array.from(byOrder.entries())
    .sort(([a], [b]) => a - b)
    .map(([officeOrder, group]) => ({ officeOrder, ...group }))
}

export const LEVELS: ProficiencyLevel[] = ['Emerging', 'Developing', 'Proficient', 'Advanced']

// Same generic level descriptions used on the LPS Competencies page, kept constant
// across every division/office rather than varying per source document.
// The "stage" label mirrors the "Guided Learner" style most source docs already used —
// applied uniformly here so it reads the same everywhere.
// (No score range here — technical competencies aren't scored via a survey the way LPS is.)
export const LEVEL_SCALE: { level: ProficiencyLevel; stage: string; description: string }[] = [
  { level: 'Emerging',   stage: 'Guided Learner',                    description: 'Early-stage awareness and foundational practice' },
  { level: 'Developing', stage: 'Independent Practitioner',          description: 'Building consistent practice and growing competency' },
  { level: 'Proficient', stage: 'Senior Practitioner / Specialist',  description: 'Consistent and strong competency application' },
  { level: 'Advanced',   stage: 'Expert / Organizational Resource', description: 'Exemplary technical mastery, mentors others, and drives process improvement' },
]
