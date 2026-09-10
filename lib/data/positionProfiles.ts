import type { ProficiencyLevel } from './technicalCompetencies'

export type PositionCompetencyAssignment = {
  name: string // must match a Competency['name'] in the division's data
  level: ProficiencyLevel
}

export type PositionProfile = {
  title: string
  section: string | null
  competencies: PositionCompetencyAssignment[]
}

export type DivisionPositionProfile = {
  divisionCode: string
  asOf: string
  sourceNote: string
  positions: PositionProfile[]
}

// Illustrative/sample position-to-competency mapping, built from an org chart plus the
// division's existing competency framework — NOT an official DPCR determination. Meant as
// a starting draft for HR to review and recalibrate, not a finished position classification.
export const positionProfiles: DivisionPositionProfile[] = [
  {
    divisionCode: 'CASH',
    asOf: 'July 2026',
    sourceNote:
      'Built from the Cash Division organizational chart (as of July 2026) combined with the ' +
      'existing Cash Division competency framework. Permanent plantilla positions only — the ' +
      '2 Job Order and 1 Casual items are excluded; the vacant item is included since it is a ' +
      'permanent plantilla slot, just currently unfilled.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Advanced' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Advanced' },
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Advanced' },
          { name: 'Tax, Bond and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Advanced' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Advanced' },
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Proficient' },
          { name: 'Tax, Bond and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Cashiering Section (Section Head)',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Proficient' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Proficient' },
          { name: 'Tax, Bond and Statutory Compliance', level: 'Developing' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Reporting Section (Section Head)',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Proficient' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Developing' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Developing' },
          { name: 'Tax, Bond and Statutory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Developing' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Emerging' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and COA Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
    ],
  },
]

export function getPositionProfile(divisionCode: string): DivisionPositionProfile | undefined {
  return positionProfiles.find(p => p.divisionCode.toLowerCase() === divisionCode.toLowerCase())
}
