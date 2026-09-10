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
    divisionCode: 'CD',
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
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Advanced' },
          { name: 'Tax, Fidelity Bond and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Advanced' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Advanced' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Advanced' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Advanced' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Advanced' },
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Proficient' },
          { name: 'Tax, Fidelity Bond and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Proficient' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Advanced' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Advanced' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Cashiering Section (Section Head)',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Proficient' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Proficient' },
          { name: 'Tax, Fidelity Bond and Statutory Compliance', level: 'Developing' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Developing' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Proficient' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Proficient' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Reporting Section (Section Head)',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Proficient' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Developing' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Developing' },
          { name: 'Cash Collection, Deposit and Accountability Management', level: 'Developing' },
          { name: 'Tax, Fidelity Bond and Statutory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Developing' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Developing' },
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
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Emerging' },
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
          { name: 'Financial Reporting, Reconciliation and Regulatory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial and Organizational Support', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'EO',
    asOf: 'position list as provided',
    sourceNote:
      'Built from the Executive Offices position list provided directly (no salary-grade or ' +
      'section detail available), combined with the Executive Offices competency framework. ' +
      'Levels are inferred from title seniority only. Two pending items are not yet reflected ' +
      'here: (1) the Department Legislative Liaison Specialist under the Office of the ' +
      'Secretary — to be benchmarked against Legal Service once that service is populated; ' +
      '(2) any refinement to the driving-related assignments below once Legal Service is done ' +
      'and this profile is revisited.',
    positions: [
      {
        title: 'Head Executive Assistant',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Advanced' },
          { name: 'Communication and Relationship Management', level: 'Advanced' },
          { name: 'Project Management and Coordination', level: 'Advanced' },
          { name: 'Technology and Office Management', level: 'Advanced' },
          { name: 'Time Management and Prioritization', level: 'Advanced' },
          { name: 'Financial Administration and Budgeting', level: 'Advanced' },
        ],
      },
      {
        title: 'Executive Assistant IV',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Proficient' },
          { name: 'Communication and Relationship Management', level: 'Proficient' },
          { name: 'Project Management and Coordination', level: 'Proficient' },
          { name: 'Technology and Office Management', level: 'Proficient' },
          { name: 'Time Management and Prioritization', level: 'Proficient' },
          { name: 'Financial Administration and Budgeting', level: 'Proficient' },
        ],
      },
      {
        title: 'Executive Assistant III',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Proficient' },
          { name: 'Communication and Relationship Management', level: 'Proficient' },
          { name: 'Project Management and Coordination', level: 'Proficient' },
          { name: 'Technology and Office Management', level: 'Proficient' },
          { name: 'Time Management and Prioritization', level: 'Proficient' },
          { name: 'Financial Administration and Budgeting', level: 'Developing' },
        ],
      },
      {
        title: 'Executive Assistant II',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Developing' },
          { name: 'Communication and Relationship Management', level: 'Developing' },
          { name: 'Project Management and Coordination', level: 'Developing' },
          { name: 'Technology and Office Management', level: 'Developing' },
          { name: 'Time Management and Prioritization', level: 'Developing' },
          { name: 'Financial Administration and Budgeting', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Developing' },
          { name: 'Communication and Relationship Management', level: 'Developing' },
          { name: 'Project Management and Coordination', level: 'Developing' },
          { name: 'Technology and Office Management', level: 'Developing' },
          { name: 'Time Management and Prioritization', level: 'Developing' },
          { name: 'Financial Administration and Budgeting', level: 'Developing' },
        ],
      },
      {
        title: 'Executive Assistant I',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Developing' },
          { name: 'Communication and Relationship Management', level: 'Developing' },
          { name: 'Project Management and Coordination', level: 'Developing' },
          { name: 'Technology and Office Management', level: 'Developing' },
          { name: 'Time Management and Prioritization', level: 'Developing' },
          { name: 'Financial Administration and Budgeting', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant V',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Emerging' },
          { name: 'Communication and Relationship Management', level: 'Emerging' },
          { name: 'Technology and Office Management', level: 'Emerging' },
          { name: 'Time Management and Prioritization', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Emerging' },
          { name: 'Communication and Relationship Management', level: 'Emerging' },
          { name: 'Technology and Office Management', level: 'Emerging' },
          { name: 'Time Management and Prioritization', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Also performs driving duties',
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Emerging' },
          { name: 'Time Management and Prioritization', level: 'Emerging' },
          { name: 'Vehicle Operation and Driving Support', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Aide IV',
        section: 'Also performs driving duties',
        competencies: [
          { name: 'Executive Support and Coordination', level: 'Emerging' },
          { name: 'Time Management and Prioritization', level: 'Emerging' },
          { name: 'Vehicle Operation and Driving Support', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'ID',
    asOf: 'Information Division existing organizational chart',
    sourceNote:
      'Built from the Information Division existing organizational chart combined with the ' +
      'Information Division competency framework. Permanent plantilla positions only — Job ' +
      'Order and Contract of Service positions are excluded. Vacant items are included since ' +
      'they are permanent plantilla slots, just currently unfilled. Positions annotated on the ' +
      'chart as "personnel reassigned to CCAO from SAICT" are included under the section where ' +
      'the chart places them, since that reflects where they currently perform their duties. ' +
      'Where the same title/section combination is held by more than one person (e.g. three ' +
      'Traffic Aide III under Public Assistance Action Center), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Digital Media Proficiency', level: 'Advanced' },
          { name: 'Computer Proficiency', level: 'Advanced' },
          { name: 'Strategic Content Development, Research, and Speechwriting', level: 'Advanced' },
          { name: 'Media Relations, Interview Coordination, and Spokesperson Support', level: 'Advanced' },
          { name: 'Event Planning and Press Briefing Management, Event Coverage, Documentation, and Content Production', level: 'Advanced' },
          { name: 'Media Monitoring and Intelligence Gathering', level: 'Advanced' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Advanced' },
          { name: 'Internal Communication and Document Drafting', level: 'Advanced' },
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Advanced' },
          { name: 'Service Delivery', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Digital Media Proficiency', level: 'Advanced' },
          { name: 'Computer Proficiency', level: 'Advanced' },
          { name: 'Strategic Content Development, Research, and Speechwriting', level: 'Proficient' },
          { name: 'Media Relations, Interview Coordination, and Spokesperson Support', level: 'Advanced' },
          { name: 'Event Planning and Press Briefing Management, Event Coverage, Documentation, and Content Production', level: 'Proficient' },
          { name: 'Media Monitoring and Intelligence Gathering', level: 'Advanced' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Advanced' },
          { name: 'Internal Communication and Document Drafting', level: 'Advanced' },
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Advanced' },
          { name: 'Service Delivery', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Publications',
        competencies: [
          { name: 'Communications Proficiency', level: 'Proficient' },
          { name: 'Strategic Content Development, Research, and Speechwriting', level: 'Proficient' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Proficient' },
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Digital Media',
        competencies: [
          { name: 'Digital Media Proficiency', level: 'Proficient' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Proficient' },
          { name: 'Computer Proficiency', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Publications',
        competencies: [
          { name: 'Communications Proficiency', level: 'Developing' },
          { name: 'Strategic Content Development, Research, and Speechwriting', level: 'Developing' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Developing' },
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Digital Media',
        competencies: [
          { name: 'Digital Media Proficiency', level: 'Developing' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Developing' },
          { name: 'Computer Proficiency', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Publications',
        competencies: [
          { name: 'Communications Proficiency', level: 'Emerging' },
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Digital Media',
        competencies: [
          { name: 'Digital Media Proficiency', level: 'Emerging' },
          { name: 'Computer Proficiency', level: 'Emerging' },
        ],
      },
      {
        title: 'Traffic Aide III',
        section: 'Publications — personnel reassigned to CCAO from SAICT',
        competencies: [
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Digital Media',
        competencies: [
          { name: 'Computer Proficiency', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Regulation Officer I',
        section: 'Public Assistance Action Center — personnel reassigned to CCAO from SAICT',
        competencies: [
          { name: 'Service Delivery', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
        ],
      },
      {
        title: 'Traffic Aide III',
        section: 'Public Assistance Action Center — personnel reassigned to CCAO from SAICT',
        competencies: [
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Regulation Officer I',
        section: 'Media Monitoring — personnel reassigned to CCAO from SAICT',
        competencies: [
          { name: 'Media Monitoring and Intelligence Gathering', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
        ],
      },
    ],
  },
]

export function getPositionProfile(divisionCode: string): DivisionPositionProfile | undefined {
  return positionProfiles.find(p => p.divisionCode.toLowerCase() === divisionCode.toLowerCase())
}
