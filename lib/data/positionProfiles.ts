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
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Advanced' },
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Advanced' },
          { name: 'Tax, Fidelity Bond, and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Advanced' },
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
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Advanced' },
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Proficient' },
          { name: 'Tax, Fidelity Bond, and Statutory Compliance', level: 'Advanced' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Proficient' },
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
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Proficient' },
          { name: 'Tax, Fidelity Bond, and Statutory Compliance', level: 'Developing' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Developing' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Proficient' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Proficient' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Reporting Section (Section Head)',
        competencies: [
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Proficient' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Developing' },
          { name: 'Internal Control and Cash Management Process Improvement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Developing' },
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Developing' },
          { name: 'Tax, Fidelity Bond, and Statutory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Developing' },
          { name: 'Cash Operations Coordination and Banking Liaison', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Developing' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Disbursement and Payment Processing', level: 'Emerging' },
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
          { name: 'Digital Treasury and Electronic Payment Operations', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Cashiering Section',
        competencies: [
          { name: 'Cash Collection, Deposit, and Accountability Management', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Reporting Section',
        competencies: [
          { name: 'Financial Reporting, Reconciliation, and Regulatory Compliance', level: 'Emerging' },
          { name: 'Financial Documentation, Reportorial, and Organizational Support', level: 'Emerging' },
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
      'Levels are inferred from title seniority only. The Department Legislative Liaison ' +
      'Specialist under the Office of the Secretary and its "Legislative Liaison and ' +
      'Coordination" competency are benchmarked from the Legislative and Issuances ' +
      'Division\'s "Legislative Liaison and Stakeholder Engagement" competency, now that ' +
      'Legal Service has been populated.',
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
        title: 'Department Legislative Liaison Specialist',
        section: 'Office of the Secretary',
        competencies: [
          { name: 'Legislative Liaison and Coordination', level: 'Proficient' },
          { name: 'Communication and Relationship Management', level: 'Proficient' },
          { name: 'Executive Support and Coordination', level: 'Developing' },
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
          { name: 'Computer Proficiency', level: 'Proficient' },
          { name: 'Internal Communication and Document Drafting', level: 'Proficient' },
          { name: 'Service Delivery', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Digital Media',
        competencies: [
          { name: 'Digital Media Proficiency', level: 'Proficient' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Proficient' },
          { name: 'Computer Proficiency', level: 'Proficient' },
          { name: 'Internal Communication and Document Drafting', level: 'Proficient' },
          { name: 'Service Delivery', level: 'Proficient' },
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
          { name: 'Computer Proficiency', level: 'Developing' },
          { name: 'Internal Communication and Document Drafting', level: 'Developing' },
          { name: 'Service Delivery', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Digital Media',
        competencies: [
          { name: 'Digital Media Proficiency', level: 'Developing' },
          { name: 'Graphic Design and Layout Production and Audio-Visual Production', level: 'Developing' },
          { name: 'Computer Proficiency', level: 'Developing' },
          { name: 'Internal Communication and Document Drafting', level: 'Developing' },
          { name: 'Service Delivery', level: 'Developing' },
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
        section: 'Publications',
        competencies: [
          { name: 'Content Documentation, Records Management, and Digital Archiving', level: 'Emerging' },
          { name: 'Communications Proficiency', level: 'Emerging' },
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
        section: 'Public Assistance Action Center',
        competencies: [
          { name: 'Service Delivery', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
        ],
      },
      {
        title: 'Traffic Aide III',
        section: 'Public Assistance Action Center',
        competencies: [
          { name: 'Service Delivery', level: 'Emerging' },
          { name: 'Communications Proficiency', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Regulation Officer I',
        section: 'Media Monitoring',
        competencies: [
          { name: 'Media Monitoring and Intelligence Gathering', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'AMD',
    asOf: 'Asset Management Division current organizational chart',
    sourceNote:
      'Built from the Asset Management Division current organizational chart combined with the ' +
      'Asset Management Division competency framework. Permanent plantilla positions only — the ' +
      'chart had no Job Order or Contract of Service entries to exclude. Vacant items are ' +
      'included since they are permanent plantilla slots, just currently unfilled. Where the ' +
      'same title/section combination is held by more than one person (two Administrative ' +
      'Officer I under Inventory and Insurance Section), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Inventory Management', level: 'Advanced' },
          { name: 'Property Management and Accountability', level: 'Advanced' },
          { name: 'Asset Management System', level: 'Advanced' },
          { name: 'Property Audit and Compliance Management', level: 'Advanced' },
          { name: 'Property Utilization and Disposal Management', level: 'Advanced' },
          { name: 'Property Policy Development and Governance', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Inventory Management', level: 'Advanced' },
          { name: 'Property Management and Accountability', level: 'Advanced' },
          { name: 'Asset Management System', level: 'Advanced' },
          { name: 'Property Audit and Compliance Management', level: 'Advanced' },
          { name: 'Property Utilization and Disposal Management', level: 'Advanced' },
          { name: 'Property Policy Development and Governance', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Inventory and Insurance Section',
        competencies: [
          { name: 'Inventory Management', level: 'Developing' },
          { name: 'Property Management and Accountability', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Inventory and Insurance Section',
        competencies: [
          { name: 'Inventory Management', level: 'Developing' },
          { name: 'Property Management and Accountability', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Inventory and Insurance Section',
        competencies: [
          { name: 'Inventory Management', level: 'Emerging' },
          { name: 'Property Management and Accountability', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Inventory and Insurance Section',
        competencies: [
          { name: 'Inventory Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Inventory and Insurance Section',
        competencies: [
          { name: 'Inventory Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Inspection and Disposal Section',
        competencies: [
          { name: 'Property Audit and Compliance Management', level: 'Proficient' },
          { name: 'Property Utilization and Disposal Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Inspection and Disposal Section',
        competencies: [
          { name: 'Property Audit and Compliance Management', level: 'Emerging' },
          { name: 'Property Utilization and Disposal Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Inspection and Disposal Section',
        competencies: [
          { name: 'Property Audit and Compliance Management', level: 'Emerging' },
          { name: 'Property Utilization and Disposal Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Inspection and Disposal Section',
        competencies: [
          { name: 'Property Utilization and Disposal Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'GSD',
    asOf: 'General Services Division current organizational structure',
    sourceNote:
      'Built from the General Services Division current organizational structure (Chief/Supervising ' +
      'Administrative Officer plus the General Support Unit and Supply Unit) combined with the ' +
      'General Services Division competency framework. Permanent plantilla positions only — the ' +
      'chart had no Job Order or Contract of Service entries to exclude. Where the chart shows ' +
      'multiple people under the same title (e.g. the 13 Administrative Aide III drivers, or the ' +
      '8 Administrative Aide I), it is listed once as a single role. The Medical and Dental Unit ' +
      'branch of this chart is covered separately under the Dental Unit and Medical Unit tabs.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Service Delivery', level: 'Advanced' },
          { name: 'Administrative Support and Coordination', level: 'Advanced' },
          { name: 'Policy Implementation and Compliance', level: 'Advanced' },
          { name: 'Facilities and Operational Risk Management', level: 'Advanced' },
          { name: 'Maintenance and Support Services Management', level: 'Advanced' },
          { name: 'Government Procurement Management', level: 'Advanced' },
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Advanced' },
          { name: 'Financial Transactions and Disbursement Management', level: 'Advanced' },
          { name: 'Fleet Management', level: 'Advanced' },
          { name: 'Building Maintenance and Repair', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Service Delivery', level: 'Advanced' },
          { name: 'Administrative Support and Coordination', level: 'Advanced' },
          { name: 'Policy Implementation and Compliance', level: 'Advanced' },
          { name: 'Facilities and Operational Risk Management', level: 'Advanced' },
          { name: 'Maintenance and Support Services Management', level: 'Advanced' },
          { name: 'Government Procurement Management', level: 'Advanced' },
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Advanced' },
          { name: 'Financial Transactions and Disbursement Management', level: 'Proficient' },
          { name: 'Fleet Management', level: 'Advanced' },
          { name: 'Building Maintenance and Repair', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Proficient' },
          { name: 'Administrative Support and Coordination', level: 'Proficient' },
          { name: 'Policy Implementation and Compliance', level: 'Developing' },
          { name: 'Facilities and Operational Risk Management', level: 'Proficient' },
          { name: 'Maintenance and Support Services Management', level: 'Proficient' },
          { name: 'Fleet Management', level: 'Proficient' },
          { name: 'Building Maintenance and Repair', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Developing' },
          { name: 'Administrative Support and Coordination', level: 'Developing' },
          { name: 'Facilities and Operational Risk Management', level: 'Developing' },
          { name: 'Maintenance and Support Services Management', level: 'Developing' },
          { name: 'Fleet Management', level: 'Developing' },
          { name: 'Building Maintenance and Repair', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Developing' },
          { name: 'Administrative Support and Coordination', level: 'Developing' },
          { name: 'Facilities and Operational Risk Management', level: 'Emerging' },
          { name: 'Maintenance and Support Services Management', level: 'Developing' },
          { name: 'Fleet Management', level: 'Emerging' },
          { name: 'Building Maintenance and Repair', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI (Mechanic)',
        section: 'General Support Unit',
        competencies: [
          { name: 'Fleet Management', level: 'Developing' },
          { name: 'Maintenance and Support Services Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI (Utility II)',
        section: 'General Support Unit',
        competencies: [
          { name: 'Maintenance and Support Services Management', level: 'Developing' },
          { name: 'Facilities and Operational Risk Management', level: 'Emerging' },
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'General Support Unit',
        competencies: [
          { name: 'Maintenance and Support Services Management', level: 'Emerging' },
          { name: 'Service Delivery', level: 'Emerging' },
          { name: 'Administrative Support and Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide V (Utility I)',
        section: 'General Support Unit',
        competencies: [
          { name: 'Maintenance and Support Services Management', level: 'Emerging' },
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide IV (Mechanic I)',
        section: 'General Support Unit',
        competencies: [
          { name: 'Fleet Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide IV',
        section: 'General Support Unit',
        competencies: [
          { name: 'Maintenance and Support Services Management', level: 'Emerging' },
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide III (Driver)',
        section: 'General Support Unit',
        competencies: [
          { name: 'Fleet Management', level: 'Emerging' },
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide III',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Emerging' },
          { name: 'Maintenance and Support Services Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide I',
        section: 'General Support Unit',
        competencies: [
          { name: 'Service Delivery', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Supply Unit',
        competencies: [
          { name: 'Government Procurement Management', level: 'Proficient' },
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Proficient' },
          { name: 'Financial Transactions and Disbursement Management', level: 'Proficient' },
          { name: 'Administrative Support and Coordination', level: 'Proficient' },
          { name: 'Policy Implementation and Compliance', level: 'Developing' },
          { name: 'Service Delivery', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Supply Unit',
        competencies: [
          { name: 'Government Procurement Management', level: 'Developing' },
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Developing' },
          { name: 'Financial Transactions and Disbursement Management', level: 'Developing' },
          { name: 'Service Delivery', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Supply Unit',
        competencies: [
          { name: 'Government Procurement Management', level: 'Emerging' },
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Emerging' },
          { name: 'Financial Transactions and Disbursement Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: 'Supply Unit',
        competencies: [
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Emerging' },
          { name: 'Administrative Support and Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide I',
        section: 'Supply Unit',
        competencies: [
          { name: 'Supply Chain, Inventory, and Materials Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'DENTAL',
    asOf: 'General Services Division current organizational chart (Medical and Dental Unit)',
    sourceNote:
      'Built from the Medical and Dental Unit portion of the General Services Division current ' +
      'organizational chart, combined with the Dental Unit competency framework. Permanent ' +
      'plantilla positions only — the chart had no Job Order or Contract of Service entries to ' +
      'exclude. Dentist III is the ranking dental professional in the unit, so all Dental Unit ' +
      'competencies are set to Advanced for that position.',
    positions: [
      {
        title: 'Dentist III',
        section: null,
        competencies: [
          { name: 'Patient Care', level: 'Advanced' },
          { name: 'Dental Knowledge', level: 'Advanced' },
          { name: 'Professional, Legal, and Ethical Dental Practice', level: 'Advanced' },
          { name: 'Dental Procedure Proficiency', level: 'Advanced' },
          { name: 'Emergency Response', level: 'Advanced' },
          { name: 'Occupational Safety', level: 'Advanced' },
        ],
      },
      {
        title: 'Dental Hygienist',
        section: null,
        competencies: [
          { name: 'Patient Care', level: 'Developing' },
          { name: 'Dental Knowledge', level: 'Developing' },
          { name: 'Professional, Legal, and Ethical Dental Practice', level: 'Developing' },
          { name: 'Dental Procedure Proficiency', level: 'Developing' },
          { name: 'Emergency Response', level: 'Emerging' },
          { name: 'Occupational Safety', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'MEDICAL',
    asOf: 'General Services Division current organizational chart (Medical and Dental Unit)',
    sourceNote:
      'Built from the Medical and Dental Unit portion of the General Services Division current ' +
      'organizational chart, combined with the benchmarked Medical Unit competency framework. ' +
      'Permanent plantilla positions only — the chart had no Job Order or Contract of Service ' +
      'entries to exclude. Medical Officer IV is the ranking medical professional in the unit, so ' +
      'all Medical Unit competencies are set to Advanced for that position. The chart shows two ' +
      'Nurse I items with the same title, section, and competency assignments, so they are ' +
      'listed once as a single role.',
    positions: [
      {
        title: 'Medical Officer IV',
        section: null,
        competencies: [
          { name: 'Patient Care', level: 'Advanced' },
          { name: 'Medical Knowledge', level: 'Advanced' },
          { name: 'Professional, Legal, and Ethical Medical Practice', level: 'Advanced' },
          { name: 'Medical and Clinical Procedure Proficiency', level: 'Advanced' },
          { name: 'Emergency Response', level: 'Advanced' },
          { name: 'Occupational Safety', level: 'Advanced' },
        ],
      },
      {
        title: 'Nurse I',
        section: null,
        competencies: [
          { name: 'Patient Care', level: 'Developing' },
          { name: 'Medical Knowledge', level: 'Developing' },
          { name: 'Professional, Legal, and Ethical Medical Practice', level: 'Developing' },
          { name: 'Medical and Clinical Procedure Proficiency', level: 'Developing' },
          { name: 'Emergency Response', level: 'Developing' },
          { name: 'Occupational Safety', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'HRDD',
    asOf: 'HRDD existing organizational structure (per plantilla from DBM)',
    sourceNote:
      'Built from the Human Resource Development Division existing organizational structure ' +
      '(per plantilla from the Department of Budget and Management) combined with the HRDD ' +
      'competency framework. All items shown are permanent plantilla positions — the chart had ' +
      'no Job Order or Contract of Service entries to exclude. The vacant Administrative Officer ' +
      'V under the Scholarship and Travel Management Section is included since it is a permanent ' +
      'plantilla slot, just currently unfilled. The Administrative Aide II plantilla item under ' +
      'the Scholarship and Travel Management Section is noted on the chart as currently assigned ' +
      'to the Asset Management Division; it is still profiled here since the position itself ' +
      'belongs to this section. Where the same title/section combination is held by more than ' +
      'one person (the two Administrative Assistant II under the Learning and Development ' +
      'Section), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Learning and Development Planning', level: 'Advanced' },
          { name: 'Program/Course Design and Development', level: 'Advanced' },
          { name: 'Program/Course Delivery and Administration', level: 'Advanced' },
          { name: 'Learning Facilitation', level: 'Advanced' },
          { name: 'Learning Measurement and Evaluation', level: 'Advanced' },
          { name: 'Competency Development and Validation', level: 'Advanced' },
          { name: 'Strategic Planning and Organizational Development', level: 'Advanced' },
          { name: 'Performance Management', level: 'Advanced' },
          { name: 'Stakeholder Development and Engagement', level: 'Advanced' },
          { name: 'Career Executive Service (CES) Administration', level: 'Advanced' },
          { name: 'Travel Management', level: 'Advanced' },
          { name: 'Records and Information Management', level: 'Advanced' },
          { name: 'Audio-Visual and Conference Systems Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Learning and Development Planning', level: 'Advanced' },
          { name: 'Program/Course Design and Development', level: 'Advanced' },
          { name: 'Program/Course Delivery and Administration', level: 'Advanced' },
          { name: 'Learning Facilitation', level: 'Advanced' },
          { name: 'Learning Measurement and Evaluation', level: 'Advanced' },
          { name: 'Competency Development and Validation', level: 'Advanced' },
          { name: 'Strategic Planning and Organizational Development', level: 'Advanced' },
          { name: 'Performance Management', level: 'Advanced' },
          { name: 'Stakeholder Development and Engagement', level: 'Advanced' },
          { name: 'Career Executive Service (CES) Administration', level: 'Advanced' },
          { name: 'Travel Management', level: 'Advanced' },
          { name: 'Records and Information Management', level: 'Advanced' },
          { name: 'Audio-Visual and Conference Systems Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Learning and Development Section',
        competencies: [
          { name: 'Learning and Development Planning', level: 'Proficient' },
          { name: 'Program/Course Design and Development', level: 'Proficient' },
          { name: 'Program/Course Delivery and Administration', level: 'Proficient' },
          { name: 'Learning Facilitation', level: 'Proficient' },
          { name: 'Learning Measurement and Evaluation', level: 'Proficient' },
          { name: 'Competency Development and Validation', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Learning and Development Section',
        competencies: [
          { name: 'Learning and Development Planning', level: 'Developing' },
          { name: 'Program/Course Design and Development', level: 'Developing' },
          { name: 'Program/Course Delivery and Administration', level: 'Developing' },
          { name: 'Learning Facilitation', level: 'Developing' },
          { name: 'Competency Development and Validation', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Learning and Development Section',
        competencies: [
          { name: 'Program/Course Delivery and Administration', level: 'Developing' },
          { name: 'Learning Facilitation', level: 'Emerging' },
          { name: 'Learning Measurement and Evaluation', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Learning and Development Section',
        competencies: [
          { name: 'Audio-Visual and Conference Systems Management', level: 'Proficient' },
          { name: 'Program/Course Delivery and Administration', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
          { name: 'Travel Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'Learning and Development Section',
        competencies: [
          { name: 'Program/Course Delivery and Administration', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Scholarship and Travel Management Section',
        competencies: [
          { name: 'Learning and Development Planning', level: 'Proficient' },
          { name: 'Program/Course Delivery and Administration', level: 'Proficient' },
          { name: 'Learning Measurement and Evaluation', level: 'Proficient' },
          { name: 'Travel Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Scholarship and Travel Management Section',
        competencies: [
          { name: 'Learning and Development Planning', level: 'Developing' },
          { name: 'Program/Course Delivery and Administration', level: 'Developing' },
          { name: 'Learning Measurement and Evaluation', level: 'Developing' },
          { name: 'Travel Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Scholarship and Travel Management Section',
        competencies: [
          { name: 'Program/Course Delivery and Administration', level: 'Developing' },
          { name: 'Travel Management', level: 'Developing' },
          { name: 'Learning Measurement and Evaluation', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Scholarship and Travel Management Section',
        competencies: [
          { name: 'Travel Management', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'Scholarship and Travel Management Section',
        competencies: [
          { name: 'Travel Management', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Performance Review and Monitoring Section',
        competencies: [
          { name: 'Performance Management', level: 'Proficient' },
          { name: 'Career Executive Service (CES) Administration', level: 'Proficient' },
          { name: 'Strategic Planning and Organizational Development', level: 'Proficient' },
          { name: 'Stakeholder Development and Engagement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Performance Review and Monitoring Section',
        competencies: [
          { name: 'Performance Management', level: 'Developing' },
          { name: 'Career Executive Service (CES) Administration', level: 'Developing' },
          { name: 'Stakeholder Development and Engagement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Performance Review and Monitoring Section',
        competencies: [
          { name: 'Performance Management', level: 'Developing' },
          { name: 'Career Executive Service (CES) Administration', level: 'Emerging' },
          { name: 'Stakeholder Development and Engagement', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'Performance Review and Monitoring Section',
        competencies: [
          { name: 'Performance Management', level: 'Emerging' },
          { name: 'Stakeholder Development and Engagement', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'HRMD',
    asOf: 'HRMD current organizational structure',
    sourceNote:
      'Built from the Human Resource Management Division current organizational structure ' +
      '(Recruitment, Selection and Placement Section, Compensation and Benefits Section, ' +
      'Employee Relations and Succession Planning Section, and the ad hoc Personnel Records ' +
      'Team) combined with the HRMD competency framework. Permanent plantilla positions only — ' +
      'Contract of Service and Job Order items (an Administrative Officer IV and two ' +
      'Administrative Officer II under RSP, two Administrative Officer II under ComBen, and one ' +
      'Administrative Assistant II under the Personnel Records Team) are excluded. There is one ' +
      'Supervising Administrative Officer post, profiled with the same competencies as the Chief ' +
      'Administrative Officer; the chart\'s two other Supervising Administrative Officer items ' +
      '(under Compensation and Benefits and under Employee Relations and Succession Planning) ' +
      'are coterminous with the incumbent (CTI) and are not profiled as separate standing posts. ' +
      'Vacant items are included since they are permanent plantilla slots, just currently ' +
      'unfilled. Where the same title/section combination is held by more than one person (e.g. ' +
      'two Administrative Officer IV under RSP, or three Administrative Assistant II under the ' +
      'Personnel Records Team), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Recruitment, Selection, and Placement', level: 'Advanced' },
          { name: 'Compensation and Benefits Management', level: 'Advanced' },
          { name: 'Leave Management', level: 'Advanced' },
          { name: 'Employee Relations, Welfare, Discipline, and Succession Planning', level: 'Advanced' },
          { name: 'Rewards and Recognition Management', level: 'Advanced' },
          { name: 'Human Resource Records and Information Management', level: 'Advanced' },
          { name: 'Organizational Profiling and HR Systems Planning', level: 'Advanced' },
          { name: 'HR Policy, Process, and Service Delivery Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Recruitment, Selection, and Placement', level: 'Advanced' },
          { name: 'Compensation and Benefits Management', level: 'Advanced' },
          { name: 'Leave Management', level: 'Advanced' },
          { name: 'Employee Relations, Welfare, Discipline, and Succession Planning', level: 'Advanced' },
          { name: 'Rewards and Recognition Management', level: 'Advanced' },
          { name: 'Human Resource Records and Information Management', level: 'Advanced' },
          { name: 'Organizational Profiling and HR Systems Planning', level: 'Advanced' },
          { name: 'HR Policy, Process, and Service Delivery Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Recruitment, Selection and Placement Section (RSP)',
        competencies: [
          { name: 'Recruitment, Selection, and Placement', level: 'Proficient' },
          { name: 'HR Policy, Process, and Service Delivery Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Recruitment, Selection and Placement Section (RSP)',
        competencies: [
          { name: 'Recruitment, Selection, and Placement', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Recruitment, Selection and Placement Section (RSP)',
        competencies: [
          { name: 'Recruitment, Selection, and Placement', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Compensation and Benefits Section (ComBen)',
        competencies: [
          { name: 'Compensation and Benefits Management', level: 'Proficient' },
          { name: 'Leave Management', level: 'Proficient' },
          { name: 'Rewards and Recognition Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Compensation and Benefits Section (ComBen)',
        competencies: [
          { name: 'Compensation and Benefits Management', level: 'Developing' },
          { name: 'Leave Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Compensation and Benefits Section (ComBen)',
        competencies: [
          { name: 'Compensation and Benefits Management', level: 'Developing' },
          { name: 'Leave Management', level: 'Developing' },
          { name: 'Rewards and Recognition Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Compensation and Benefits Section (ComBen)',
        competencies: [
          { name: 'Compensation and Benefits Management', level: 'Emerging' },
          { name: 'Leave Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Compensation and Benefits Section (ComBen)',
        competencies: [
          { name: 'Compensation and Benefits Management', level: 'Emerging' },
          { name: 'Leave Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Employee Relations and Succession Planning Section (ERSP)',
        competencies: [
          { name: 'Employee Relations, Welfare, Discipline, and Succession Planning', level: 'Proficient' },
          { name: 'Rewards and Recognition Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Employee Relations and Succession Planning Section (ERSP)',
        competencies: [
          { name: 'Employee Relations, Welfare, Discipline, and Succession Planning', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Employee Relations and Succession Planning Section (ERSP)',
        competencies: [
          { name: 'Employee Relations, Welfare, Discipline, and Succession Planning', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Personnel Records Team (Ad Hoc)',
        competencies: [
          { name: 'Human Resource Records and Information Management', level: 'Proficient' },
          { name: 'Organizational Profiling and HR Systems Planning', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Personnel Records Team (Ad Hoc)',
        competencies: [
          { name: 'Human Resource Records and Information Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Personnel Records Team (Ad Hoc)',
        competencies: [
          { name: 'Human Resource Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide IV',
        section: 'Personnel Records Team (Ad Hoc)',
        competencies: [
          { name: 'Human Resource Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'Personnel Records Team (Ad Hoc)',
        competencies: [
          { name: 'Human Resource Records and Information Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'CRD',
    asOf: 'CRD current organizational structure and manpower complement',
    sourceNote:
      'Built from the Central Records Division current organizational structure and manpower ' +
      'complement (Receiving Section, Releasing Section, and Archiving Section) combined with ' +
      'the CRD competency framework. Permanent plantilla positions only — two Administrative ' +
      'Aide IV (Job Order) items are excluded. Vacant items are included since they are ' +
      'permanent plantilla slots, just currently unfilled. Positions annotated as reassigned to ' +
      'or from another division are profiled under the section where the chart places the slot, ' +
      'since that reflects the position itself rather than the individual currently assigned. ' +
      'Where the same title/section combination is held by more than one person (e.g. two ' +
      'Administrative Aide III and two Administrative Aide II under the Releasing Section), it ' +
      'is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Records and Information Management', level: 'Advanced' },
          { name: 'Document Control and Tracking', level: 'Advanced' },
          { name: 'Digital Records Management', level: 'Advanced' },
          { name: 'Stakeholder Coordination', level: 'Advanced' },
          { name: 'Quality Assurance', level: 'Advanced' },
          { name: 'Records Preservation and Disposition', level: 'Advanced' },
          { name: 'Customer Service', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Records and Information Management', level: 'Advanced' },
          { name: 'Document Control and Tracking', level: 'Advanced' },
          { name: 'Digital Records Management', level: 'Advanced' },
          { name: 'Stakeholder Coordination', level: 'Advanced' },
          { name: 'Quality Assurance', level: 'Advanced' },
          { name: 'Records Preservation and Disposition', level: 'Advanced' },
          { name: 'Customer Service', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Receiving Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Proficient' },
          { name: 'Records and Information Management', level: 'Proficient' },
          { name: 'Quality Assurance', level: 'Developing' },
          { name: 'Customer Service', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Receiving Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Developing' },
          { name: 'Records and Information Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Receiving Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Developing' },
          { name: 'Customer Service', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Receiving Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide III',
        section: 'Receiving Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Proficient' },
          { name: 'Records and Information Management', level: 'Proficient' },
          { name: 'Quality Assurance', level: 'Developing' },
          { name: 'Customer Service', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Developing' },
          { name: 'Records and Information Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
          { name: 'Records and Information Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide III',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide II',
        section: 'Releasing Section',
        competencies: [
          { name: 'Document Control and Tracking', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Archiving Section',
        competencies: [
          { name: 'Records Preservation and Disposition', level: 'Proficient' },
          { name: 'Digital Records Management', level: 'Proficient' },
          { name: 'Records and Information Management', level: 'Developing' },
          { name: 'Quality Assurance', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Archiving Section',
        competencies: [
          { name: 'Records Preservation and Disposition', level: 'Developing' },
          { name: 'Digital Records Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Archiving Section',
        competencies: [
          { name: 'Records Preservation and Disposition', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Archiving Section',
        competencies: [
          { name: 'Records Preservation and Disposition', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'MD',
    asOf: 'CPMS current organizational structure (existing)',
    sourceNote:
      'Built from the Corporate Planning and Management Service current organizational ' +
      'structure, Management Division portion (Organization and Staffing Standards Section, ' +
      'and Policy Review, Systems Development and CART Section) combined with the MD ' +
      'competency framework. Permanent plantilla positions only — the chart had no Job Order ' +
      'or Contract of Service entries to exclude; items marked "newly created" are approved ' +
      'plantilla positions and are included. The Director IV and the Administrative Officer ' +
      'III/Administrative Assistant III/Administrative Aide IV reporting directly to the ' +
      'Director are Service-level staff, not part of either division, and are not profiled ' +
      'here. Where a section shows the same title held by more than one person or across ' +
      'parallel unlabeled groups (e.g. multiple Administrative Officer IV under Organization ' +
      'and Staffing Standards Section), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Strategic Planning', level: 'Advanced' },
          { name: 'Organizational Development', level: 'Advanced' },
          { name: 'Staffing Standards and Position Classification', level: 'Advanced' },
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Presentation Skills', level: 'Advanced' },
          { name: 'Policy Formulation and Implementation', level: 'Advanced' },
          { name: 'Change Management and Organizational Development', level: 'Advanced' },
          { name: 'Policy Compliance and Ethical Standards Enforcement', level: 'Advanced' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Strategic Planning', level: 'Advanced' },
          { name: 'Organizational Development', level: 'Advanced' },
          { name: 'Staffing Standards and Position Classification', level: 'Advanced' },
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Presentation Skills', level: 'Advanced' },
          { name: 'Policy Formulation and Implementation', level: 'Advanced' },
          { name: 'Change Management and Organizational Development', level: 'Advanced' },
          { name: 'Policy Compliance and Ethical Standards Enforcement', level: 'Advanced' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Organization and Staffing Standards Section',
        competencies: [
          { name: 'Organizational Development', level: 'Proficient' },
          { name: 'Staffing Standards and Position Classification', level: 'Proficient' },
          { name: 'Strategic Planning', level: 'Proficient' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Proficient' },
          { name: 'Change Management and Organizational Development', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
          { name: 'Presentation Skills', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Organization and Staffing Standards Section',
        competencies: [
          { name: 'Organizational Development', level: 'Developing' },
          { name: 'Staffing Standards and Position Classification', level: 'Developing' },
          { name: 'Strategic Planning', level: 'Developing' },
          { name: 'Change Management and Organizational Development', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Organization and Staffing Standards Section',
        competencies: [
          { name: 'Organizational Development', level: 'Emerging' },
          { name: 'Staffing Standards and Position Classification', level: 'Emerging' },
          { name: 'Strategic Planning', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Policy Review, Systems Development and CART Section',
        competencies: [
          { name: 'Policy Formulation and Implementation', level: 'Proficient' },
          { name: 'Change Management and Organizational Development', level: 'Proficient' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Proficient' },
          { name: 'Policy Compliance and Ethical Standards Enforcement', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
          { name: 'Presentation Skills', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Policy Review, Systems Development and CART Section',
        competencies: [
          { name: 'Policy Formulation and Implementation', level: 'Developing' },
          { name: 'Change Management and Organizational Development', level: 'Developing' },
          { name: 'Policy Compliance and Ethical Standards Enforcement', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Policy Review, Systems Development and CART Section',
        competencies: [
          { name: 'Policy Formulation and Implementation', level: 'Emerging' },
          { name: 'Policy Compliance and Ethical Standards Enforcement', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'PMED',
    asOf: 'CPMS current organizational structure (existing)',
    sourceNote:
      'Built from the Corporate Planning and Management Service current organizational ' +
      'structure, Performance Monitoring and Evaluation Division portion, combined with the ' +
      'PMED competency framework. Permanent plantilla positions only — the chart had no Job ' +
      'Order or Contract of Service entries to exclude; the Planning Officer IV item marked ' +
      '"newly created" is an approved plantilla position and is included. The Director IV and ' +
      'the Administrative Officer III/Administrative Assistant III/Administrative Aide IV ' +
      'reporting directly to the Director are Service-level staff, not part of either division, ' +
      'and are not profiled here. Where the same title is held by more than one person (two ' +
      'Planning Officer II and two Planning Officer I), it is listed once as a role.',
    positions: [
      {
        title: 'Planning Officer V',
        section: null,
        competencies: [
          { name: 'Performance Management Systems Administration', level: 'Advanced' },
          { name: 'Performance Monitoring and Evaluation', level: 'Advanced' },
          { name: 'Results-Based Management', level: 'Advanced' },
          { name: 'Strategic Planning and Performance Alignment', level: 'Advanced' },
          { name: 'Data Analysis and Performance Analytics', level: 'Advanced' },
          { name: 'Policy and Regulatory Compliance Monitoring', level: 'Advanced' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Advanced' },
          { name: 'Secretariat and Meeting Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Planning Officer IV',
        section: null,
        competencies: [
          { name: 'Performance Management Systems Administration', level: 'Advanced' },
          { name: 'Performance Monitoring and Evaluation', level: 'Advanced' },
          { name: 'Results-Based Management', level: 'Advanced' },
          { name: 'Strategic Planning and Performance Alignment', level: 'Advanced' },
          { name: 'Data Analysis and Performance Analytics', level: 'Advanced' },
          { name: 'Policy and Regulatory Compliance Monitoring', level: 'Advanced' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Advanced' },
          { name: 'Secretariat and Meeting Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Planning Officer III',
        section: null,
        competencies: [
          { name: 'Performance Monitoring and Evaluation', level: 'Proficient' },
          { name: 'Results-Based Management', level: 'Proficient' },
          { name: 'Data Analysis and Performance Analytics', level: 'Proficient' },
          { name: 'Strategic Planning and Performance Alignment', level: 'Developing' },
          { name: 'Policy and Regulatory Compliance Monitoring', level: 'Developing' },
        ],
      },
      {
        title: 'Planning Officer II',
        section: null,
        competencies: [
          { name: 'Performance Monitoring and Evaluation', level: 'Developing' },
          { name: 'Data Analysis and Performance Analytics', level: 'Developing' },
          { name: 'Stakeholder Engagement and Technical Assistance', level: 'Developing' },
        ],
      },
      {
        title: 'Planning Officer I',
        section: null,
        competencies: [
          { name: 'Performance Monitoring and Evaluation', level: 'Emerging' },
          { name: 'Data Analysis and Performance Analytics', level: 'Emerging' },
          { name: 'Secretariat and Meeting Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'IAD I',
    asOf: 'Internal Audit Service organizational chart, as of September 2026',
    sourceNote:
      'Built from the Internal Audit Service organizational chart (as of September 2026), ' +
      'Internal Audit Division I portion, combined with the IAD I competency framework. ' +
      'Permanent plantilla positions only — the chart had no Job Order or Contract of Service ' +
      'entries to exclude. Vacant items are included since they are permanent plantilla slots, ' +
      'just currently unfilled. The Director IV and the Administrative Officer III/' +
      'Administrative Assistant III/Administrative Aide IV reporting directly to the Director ' +
      'are Internal Audit Service-level staff, not part of either division, and are not ' +
      'profiled here. Where the same title is held by more than one person (two Internal ' +
      'Auditor II), it is listed once as a role.',
    positions: [
      {
        title: 'Division Chief / Internal Auditor V',
        section: null,
        competencies: [
          { name: 'Risk-Based Audit Planning and Quality Assurance', level: 'Advanced' },
          { name: 'Compliance, Management, and Operations Auditing', level: 'Advanced' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Advanced' },
          { name: 'Financial, Management, and Operational Data Analysis', level: 'Advanced' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Advanced' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Advanced' },
          { name: 'Fraud Risk, Irregularity Detection, and Special Investigations', level: 'Advanced' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Advanced' },
          { name: 'Responsive Audit Management, Professional Communication, and Stakeholder Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Assistant Division Chief / Internal Auditor IV',
        section: null,
        competencies: [
          { name: 'Risk-Based Audit Planning and Quality Assurance', level: 'Advanced' },
          { name: 'Compliance, Management, and Operations Auditing', level: 'Advanced' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Advanced' },
          { name: 'Financial, Management, and Operational Data Analysis', level: 'Advanced' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Advanced' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Advanced' },
          { name: 'Fraud Risk, Irregularity Detection, and Special Investigations', level: 'Proficient' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Advanced' },
          { name: 'Responsive Audit Management, Professional Communication, and Stakeholder Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Internal Auditor III',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Proficient' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Proficient' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Proficient' },
          { name: 'Fraud Risk, Irregularity Detection, and Special Investigations', level: 'Developing' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Developing' },
        ],
      },
      {
        title: 'Internal Auditor II',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Developing' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Developing' },
          { name: 'Financial, Management, and Operational Data Analysis', level: 'Developing' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Developing' },
        ],
      },
      {
        title: 'Internal Auditor I',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Emerging' },
          { name: 'Financial, Management, and Operational Data Analysis', level: 'Emerging' },
        ],
      },
      {
        title: 'Internal Auditing Assistant',
        section: null,
        competencies: [
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Emerging' },
          { name: 'Responsive Audit Management, Professional Communication, and Stakeholder Liaison', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'IAD2',
    asOf: 'Internal Audit Service organizational chart, as of September 2026',
    sourceNote:
      'Built from the Internal Audit Service organizational chart (as of September 2026), ' +
      'Internal Audit Division II portion, combined with the IAD II competency framework. ' +
      'Permanent plantilla positions only — the chart had no Job Order or Contract of Service ' +
      'entries to exclude. Vacant items are included since they are permanent plantilla slots, ' +
      'just currently unfilled. The Director IV and the Administrative Officer III/' +
      'Administrative Assistant III/Administrative Aide IV reporting directly to the Director ' +
      'are Internal Audit Service-level staff, not part of either division, and are not ' +
      'profiled here. Where the same title is held by more than one person (two Internal ' +
      'Auditor II, one vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Division Chief / Internal Auditor V',
        section: null,
        competencies: [
          { name: 'Risk-Based Audit Planning and Quality Assurance', level: 'Advanced' },
          { name: 'Compliance, Management, and Operations Auditing', level: 'Advanced' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Advanced' },
          { name: 'Operational Data Analysis and Information Reliability', level: 'Advanced' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Advanced' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Advanced' },
          { name: 'Fraud Detection, Special Investigations, and External Liaison', level: 'Advanced' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Advanced' },
          { name: 'Responsive Audit Management, Policy Interpretation, and Professional Communication', level: 'Advanced' },
        ],
      },
      {
        title: 'Assistant Division Chief / Internal Auditor IV',
        section: null,
        competencies: [
          { name: 'Risk-Based Audit Planning and Quality Assurance', level: 'Advanced' },
          { name: 'Compliance, Management, and Operations Auditing', level: 'Advanced' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Advanced' },
          { name: 'Operational Data Analysis and Information Reliability', level: 'Advanced' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Advanced' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Advanced' },
          { name: 'Fraud Detection, Special Investigations, and External Liaison', level: 'Proficient' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Advanced' },
          { name: 'Responsive Audit Management, Policy Interpretation, and Professional Communication', level: 'Advanced' },
        ],
      },
      {
        title: 'Internal Auditor III',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Proficient' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Proficient' },
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Proficient' },
          { name: 'Fraud Detection, Special Investigations, and External Liaison', level: 'Developing' },
          { name: 'Information Systems Auditing and Computer-Assisted Audit Techniques', level: 'Developing' },
        ],
      },
      {
        title: 'Internal Auditor II',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Developing' },
          { name: 'Systems, Process, and Internal Control Evaluation', level: 'Developing' },
          { name: 'Operational Data Analysis and Information Reliability', level: 'Developing' },
          { name: 'Asset, Resource, and Performance Assurance', level: 'Developing' },
        ],
      },
      {
        title: 'Internal Auditor I',
        section: null,
        competencies: [
          { name: 'Compliance, Management, and Operations Auditing', level: 'Emerging' },
          { name: 'Operational Data Analysis and Information Reliability', level: 'Emerging' },
        ],
      },
      {
        title: 'Internal Auditing Assistant',
        section: null,
        competencies: [
          { name: 'Audit Reporting, Recommendations, and Follow-Up', level: 'Emerging' },
          { name: 'Responsive Audit Management, Policy Interpretation, and Professional Communication', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'Air TPDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Development Service, Air Transport Project Development ' +
      'Division staff distribution table in Annex D of DOTr Office Order No. 2026-071, ' +
      'combined with the Division\'s competency framework. Permanent plantilla positions ' +
      'only — Job Order items are excluded. Vacant items are included since ' +
      'they are permanent plantilla slots, just currently unfilled. Names are excluded per ' +
      'standing convention; where the same title is held by more than one person, it is ' +
      'listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Air Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Air Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Air Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Air Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Air Transport Project Design and Structuring', level: 'Proficient' },
          { name: 'Air Transport Project Evaluation and Appraisal', level: 'Proficient' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Air Transport Project Design and Structuring', level: 'Developing' },
          { name: 'Air Transport Project Evaluation and Appraisal', level: 'Developing' },
        ],
      },
      {
        title: 'Draftsman I',
        section: null,
        competencies: [
          { name: 'Air Transport Project Design and Structuring', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'Maritime TPDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Development Service, Maritime Transport Project Development ' +
      'Division staff distribution table in Annex D of DOTr Office Order No. 2026-071, ' +
      'combined with the Division\'s competency framework. Permanent plantilla positions ' +
      'only — Job Order items are excluded. Vacant items are included since ' +
      'they are permanent plantilla slots, just currently unfilled. Names are excluded per ' +
      'standing convention; where the same title is held by more than one person, it is ' +
      'listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Maritime Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Maritime Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Maritime Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Maritime Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Project Turnover and Technical Advisory Support', level: 'Proficient' },
          { name: 'Project Financing Coordination', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Maritime Transport Project Design and Structuring', level: 'Proficient' },
          { name: 'Maritime Transport Project Evaluation and Appraisal', level: 'Proficient' },
        ],
      },
      {
        title: 'Communications Development Officer II',
        section: null,
        competencies: [
          { name: 'Project Turnover and Technical Advisory Support', level: 'Developing' },
          { name: 'Project Financing Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Draftsman II',
        section: null,
        competencies: [
          { name: 'Maritime Transport Project Design and Structuring', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'Rail TPDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Development Service, Rail Transport Project Development ' +
      'Division staff distribution table in Annex D of DOTr Office Order No. 2026-071, ' +
      'combined with the Division\'s competency framework. Permanent plantilla positions ' +
      'only — Job Order items are excluded. Vacant items are included since ' +
      'they are permanent plantilla slots, just currently unfilled. Names are excluded per ' +
      'standing convention; where the same title is held by more than one person, it is ' +
      'listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Rail Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Rail Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Transport Project Design and Structuring', level: 'Proficient' },
          { name: 'Rail Transport Project Evaluation and Appraisal', level: 'Proficient' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Rail Transport Project Design and Structuring', level: 'Developing' },
          { name: 'Rail Transport Project Evaluation and Appraisal', level: 'Developing' },
        ],
      },
      {
        title: 'Economist I',
        section: null,
        competencies: [
          { name: 'Project Financing Coordination', level: 'Emerging' },
          { name: 'Rail Transport Project Evaluation and Appraisal', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'Road TPDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Development Service, Road Transport Project Development ' +
      'Division staff distribution table in Annex D of DOTr Office Order No. 2026-071, ' +
      'combined with the Division\'s competency framework. Permanent plantilla positions ' +
      'only — Job Order items are excluded. Vacant items are included since ' +
      'they are permanent plantilla slots, just currently unfilled. Names are excluded per ' +
      'standing convention; where the same title is held by more than one person, it is ' +
      'listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Road Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Road Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Road Transport Project Design and Structuring', level: 'Advanced' },
          { name: 'Road Transport Project Evaluation and Appraisal', level: 'Advanced' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Advanced' },
          { name: 'Project Financing Coordination', level: 'Advanced' },
          { name: 'Project Turnover and Technical Advisory Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Road Transport Project Design and Structuring', level: 'Proficient' },
          { name: 'Road Transport Project Evaluation and Appraisal', level: 'Proficient' },
          { name: 'Investment Approval and Endorsement Processing', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Road Transport Project Design and Structuring', level: 'Developing' },
          { name: 'Road Transport Project Evaluation and Appraisal', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'PRDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Transport Policy and Planning Service, Policy Research and Development Division staff ' +
      'distribution table in Annex D of DOTr Office Order No. 2026-071, combined with the ' +
      'Division\'s competency framework. Permanent plantilla positions only — Job Order ' +
      'items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention; where the ' +
      'same title is held by more than one person, it is listed once as a role.',
    positions: [
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Transport Policy Agenda Development', level: 'Advanced' },
          { name: 'Policy and Standards Formulation', level: 'Advanced' },
          { name: 'Policy Implementation Review and Evaluation', level: 'Advanced' },
          { name: 'Technical Advisory and Consulting Services', level: 'Advanced' },
          { name: 'Policy Research and Benchmarking', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Technical Advisory and Consulting Services', level: 'Proficient' },
          { name: 'Policy Implementation Review and Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Policy and Standards Formulation', level: 'Proficient' },
          { name: 'Policy Research and Benchmarking', level: 'Proficient' },
          { name: 'Transport Policy Agenda Development', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Policy and Standards Formulation', level: 'Developing' },
          { name: 'Policy Implementation Review and Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Draftsman III',
        section: null,
        competencies: [
          { name: 'Policy and Standards Formulation', level: 'Emerging' },
        ],
      },
      {
        title: 'Draftsman I',
        section: null,
        competencies: [
          { name: 'Policy and Standards Formulation', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'ITPD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Transport Policy and Planning Service, Integrated Transport Planning Division staff ' +
      'distribution table in Annex D of DOTr Office Order No. 2026-071, combined with the ' +
      'Division\'s competency framework. Permanent plantilla positions only — Job Order ' +
      'items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention; where the ' +
      'same title is held by more than one person, it is listed once as a role.',
    positions: [
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Transport Plan Development and Administration', level: 'Advanced' },
          { name: 'Transport Modeling and Geospatial Data Management', level: 'Advanced' },
          { name: 'Transport Plan Operationalization', level: 'Advanced' },
          { name: 'Integrated Transport Strategy Development', level: 'Advanced' },
          { name: 'Network Planning Technical Advisory Services', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Transport Plan Development and Administration', level: 'Proficient' },
          { name: 'Transport Modeling and Geospatial Data Management', level: 'Proficient' },
          { name: 'Integrated Transport Strategy Development', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Network Planning Technical Advisory Services', level: 'Proficient' },
          { name: 'Transport Plan Operationalization', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Transport Plan Development and Administration', level: 'Developing' },
          { name: 'Transport Modeling and Geospatial Data Management', level: 'Developing' },
        ],
      },
      {
        title: 'Communications Development Officer II',
        section: null,
        competencies: [
          { name: 'Transport Plan Operationalization', level: 'Developing' },
          { name: 'Network Planning Technical Advisory Services', level: 'Developing' },
        ],
      },
      {
        title: 'Draftsman II',
        section: null,
        competencies: [
          { name: 'Transport Modeling and Geospatial Data Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'IPD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Transport Policy and Planning Service, Investment Programming Division staff ' +
      'distribution table in Annex D of DOTr Office Order No. 2026-071, combined with the ' +
      'Division\'s competency framework. Permanent plantilla positions only — Job Order ' +
      'items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention; where the ' +
      'same title is held by more than one person, it is listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Investment Program Preparation and Management', level: 'Advanced' },
          { name: 'Investment Prioritization and Evaluation', level: 'Advanced' },
          { name: 'Funding Source and Resource Allocation Advisory', level: 'Advanced' },
          { name: 'Investment Portfolio Monitoring and Performance Reporting', level: 'Advanced' },
          { name: 'Investment Program Coordination and Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Investment Program Preparation and Management', level: 'Proficient' },
          { name: 'Investment Prioritization and Evaluation', level: 'Proficient' },
          { name: 'Funding Source and Resource Allocation Advisory', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Investment Program Coordination and Liaison', level: 'Proficient' },
          { name: 'Investment Portfolio Monitoring and Performance Reporting', level: 'Developing' },
        ],
      },
      {
        title: 'Communications Development Officer II',
        section: null,
        competencies: [
          { name: 'Investment Program Coordination and Liaison', level: 'Developing' },
          { name: 'Investment Portfolio Monitoring and Performance Reporting', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant I',
        section: null,
        competencies: [
          { name: 'Investment Program Preparation and Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'TSKMD',
    asOf: 'TSKMD current organizational chart, as of 10 September 2026',
    sourceNote:
      'Built from the Transport Statistics and Knowledge Management Division current ' +
      'organizational chart (as of 10 September 2026), combined with the Division\'s ' +
      'competency framework. The Chief, Supervising, and six "Organic personnel" positions ' +
      'the chart explicitly labels are profiled here — the chart also shows a Sectoral Data ' +
      'and Statistics team-lead box and the entire Database Systems and Innovation branch as ' +
      '"for creation," with no readable position titles, so those are not included pending a ' +
      'clearer source. All profiled positions are permanent plantilla items; the Senior ' +
      'Communications Development Officer item is coterminous with the incumbent (noted on ' +
      'the chart as subject to mandatory retirement by January 2027). Names are excluded per ' +
      'standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Transport Statistics Management and Publication', level: 'Advanced' },
          { name: 'Transport Data Collection and Coordination', level: 'Advanced' },
          { name: 'Data Repository and Database Management', level: 'Advanced' },
          { name: 'Data Standardization and Technical Assistance', level: 'Advanced' },
          { name: 'Research, Analysis, and Policy Studies', level: 'Advanced' },
          { name: 'Knowledge Dissemination and Archiving', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Transport Statistics Management and Publication', level: 'Advanced' },
          { name: 'Transport Data Collection and Coordination', level: 'Advanced' },
          { name: 'Data Repository and Database Management', level: 'Advanced' },
          { name: 'Data Standardization and Technical Assistance', level: 'Advanced' },
          { name: 'Research, Analysis, and Policy Studies', level: 'Advanced' },
          { name: 'Knowledge Dissemination and Archiving', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Knowledge Dissemination and Archiving', level: 'Proficient' },
          { name: 'Transport Data Collection and Coordination', level: 'Proficient' },
          { name: 'Transport Statistics Management and Publication', level: 'Developing' },
        ],
      },
      {
        title: 'Statistician III',
        section: 'Road transport data',
        competencies: [
          { name: 'Research, Analysis, and Policy Studies', level: 'Proficient' },
          { name: 'Transport Statistics Management and Publication', level: 'Developing' },
        ],
      },
      {
        title: 'Statistician III',
        section: 'Rail transport data',
        competencies: [
          { name: 'Research, Analysis, and Policy Studies', level: 'Proficient' },
          { name: 'Transport Statistics Management and Publication', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Road transport data',
        competencies: [
          { name: 'Data Repository and Database Management', level: 'Developing' },
          { name: 'Data Standardization and Technical Assistance', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Aviation transport data',
        competencies: [
          { name: 'Data Repository and Database Management', level: 'Developing' },
          { name: 'Data Standardization and Technical Assistance', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'INSAD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Monitoring and Evaluation Service, Inspection and Acceptance Division staff ' +
      'distribution table in Annex D of DOTr Office Order No. 2026-071, combined with the ' +
      'Division\'s competency framework. Permanent plantilla positions only — Job Order ' +
      'items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Project Document Collection and Review', level: 'Advanced' },
          { name: 'On-Site Inspection and Contractor Performance Evaluation', level: 'Advanced' },
          { name: 'Project Completion and Acceptance Processing', level: 'Advanced' },
          { name: 'Inspection Output Management and Reporting', level: 'Advanced' },
          { name: 'Inspection Coordination and Technical Assistance', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'On-Site Inspection and Contractor Performance Evaluation', level: 'Proficient' },
          { name: 'Project Completion and Acceptance Processing', level: 'Proficient' },
          { name: 'Project Document Collection and Review', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Inspection Coordination and Technical Assistance', level: 'Proficient' },
          { name: 'Inspection Output Management and Reporting', level: 'Developing' },
        ],
      },
    ],
  },

  {
    divisionCode: 'MEDD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Project Monitoring and Evaluation Service, Monitoring, Evaluation, and Documentation Division staff ' +
      'distribution table in Annex D of DOTr Office Order No. 2026-071, combined with the ' +
      'Division\'s competency framework. Permanent plantilla positions only — Job Order ' +
      'items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'Project Implementation Plan and Target Management', level: 'Advanced' },
          { name: 'Project Monitoring and Progress Analysis', level: 'Advanced' },
          { name: 'Evaluation Agenda and Plan Development', level: 'Advanced' },
          { name: 'Project and Program Evaluation', level: 'Advanced' },
          { name: 'Monitoring and Evaluation Reporting and Technical Assistance', level: 'Advanced' },
        ],
      },
      {
        title: 'Communications Development Officer II',
        section: null,
        competencies: [
          { name: 'Project Monitoring and Progress Analysis', level: 'Developing' },
          { name: 'Monitoring and Evaluation Reporting and Technical Assistance', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Project Implementation Plan and Target Management', level: 'Developing' },
          { name: 'Project and Program Evaluation', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'CNSD',
    asOf: 'MISS current organizational structure',
    sourceNote: 'Built from the Management Information Systems Service (MISS) current organizational structure, Computer and Network Systems Division portion, combined with the CNSD competency framework. Permanent plantilla positions only — Contract of Service items, and items marked \'for abolished\' on the chart, are excluded. Vacant items are included since they are permanent plantilla slots, just currently unfilled. Names are excluded per standing convention; where the same title is held by more than one person, it is listed once as a role.',
    positions: [
      {
        title: 'Information Technology Officer III',
        section: null,
        competencies: [
          { name: 'Databases and Applications', level: 'Advanced' },
          { name: 'Data Management and Analytics', level: 'Advanced' },
          { name: 'User and Customer Support', level: 'Advanced' },
          { name: 'Risk, Data Privacy, and Cyber Security Management', level: 'Advanced' },
          { name: 'Computer Proficiency', level: 'Advanced' },
          { name: 'Presentation Skills', level: 'Advanced' },
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Procurement Process and Administration', level: 'Advanced' },
          { name: 'Troubleshooting and Problem-Solving', level: 'Advanced' },
          { name: 'IT Asset Lifecycle Management', level: 'Advanced' },
          { name: 'Technical Documentation and Knowledge Management', level: 'Advanced' },
          { name: 'Cloud Infrastructure and Virtualization Management', level: 'Advanced' },
          { name: 'IT Project Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Information Technology Officer II',
        section: null,
        competencies: [
          { name: 'Databases and Applications', level: 'Advanced' },
          { name: 'Data Management and Analytics', level: 'Advanced' },
          { name: 'User and Customer Support', level: 'Advanced' },
          { name: 'Risk, Data Privacy, and Cyber Security Management', level: 'Advanced' },
          { name: 'Computer Proficiency', level: 'Advanced' },
          { name: 'Presentation Skills', level: 'Advanced' },
          { name: 'Communications Proficiency', level: 'Advanced' },
          { name: 'Procurement Process and Administration', level: 'Advanced' },
          { name: 'Troubleshooting and Problem-Solving', level: 'Advanced' },
          { name: 'IT Asset Lifecycle Management', level: 'Advanced' },
          { name: 'Technical Documentation and Knowledge Management', level: 'Advanced' },
          { name: 'Cloud Infrastructure and Virtualization Management', level: 'Advanced' },
          { name: 'IT Project Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Information Technology Officer I',
        section: null,
        competencies: [
          { name: 'Troubleshooting and Problem-Solving', level: 'Proficient' },
          { name: 'IT Project Management', level: 'Proficient' },
          { name: 'Cloud Infrastructure and Virtualization Management', level: 'Developing' },
          { name: 'Databases and Applications', level: 'Developing' },
          { name: 'Risk, Data Privacy, and Cyber Security Management', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Maintenance Technologist III',
        section: null,
        competencies: [
          { name: 'Troubleshooting and Problem-Solving', level: 'Proficient' },
          { name: 'IT Asset Lifecycle Management', level: 'Developing' },
          { name: 'User and Customer Support', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Maintenance Technologist II',
        section: null,
        competencies: [
          { name: 'Troubleshooting and Problem-Solving', level: 'Developing' },
          { name: 'IT Asset Lifecycle Management', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Maintenance Technologist I',
        section: null,
        competencies: [
          { name: 'Troubleshooting and Problem-Solving', level: 'Emerging' },
          { name: 'User and Customer Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Computer Programmer III',
        section: null,
        competencies: [
          { name: 'Databases and Applications', level: 'Proficient' },
          { name: 'Data Management and Analytics', level: 'Proficient' },
          { name: 'Cloud Infrastructure and Virtualization Management', level: 'Developing' },
          { name: 'Risk, Data Privacy, and Cyber Security Management', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Programmer II',
        section: null,
        competencies: [
          { name: 'Databases and Applications', level: 'Developing' },
          { name: 'Data Management and Analytics', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Programmer I',
        section: null,
        competencies: [
          { name: 'Databases and Applications', level: 'Emerging' },
        ],
      },
      {
        title: 'Senior Administrative Assistant I',
        section: null,
        competencies: [
          { name: 'Technical Documentation and Knowledge Management', level: 'Developing' },
          { name: 'Procurement Process and Administration', level: 'Developing' },
          { name: 'Computer Proficiency', level: 'Developing' },
          { name: 'Communications Proficiency', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant VI',
        section: null,
        competencies: [
          { name: 'Technical Documentation and Knowledge Management', level: 'Emerging' },
          { name: 'Procurement Process and Administration', level: 'Emerging' },
          { name: 'Computer Proficiency', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Technical Documentation and Knowledge Management', level: 'Emerging' },
          { name: 'Computer Proficiency', level: 'Emerging' },
          { name: 'Communications Proficiency', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: null,
        competencies: [
          { name: 'Technical Documentation and Knowledge Management', level: 'Emerging' },
          { name: 'Computer Proficiency', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'ISSD',
    asOf: 'MISS current organizational structure',
    sourceNote: 'Built from the Management Information Systems Service (MISS) current organizational structure, combining the Information Systems and Security Division and the Information System Division portions of the chart (per user direction, treated as one division: ISSD), with the ISSD competency framework. Permanent plantilla positions only — Contract of Service items, and items marked \'for abolished\' or \'for conversion\' on the chart, are excluded. Vacant items are included since they are permanent plantilla slots, just currently unfilled. Names are excluded per standing convention; where the same title is held by more than one person, it is listed once as a role.',
    positions: [
      {
        title: 'Information Technology Officer III',
        section: null,
        competencies: [
          { name: 'Information and Communications Technology (ICT) Strategic Planning, Research, and Innovation', level: 'Advanced' },
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Advanced' },
          { name: 'Cybersecurity Operations and Incident Response', level: 'Advanced' },
          { name: 'Information Security Governance, Data Privacy, and Compliance', level: 'Advanced' },
          { name: 'Digital Transformation and ICT Modernization', level: 'Advanced' },
          { name: 'ICT Procurement Planning and Technical Evaluation', level: 'Advanced' },
          { name: 'ICT Data Analytics, Dashboards, and Decision Support', level: 'Advanced' },
          { name: 'ICT Program, Project, and Stakeholder Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Information Technology Officer II',
        section: null,
        competencies: [
          { name: 'Information and Communications Technology (ICT) Strategic Planning, Research, and Innovation', level: 'Advanced' },
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Advanced' },
          { name: 'Cybersecurity Operations and Incident Response', level: 'Advanced' },
          { name: 'Information Security Governance, Data Privacy, and Compliance', level: 'Advanced' },
          { name: 'Digital Transformation and ICT Modernization', level: 'Advanced' },
          { name: 'ICT Procurement Planning and Technical Evaluation', level: 'Advanced' },
          { name: 'ICT Data Analytics, Dashboards, and Decision Support', level: 'Advanced' },
          { name: 'ICT Program, Project, and Stakeholder Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Information Technology Officer I',
        section: null,
        competencies: [
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Proficient' },
          { name: 'ICT Program, Project, and Stakeholder Management', level: 'Proficient' },
          { name: 'Digital Transformation and ICT Modernization', level: 'Developing' },
        ],
      },
      {
        title: 'Computer Programmer III',
        section: null,
        competencies: [
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Proficient' },
          { name: 'Cybersecurity Operations and Incident Response', level: 'Developing' },
        ],
      },
      {
        title: 'Statistician III',
        section: null,
        competencies: [
          { name: 'ICT Data Analytics, Dashboards, and Decision Support', level: 'Proficient' },
          { name: 'Information Security Governance, Data Privacy, and Compliance', level: 'Developing' },
        ],
      },
      {
        title: 'Information Systems Analyst II',
        section: null,
        competencies: [
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Developing' },
          { name: 'Cybersecurity Operations and Incident Response', level: 'Developing' },
        ],
      },
      {
        title: 'Information Systems Analyst I',
        section: null,
        competencies: [
          { name: 'Information Systems Analysis, Development, and Lifecycle Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: null,
        competencies: [
          { name: 'ICT Procurement Planning and Technical Evaluation', level: 'Developing' },
          { name: 'ICT Program, Project, and Stakeholder Management', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'ICT Program, Project, and Stakeholder Management', level: 'Proficient' },
          { name: 'Digital Transformation and ICT Modernization', level: 'Developing' },
        ],
      },
    ],
  },
  {
    divisionCode: 'ICD',
    asOf: 'ICD existing organizational structure',
    sourceNote: 'Built from the International Cooperation Division existing organizational structure chart, combined with the ICD competency framework. Permanent plantilla positions only — the chart had no Job Order or Contract of Service entries to exclude. Vacant items are included since they are permanent plantilla slots, just currently unfilled. The chart shows the Head both as a standalone position and again as one of the two Supervising Communications Development Officer branch leads — since this is the same person and the same title, it is merged with the other Supervising Communications Development Officer role into a single entry, per standing convention for same-title duplicates. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Supervising Communications Development Officer',
        section: null,
        competencies: [
          { name: 'International Relations, Diplomacy and Protocol', level: 'Advanced' },
          { name: 'International Negotiation and Philippine Position Development', level: 'Advanced' },
          { name: 'International Agreements, Treaty and Commitment Management', level: 'Advanced' },
          { name: 'International Cooperation Policy and Strategic Analysis', level: 'Advanced' },
          { name: 'International Development Partnerships and External Relations', level: 'Advanced' },
          { name: 'International Commitments Integration and Implementation Planning', level: 'Advanced' },
          { name: 'International Communications and Diplomatic Writing', level: 'Advanced' },
          { name: 'International Meetings, Delegations and Events Management', level: 'Advanced' },
          { name: 'International Representation, Presentation and Stakeholder Facilitation', level: 'Advanced' },
          { name: 'International Commitments Monitoring, Reporting and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Communications Development Officer',
        section: null,
        competencies: [
          { name: 'International Relations, Diplomacy and Protocol', level: 'Proficient' },
          { name: 'International Negotiation and Philippine Position Development', level: 'Proficient' },
          { name: 'International Agreements, Treaty and Commitment Management', level: 'Proficient' },
          { name: 'International Cooperation Policy and Strategic Analysis', level: 'Developing' },
          { name: 'International Development Partnerships and External Relations', level: 'Developing' },
          { name: 'International Representation, Presentation and Stakeholder Facilitation', level: 'Developing' },
        ],
      },
      {
        title: 'Communications Development Officer II',
        section: null,
        competencies: [
          { name: 'International Communications and Diplomatic Writing', level: 'Developing' },
          { name: 'International Meetings, Delegations and Events Management', level: 'Developing' },
          { name: 'International Commitments Monitoring, Reporting and Knowledge Management', level: 'Developing' },
          { name: 'International Relations, Diplomacy and Protocol', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'LID',
    asOf: 'Legal Service current organizational chart, as of the LS Existing Organization Chart',
    sourceNote:
      'Built from the Legal Service organizational chart (Legal and Issuances Division column), ' +
      'combined with the Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one person (filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Attorney V',
        section: null,
        competencies: [
          { name: 'Legislative Analysis and Statutory Review', level: 'Advanced' },
          { name: 'Legislative and Administrative Issuance Drafting', level: 'Advanced' },
          { name: 'Legislative Liaison and Stakeholder Engagement', level: 'Advanced' },
          { name: 'Congressional Hearing, Briefing and Legal Representation', level: 'Advanced' },
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Legislative Analysis and Statutory Review', level: 'Proficient' },
          { name: 'Legislative and Administrative Issuance Drafting', level: 'Proficient' },
          { name: 'Legislative Liaison and Stakeholder Engagement', level: 'Proficient' },
          { name: 'Congressional Hearing, Briefing and Legal Representation', level: 'Proficient' },
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Proficient' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Legislative Analysis and Statutory Review', level: 'Developing' },
          { name: 'Legislative and Administrative Issuance Drafting', level: 'Developing' },
          { name: 'Legislative Liaison and Stakeholder Engagement', level: 'Developing' },
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Developing' },
        ],
      },
      {
        title: 'Attorney II',
        section: null,
        competencies: [
          { name: 'Legislative and Administrative Issuance Drafting', level: 'Emerging' },
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant V',
        section: null,
        competencies: [
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Developing' },
          { name: 'Legislative and Administrative Issuance Drafting', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: null,
        competencies: [
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant I',
        section: null,
        competencies: [
          { name: 'Legislative Monitoring, Dissemination and Compliance', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'IAD',
    asOf: 'Legal Service current organizational chart, as of the LS Existing Organization Chart',
    sourceNote:
      'Built from the Legal Service organizational chart (Investigation and Adjudication Division ' +
      'column), combined with the Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one person (filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Attorney V',
        section: null,
        competencies: [
          { name: 'Case Management and Litigation Supervision', level: 'Advanced' },
          { name: 'Legal Research, Analysis and Pleading', level: 'Advanced' },
          { name: 'Investigation, Fact-Finding and Evidence Evaluation', level: 'Advanced' },
          { name: 'Administrative Adjudication and Decision Review', level: 'Advanced' },
          { name: 'Legal Representation and Advocacy', level: 'Advanced' },
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Case Management and Litigation Supervision', level: 'Proficient' },
          { name: 'Legal Research, Analysis and Pleading', level: 'Proficient' },
          { name: 'Investigation, Fact-Finding and Evidence Evaluation', level: 'Proficient' },
          { name: 'Administrative Adjudication and Decision Review', level: 'Proficient' },
          { name: 'Legal Representation and Advocacy', level: 'Proficient' },
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Case Management and Litigation Supervision', level: 'Developing' },
          { name: 'Legal Research, Analysis and Pleading', level: 'Developing' },
          { name: 'Investigation, Fact-Finding and Evidence Evaluation', level: 'Developing' },
          { name: 'Administrative Adjudication and Decision Review', level: 'Developing' },
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Special Investigator III',
        section: null,
        competencies: [
          { name: 'Investigation, Fact-Finding and Evidence Evaluation', level: 'Proficient' },
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Special Investigator II',
        section: null,
        competencies: [
          { name: 'Investigation, Fact-Finding and Evidence Evaluation', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant V',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Developing' },
          { name: 'Legal Research, Analysis and Pleading', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant I',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Case Knowledge Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'LARD',
    asOf: 'Legal Service current organizational chart, as of the LS Existing Organization Chart',
    sourceNote:
      'Built from the Legal Service organizational chart (Legal Affairs and Research Division ' +
      'column), combined with the Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one person (filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Attorney V',
        section: null,
        competencies: [
          { name: 'Legal Research, Analysis and Statutory Interpretation', level: 'Advanced' },
          { name: 'Legal Opinion, Policy and Document Drafting', level: 'Advanced' },
          { name: 'Legal Advisory, Policy Guidance and Stakeholder Support', level: 'Advanced' },
          { name: 'Legal Representation, Briefing and Review Quality', level: 'Advanced' },
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Legal Research, Analysis and Statutory Interpretation', level: 'Proficient' },
          { name: 'Legal Opinion, Policy and Document Drafting', level: 'Proficient' },
          { name: 'Legal Advisory, Policy Guidance and Stakeholder Support', level: 'Proficient' },
          { name: 'Legal Representation, Briefing and Review Quality', level: 'Proficient' },
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Legal Research, Analysis and Statutory Interpretation', level: 'Developing' },
          { name: 'Legal Opinion, Policy and Document Drafting', level: 'Developing' },
          { name: 'Legal Advisory, Policy Guidance and Stakeholder Support', level: 'Developing' },
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Attorney II',
        section: null,
        competencies: [
          { name: 'Legal Research, Analysis and Statutory Interpretation', level: 'Emerging' },
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant V',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant I',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Reporting and Knowledge Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'CRDD',
    asOf: 'Legal Service current organizational chart, as of the LS Existing Organization Chart',
    sourceNote:
      'Built from the Legal Service organizational chart (Contract Review and Documentation ' +
      'Division column), combined with the Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one person (filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Attorney V',
        section: null,
        competencies: [
          { name: 'Contract Review and Legal Drafting', level: 'Advanced' },
          { name: 'Procurement and Bidding Legal Compliance', level: 'Advanced' },
          { name: 'Contract Negotiation and Legal Advisory', level: 'Advanced' },
          { name: 'Legal Research, Policy and Issuance Development', level: 'Advanced' },
          { name: 'Legal Representation, Committee Participation and Meeting Support', level: 'Advanced' },
          { name: 'Legal Documentation, Endorsement and Work Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Contract Review and Legal Drafting', level: 'Proficient' },
          { name: 'Procurement and Bidding Legal Compliance', level: 'Proficient' },
          { name: 'Contract Negotiation and Legal Advisory', level: 'Proficient' },
          { name: 'Legal Research, Policy and Issuance Development', level: 'Proficient' },
          { name: 'Legal Representation, Committee Participation and Meeting Support', level: 'Proficient' },
          { name: 'Legal Documentation, Endorsement and Work Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Contract Review and Legal Drafting', level: 'Developing' },
          { name: 'Procurement and Bidding Legal Compliance', level: 'Developing' },
          { name: 'Legal Research, Policy and Issuance Development', level: 'Developing' },
          { name: 'Legal Documentation, Endorsement and Work Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Legal Documentation, Endorsement and Work Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'PDID',
    asOf: 'Railways Sector organizational chart, as of August 2026',
    sourceNote:
      'Built from the Railways Sector organizational structure chart (Rail Unified Project ' +
      'Management Office / Project Development and Implementation Division column), combined ' +
      'with the Division\'s competency framework. TDO is expanded as Transportation Development ' +
      'Officer per standing convention. ' +
      'Permanent plantilla positions only. Vacant items would be included but none are shown for ' +
      'this division on the chart. Where the same title is held by more than one incumbent, it is ' +
      'listed once as a role. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Project Planning and Management', level: 'Advanced' },
          { name: 'Feasibility Study and Technical Evaluation', level: 'Advanced' },
          { name: 'Procurement and Contract Management', level: 'Advanced' },
          { name: 'Budgeting and Financial Management', level: 'Advanced' },
          { name: 'Risk Assessment and Mitigation', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Project Planning and Management', level: 'Advanced' },
          { name: 'Feasibility Study and Technical Evaluation', level: 'Advanced' },
          { name: 'Procurement and Contract Management', level: 'Advanced' },
          { name: 'Budgeting and Financial Management', level: 'Advanced' },
          { name: 'Risk Assessment and Mitigation', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Rail Project Planning and Management', level: 'Proficient' },
          { name: 'Feasibility Study and Technical Evaluation', level: 'Proficient' },
          { name: 'Risk Assessment and Mitigation', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Rail Project Planning and Management', level: 'Developing' },
          { name: 'Feasibility Study and Technical Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Rail Project Planning and Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'OMSMMD',
    asOf: 'Railways Sector organizational chart, as of August 2026',
    sourceNote:
      'Built from the Railways Sector organizational structure chart (Rail Unified Project ' +
      'Management Office / Operations & Maintenance Strategy Management & Monitoring Division ' +
      'column, including its Engineering Support and Operation and Maintenance Section), combined ' +
      'with the Division\'s competency framework. TDO is expanded as Transportation Development ' +
      'Officer per standing convention; PEO is left unexpanded pending confirmation of the exact ' +
      'title it stands for. ' +
      'Permanent plantilla positions only. Vacant items would be included but none are shown for ' +
      'this division on the chart. Where the same title is held by more than one incumbent, it is ' +
      'listed once as a role. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Operations and Maintenance Strategy Development', level: 'Advanced' },
          { name: 'Performance Monitoring and Reporting', level: 'Advanced' },
          { name: 'Asset Management and Lifecycle Planning', level: 'Advanced' },
          { name: 'Risk Management and Contingency Planning', level: 'Advanced' },
          { name: 'Budgeting and Cost Control for Maintenance Activities', level: 'Advanced' },
          { name: 'Compliance with Safety and Environmental Standards', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Operations and Maintenance Strategy Development', level: 'Advanced' },
          { name: 'Performance Monitoring and Reporting', level: 'Advanced' },
          { name: 'Asset Management and Lifecycle Planning', level: 'Advanced' },
          { name: 'Risk Management and Contingency Planning', level: 'Advanced' },
          { name: 'Budgeting and Cost Control for Maintenance Activities', level: 'Advanced' },
          { name: 'Compliance with Safety and Environmental Standards', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Operations and Maintenance Strategy Development', level: 'Proficient' },
          { name: 'Performance Monitoring and Reporting', level: 'Proficient' },
          { name: 'Asset Management and Lifecycle Planning', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Performance Monitoring and Reporting', level: 'Developing' },
          { name: 'Asset Management and Lifecycle Planning', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Performance Monitoring and Reporting', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Engineering Support and Operation and Maintenance Section',
        competencies: [
          { name: 'Asset Management and Lifecycle Planning', level: 'Proficient' },
          { name: 'Compliance with Safety and Environmental Standards', level: 'Proficient' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Engineering Support and Operation and Maintenance Section',
        competencies: [
          { name: 'Asset Management and Lifecycle Planning', level: 'Developing' },
          { name: 'Compliance with Safety and Environmental Standards', level: 'Developing' },
        ],
      },
      {
        title: 'PEO II',
        section: 'Engineering Support and Operation and Maintenance Section',
        competencies: [
          { name: 'Compliance with Safety and Environmental Standards', level: 'Developing' },
          { name: 'Budgeting and Cost Control for Maintenance Activities', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'SCED',
    asOf: 'Railways Sector organizational chart, as of August 2026',
    sourceNote:
      'Built from the Railways Sector organizational structure chart (Rail Standards Enforcement ' +
      'Office / Safety Compliance & Enforcement Division column), combined with the Division\'s ' +
      'competency framework. TDO is expanded as Transportation Development Officer per standing ' +
      'convention. ' +
      'Permanent plantilla positions only. Vacant items would be included but none are shown for ' +
      'this division on the chart. Where the same title is held by more than one incumbent, it is ' +
      'listed once as a role. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Safety Standards Enforcement', level: 'Advanced' },
          { name: 'Risk Assessment and Hazard Management', level: 'Advanced' },
          { name: 'Compliance Audits and Safety Inspections', level: 'Advanced' },
          { name: 'Emergency Response Planning and Coordination', level: 'Advanced' },
          { name: 'Data Analysis for Safety Improvement', level: 'Advanced' },
          { name: 'Technology Utilization in Safety Compliance', level: 'Advanced' },
          { name: 'Environmental Health and Safety Integration', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Safety Standards Enforcement', level: 'Advanced' },
          { name: 'Risk Assessment and Hazard Management', level: 'Advanced' },
          { name: 'Compliance Audits and Safety Inspections', level: 'Advanced' },
          { name: 'Emergency Response Planning and Coordination', level: 'Advanced' },
          { name: 'Data Analysis for Safety Improvement', level: 'Advanced' },
          { name: 'Technology Utilization in Safety Compliance', level: 'Advanced' },
          { name: 'Environmental Health and Safety Integration', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Safety Standards Enforcement', level: 'Proficient' },
          { name: 'Risk Assessment and Hazard Management', level: 'Proficient' },
          { name: 'Compliance Audits and Safety Inspections', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Safety Standards Enforcement', level: 'Developing' },
          { name: 'Compliance Audits and Safety Inspections', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Safety Standards Enforcement', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'SRD',
    asOf: 'Railways Sector organizational chart, as of August 2026',
    sourceNote:
      'Built from the Railways Sector organizational structure chart (Rail Standards Enforcement ' +
      'Office / Standards and Regulation Division column), combined with the Division\'s ' +
      'competency framework. TDO is expanded as Transportation Development Officer per standing ' +
      'convention. ' +
      'Permanent plantilla positions only. Vacant items would be included but none are shown for ' +
      'this division on the chart. Where the same title is held by more than one incumbent, it is ' +
      'listed once as a role. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Regulatory Compliance and Enforcement', level: 'Advanced' },
          { name: 'Standards Development and Implementation', level: 'Advanced' },
          { name: 'Safety and Risk Management', level: 'Advanced' },
          { name: 'Quality Control and Assurance', level: 'Advanced' },
          { name: 'Inspection and Compliance Monitoring', level: 'Advanced' },
          { name: 'Policy Formulation and Regulatory Guidance', level: 'Advanced' },
          { name: 'Data Collection and Reporting', level: 'Advanced' },
          { name: 'Environmental Compliance and Sustainability', level: 'Advanced' },
          { name: 'Emergency Preparedness and Response Planning', level: 'Advanced' },
          { name: 'Research and Innovation in Rail Safety Standards', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Regulatory Compliance and Enforcement', level: 'Advanced' },
          { name: 'Standards Development and Implementation', level: 'Advanced' },
          { name: 'Safety and Risk Management', level: 'Advanced' },
          { name: 'Quality Control and Assurance', level: 'Advanced' },
          { name: 'Inspection and Compliance Monitoring', level: 'Advanced' },
          { name: 'Policy Formulation and Regulatory Guidance', level: 'Advanced' },
          { name: 'Data Collection and Reporting', level: 'Advanced' },
          { name: 'Environmental Compliance and Sustainability', level: 'Advanced' },
          { name: 'Emergency Preparedness and Response Planning', level: 'Advanced' },
          { name: 'Research and Innovation in Rail Safety Standards', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Regulatory Compliance and Enforcement', level: 'Proficient' },
          { name: 'Standards Development and Implementation', level: 'Proficient' },
          { name: 'Inspection and Compliance Monitoring', level: 'Proficient' },
          { name: 'Policy Formulation and Regulatory Guidance', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Regulatory Compliance and Enforcement', level: 'Developing' },
          { name: 'Inspection and Compliance Monitoring', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Inspection and Compliance Monitoring', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'PPMD',
    asOf: 'Procurement Management Service current organizational staffing chart',
    sourceNote:
      'Built from the Procurement Management Service organizational staffing chart (Procurement ' +
      'Planning and Management Division column), combined with the Division\'s competency ' +
      'framework. ' +
      'Permanent plantilla positions only — Job Order and Contract of Service items are excluded. ' +
      'Vacant items are included since they are permanent plantilla slots, just currently unfilled. ' +
      'Names are excluded per standing convention; where the same title is held by more than one ' +
      'person (filled or vacant), it is listed once as a role. The BAC Secretariat Division column ' +
      'on this chart is held for a later pass, per instruction.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Procurement Planning and Technical Document Review', level: 'Advanced' },
          { name: 'Procurement Action Document and Issuance Preparation', level: 'Advanced' },
          { name: 'Procurement Communication and Stakeholder Coordination', level: 'Advanced' },
          { name: 'Procurement Advertisement and Transparency Compliance', level: 'Advanced' },
          { name: 'Procurement Resolution, Notice of Award, and Award Documentation Management', level: 'Advanced' },
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Advanced' },
          { name: 'Administrative, Reportorial, and Professional Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Procurement Planning and Technical Document Review', level: 'Advanced' },
          { name: 'Procurement Action Document and Issuance Preparation', level: 'Advanced' },
          { name: 'Procurement Communication and Stakeholder Coordination', level: 'Advanced' },
          { name: 'Procurement Advertisement and Transparency Compliance', level: 'Advanced' },
          { name: 'Procurement Resolution, Notice of Award, and Award Documentation Management', level: 'Advanced' },
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Advanced' },
          { name: 'Administrative, Reportorial, and Professional Support', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: null,
        competencies: [
          { name: 'Procurement Planning and Technical Document Review', level: 'Proficient' },
          { name: 'Procurement Action Document and Issuance Preparation', level: 'Proficient' },
          { name: 'Procurement Advertisement and Transparency Compliance', level: 'Proficient' },
          { name: 'Procurement Resolution, Notice of Award, and Award Documentation Management', level: 'Proficient' },
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: null,
        competencies: [
          { name: 'Procurement Planning and Technical Document Review', level: 'Developing' },
          { name: 'Procurement Action Document and Issuance Preparation', level: 'Developing' },
          { name: 'Procurement Resolution, Notice of Award, and Award Documentation Management', level: 'Developing' },
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: null,
        competencies: [
          { name: 'Procurement Action Document and Issuance Preparation', level: 'Developing' },
          { name: 'Procurement Resolution, Notice of Award, and Award Documentation Management', level: 'Developing' },
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: null,
        competencies: [
          { name: 'Procurement Transmittal and Post-Award Documentation', level: 'Emerging' },
          { name: 'Administrative, Reportorial, and Professional Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Administrative, Reportorial, and Professional Support', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: null,
        competencies: [
          { name: 'Administrative, Reportorial, and Professional Support', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'CMD',
    asOf: 'Procurement Management Service current organizational staffing chart',
    sourceNote:
      'Built from the Procurement Management Service organizational staffing chart (Contract ' +
      'Management Division column), combined with the Division\'s competency framework. The ' +
      'Attorney III item is a distinct legal specialist track alongside the Administrative ' +
      'Officer ladder, and is mapped to the Division\'s regulatory-compliance and contract-' +
      'administration competencies rather than the general Administrative Officer progression. ' +
      'Permanent plantilla positions only — Job Order and Contract of Service items are excluded. ' +
      'Vacant items are included since they are permanent plantilla slots, just currently unfilled. ' +
      'Names are excluded per standing convention; where the same title is held by more than one ' +
      'person (filled or vacant), it is listed once as a role. The BAC Secretariat Division column ' +
      'on this chart is held for a later pass, per instruction.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Government Procurement Systems and Regulatory Compliance', level: 'Advanced' },
          { name: 'Contract Management and Administration', level: 'Advanced' },
          { name: 'Contract and Procurement Data and Records Management', level: 'Advanced' },
          { name: 'Communications and Stakeholder Coordination', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Government Procurement Systems and Regulatory Compliance', level: 'Advanced' },
          { name: 'Contract Management and Administration', level: 'Advanced' },
          { name: 'Contract and Procurement Data and Records Management', level: 'Advanced' },
          { name: 'Communications and Stakeholder Coordination', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Government Procurement Systems and Regulatory Compliance', level: 'Proficient' },
          { name: 'Contract Management and Administration', level: 'Proficient' },
          { name: 'Communications and Stakeholder Coordination', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: null,
        competencies: [
          { name: 'Government Procurement Systems and Regulatory Compliance', level: 'Proficient' },
          { name: 'Contract Management and Administration', level: 'Proficient' },
          { name: 'Contract and Procurement Data and Records Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: null,
        competencies: [
          { name: 'Contract Management and Administration', level: 'Developing' },
          { name: 'Contract and Procurement Data and Records Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: null,
        competencies: [
          { name: 'Contract and Procurement Data and Records Management', level: 'Developing' },
          { name: 'Communications and Stakeholder Coordination', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: null,
        competencies: [
          { name: 'Contract and Procurement Data and Records Management', level: 'Emerging' },
          { name: 'Communications and Stakeholder Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: null,
        competencies: [
          { name: 'Contract and Procurement Data and Records Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'FRS',
    asOf: 'Franchising Review Staff plantilla positions organizational structure',
    sourceNote:
      'Built from the Franchising Review Staff plantilla positions chart, combined with the ' +
      'Staff\'s competency framework. Only the chart\'s permanent plantilla items (black-bordered ' +
      'boxes) are profiled here — the Executive Assistant I (coterminous, reassigned from OSEC) ' +
      'and the Regular Casual Administrative Aide VI (renamed from Stenographer II, reassigned ' +
      'from GSD) are shown in a visually distinct block on the chart and are not permanent ' +
      'plantilla items of this office, so they are excluded per standing convention. Vacant items ' +
      'are included since they are permanent plantilla slots, just currently unfilled. Names are ' +
      'excluded per standing convention; where the same title is held by more than one incumbent ' +
      '(filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Regulatory Adjudication and Appeals Review', level: 'Proficient' },
          { name: 'Franchise Regulatory Review and Authorization Management', level: 'Proficient' },
          { name: 'Data Privacy and Protection Management', level: 'Proficient' },
          { name: 'Policy and Regulatory Compliance Monitoring', level: 'Proficient' },
          { name: 'Legal and Regulatory Research', level: 'Proficient' },
          { name: 'Technical Writing and Recommendation Formulation', level: 'Proficient' },
          { name: 'Case Evaluation and Evidence Assessment', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Regulatory Liaison', level: 'Proficient' },
        ],
      },
      {
        title: 'Special Investigator III',
        section: null,
        competencies: [
          { name: 'Regulatory Adjudication and Appeals Review', level: 'Developing' },
          { name: 'Case Evaluation and Evidence Assessment', level: 'Developing' },
          { name: 'Legal and Regulatory Research', level: 'Developing' },
          { name: 'Policy and Regulatory Compliance Monitoring', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: null,
        competencies: [
          { name: 'Committee and Secretariat Management', level: 'Developing' },
          { name: 'Stakeholder Coordination and Regulatory Liaison', level: 'Developing' },
          { name: 'Technical Writing and Recommendation Formulation', level: 'Developing' },
          { name: 'Data Privacy and Protection Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: null,
        competencies: [
          { name: 'Committee and Secretariat Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'BD',
    asOf: 'COEB MC No. 2026-1, Annex C — Mapping of Current Organizational Structure and Staffing Pattern, Budget Division, as of 14 August 2026',
    sourceNote:
      'Built from Annex C of COEB MC No. 2026-1 (current organizational structure and staffing pattern), ' +
      'combined with the Division\'s competency framework. The Chief Administrative Officer and Supervising ' +
      'Administrative Officer are listed at the Division-proper level, separate from the four Budget ' +
      'Management Sections, since Annex C places them under the Division\'s own organizational unit rather ' +
      'than any one section. Permanent plantilla positions only — Job Order and Contract of Service items ' +
      'are excluded. Vacant items are included since they are permanent plantilla slots, just currently ' +
      'unfilled. Names are excluded per standing convention; where the same title is held by more than one ' +
      'incumbent within a section (filled or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Advanced' },
          { name: 'Budget Legislation, Defense, and Approval Support', level: 'Advanced' },
          { name: 'Budget Execution and Fund Management', level: 'Advanced' },
          { name: 'Budget Transaction Processing and Control', level: 'Advanced' },
          { name: 'Budget Modification and Special Budget Requests', level: 'Advanced' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Advanced' },
          { name: 'Budget Accountability and Management Reporting', level: 'Advanced' },
          { name: 'Budget Policy, Compliance, and Process Improvement', level: 'Advanced' },
          { name: 'Budget Technical Advisory and Stakeholder Coordination', level: 'Advanced' },
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Advanced' },
          { name: 'Budget Legislation, Defense, and Approval Support', level: 'Advanced' },
          { name: 'Budget Execution and Fund Management', level: 'Advanced' },
          { name: 'Budget Transaction Processing and Control', level: 'Advanced' },
          { name: 'Budget Modification and Special Budget Requests', level: 'Advanced' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Advanced' },
          { name: 'Budget Accountability and Management Reporting', level: 'Advanced' },
          { name: 'Budget Policy, Compliance, and Process Improvement', level: 'Advanced' },
          { name: 'Budget Technical Advisory and Stakeholder Coordination', level: 'Advanced' },
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Personnel Budget Management Section',
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Proficient' },
          { name: 'Budget Execution and Fund Management', level: 'Proficient' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Proficient' },
          { name: 'Budget Accountability and Management Reporting', level: 'Proficient' },
          { name: 'Budget Technical Advisory and Stakeholder Coordination', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Personnel Budget Management Section',
        competencies: [
          { name: 'Budget Execution and Fund Management', level: 'Developing' },
          { name: 'Budget Modification and Special Budget Requests', level: 'Developing' },
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Operations Budget Management Section',
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Proficient' },
          { name: 'Budget Execution and Fund Management', level: 'Proficient' },
          { name: 'Budget Transaction Processing and Control', level: 'Proficient' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Proficient' },
          { name: 'Budget Legislation, Defense, and Approval Support', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Operations Budget Management Section',
        competencies: [
          { name: 'Budget Execution and Fund Management', level: 'Developing' },
          { name: 'Budget Transaction Processing and Control', level: 'Developing' },
          { name: 'Budget Accountability and Management Reporting', level: 'Developing' },
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Operations Budget Management Section',
        competencies: [
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Emerging' },
          { name: 'Budget Transaction Processing and Control', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Locally-Funded Projects Budget Management Section',
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Proficient' },
          { name: 'Budget Legislation, Defense, and Approval Support', level: 'Proficient' },
          { name: 'Budget Execution and Fund Management', level: 'Proficient' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Proficient' },
          { name: 'Budget Technical Advisory and Stakeholder Coordination', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Locally-Funded Projects Budget Management Section',
        competencies: [
          { name: 'Budget Execution and Fund Management', level: 'Developing' },
          { name: 'Budget Transaction Processing and Control', level: 'Developing' },
          { name: 'Budget Accountability and Management Reporting', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Locally-Funded Projects Budget Management Section',
        competencies: [
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Emerging' },
          { name: 'Budget Transaction Processing and Control', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Foreign-Assisted Projects Budget Management Section',
        competencies: [
          { name: 'Budget Planning and Preparation', level: 'Proficient' },
          { name: 'Budget Legislation, Defense, and Approval Support', level: 'Proficient' },
          { name: 'Budget Execution and Fund Management', level: 'Proficient' },
          { name: 'Budget Performance Monitoring and Analysis', level: 'Proficient' },
          { name: 'Budget Technical Advisory and Stakeholder Coordination', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Foreign-Assisted Projects Budget Management Section',
        competencies: [
          { name: 'Budget Execution and Fund Management', level: 'Developing' },
          { name: 'Budget Transaction Processing and Control', level: 'Developing' },
          { name: 'Budget Accountability and Management Reporting', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Foreign-Assisted Projects Budget Management Section',
        competencies: [
          { name: 'Budget Digitalization, Data, Records, and Knowledge Management', level: 'Emerging' },
          { name: 'Budget Transaction Processing and Control', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'CAD',
    asOf: 'PRI Organizational Chart 2026',
    sourceNote:
      'Built from the Philippine Railways Institute Organizational Chart 2026 (Certification and ' +
      'Accreditation Division column), combined with the Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one incumbent within the same section/subsection (filled ' +
      'or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Regulation Officer',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Advanced' },
          { name: 'Railway Training Facility Accreditation', level: 'Advanced' },
          { name: 'Railway Competency Standards and Regulatory Development', level: 'Advanced' },
          { name: 'Compliance Assessment and Monitoring', level: 'Advanced' },
          { name: 'Certification and Accreditation Records and Information Management', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Technical Advisory', level: 'Advanced' },
        ],
      },
      {
        title: 'Attorney IV',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Advanced' },
          { name: 'Railway Training Facility Accreditation', level: 'Advanced' },
          { name: 'Railway Competency Standards and Regulatory Development', level: 'Advanced' },
          { name: 'Compliance Assessment and Monitoring', level: 'Advanced' },
          { name: 'Certification and Accreditation Records and Information Management', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Technical Advisory', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Regulation Officer',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Proficient' },
          { name: 'Railway Competency Standards and Regulatory Development', level: 'Proficient' },
          { name: 'Compliance Assessment and Monitoring', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Technical Advisory', level: 'Proficient' },
        ],
      },
      {
        title: 'Attorney III',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Developing' },
          { name: 'Railway Competency Standards and Regulatory Development', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Developing' },
          { name: 'Certification and Accreditation Records and Information Management', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Regulation Officer I',
        section: null,
        competencies: [
          { name: 'Railway Personnel Certification Management', level: 'Emerging' },
          { name: 'Compliance Assessment and Monitoring', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Certification and Accreditation Records and Information Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'RDD',
    asOf: 'PRI Organizational Chart 2026',
    sourceNote:
      'Built from the Philippine Railways Institute Organizational Chart 2026 (Research and ' +
      'Development Division column, Planning and Research Section), combined with the ' +
      'Division\'s competency framework. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one incumbent within the same section/subsection (filled ' +
      'or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Research Planning and Prioritization', level: 'Advanced' },
          { name: 'Research Design and Methodology', level: 'Advanced' },
          { name: 'Data Collection, Management and Analysis', level: 'Advanced' },
          { name: 'Railway Human-Resource Development Research', level: 'Advanced' },
          { name: 'Policy, Guideline and Technical Standards Development', level: 'Advanced' },
          { name: 'Research Reporting and Knowledge Products', level: 'Advanced' },
          { name: 'Stakeholder and Inter-Agency Research Coordination', level: 'Advanced' },
          { name: 'Research Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: 'Planning and Research Section',
        competencies: [
          { name: 'Research Planning and Prioritization', level: 'Advanced' },
          { name: 'Research Design and Methodology', level: 'Advanced' },
          { name: 'Data Collection, Management and Analysis', level: 'Advanced' },
          { name: 'Railway Human-Resource Development Research', level: 'Advanced' },
          { name: 'Policy, Guideline and Technical Standards Development', level: 'Advanced' },
          { name: 'Research Reporting and Knowledge Products', level: 'Advanced' },
          { name: 'Stakeholder and Inter-Agency Research Coordination', level: 'Advanced' },
          { name: 'Research Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: 'Planning and Research Section',
        competencies: [
          { name: 'Research Planning and Prioritization', level: 'Proficient' },
          { name: 'Research Design and Methodology', level: 'Proficient' },
          { name: 'Data Collection, Management and Analysis', level: 'Proficient' },
          { name: 'Research Reporting and Knowledge Products', level: 'Proficient' },
          { name: 'Stakeholder and Inter-Agency Research Coordination', level: 'Proficient' },
        ],
      },
      {
        title: 'Information Systems Analyst II',
        section: 'Planning and Research Section',
        competencies: [
          { name: 'Data Collection, Management and Analysis', level: 'Proficient' },
          { name: 'Research Reporting and Knowledge Products', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Planning and Research Section',
        competencies: [
          { name: 'Research Planning and Prioritization', level: 'Developing' },
          { name: 'Data Collection, Management and Analysis', level: 'Developing' },
          { name: 'Research Monitoring, Evaluation and Continuous Improvement', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: 'Planning and Research Section',
        competencies: [
          { name: 'Data Collection, Management and Analysis', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'TD',
    asOf: 'PRI Organizational Chart 2026',
    sourceNote:
      'Built from the Philippine Railways Institute Organizational Chart 2026 (Training Division ' +
      'column, its five sections and their subsections: Safety and Security — Safety/Security; ' +
      'Railway Operations — Train Operation/Station Operation; Civil, Architecture, and Tracks — ' +
      'Tracks and Guideways/Buildings and Facilities; Rolling Stock and Electrical Facilities — ' +
      'Power Supply and Distribution/Signaling and Communications/Rolling Stock; and Institutional ' +
      'Human Skills, which has no further subsections), combined with the Division\'s competency ' +
      'framework. Competency and level assignments follow rank/tier (Chief, Section Head, Senior ' +
      'Specialist, Mid Specialist, Junior Specialist, Entry Specialist) consistently across every ' +
      'section, since the competency framework covers training-management skills rather than each ' +
      'section\'s own technical subject matter. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one incumbent within the same section/subsection (filled ' +
      'or vacant), it is listed once as a role.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: 'Safety and Security Section',
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: 'Safety and Security Section — Safety',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Safety and Security Section — Safety',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Safety and Security Section — Safety',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Safety and Security Section — Security',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: 'Safety and Security Section — Security',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist I',
        section: 'Safety and Security Section — Security',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: 'Railway Operations Section',
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: 'Railway Operations Section — Train Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Railway Operations Section — Train Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist II',
        section: 'Railway Operations Section — Train Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Railway Operations Section — Station Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Railway Operations Section — Station Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: 'Railway Operations Section — Station Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist II',
        section: 'Railway Operations Section — Station Operation',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer IV',
        section: 'Civil, Architecture, and Tracks Section',
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Civil, Architecture, and Tracks Section — Tracks and Guideways',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Civil, Architecture, and Tracks Section — Tracks and Guideways',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Civil, Architecture, and Tracks Section — Tracks and Guideways',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Architect III',
        section: 'Civil, Architecture, and Tracks Section — Buildings and Facilities',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Civil, Architecture, and Tracks Section — Buildings and Facilities',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Civil, Architecture, and Tracks Section — Buildings and Facilities',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist II',
        section: 'Civil, Architecture, and Tracks Section — Buildings and Facilities',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer IV',
        section: 'Rolling Stock and Electrical Facilities Section',
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Rolling Stock and Electrical Facilities Section — Power Supply and Distribution',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Rolling Stock and Electrical Facilities Section — Power Supply and Distribution',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Rolling Stock and Electrical Facilities Section — Power Supply and Distribution',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Rolling Stock and Electrical Facilities Section — Signaling and Communications',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Rolling Stock and Electrical Facilities Section — Signaling and Communications',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Rolling Stock and Electrical Facilities Section — Signaling and Communications',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Rolling Stock and Electrical Facilities Section — Rolling Stock',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Rolling Stock and Electrical Facilities Section — Rolling Stock',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Rolling Stock and Electrical Facilities Section — Rolling Stock',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist I',
        section: 'Rolling Stock and Electrical Facilities Section — Rolling Stock',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
        ],
      },
      {
        title: 'Training Specialist IV',
        section: 'Institutional Human Skills Section',
        competencies: [
          { name: 'Training Program Planning and Development', level: 'Advanced' },
          { name: 'Training Delivery and Facilitation', level: 'Advanced' },
          { name: 'Trainer and Instructor Development', level: 'Advanced' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Advanced' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Advanced' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Advanced' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: 'Institutional Human Skills Section',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Proficient' },
          { name: 'Trainer and Instructor Development', level: 'Proficient' },
          { name: 'Training Assessment, Certification and Quality Assurance', level: 'Proficient' },
          { name: 'Training Monitoring, Evaluation and Continuous Improvement', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Partnership Management', level: 'Proficient' },
        ],
      },
      {
        title: 'Training Specialist III',
        section: 'Institutional Human Skills Section',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Developing' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Developing' },
          { name: 'Training Information, Documentation and Knowledge Management', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: 'Institutional Human Skills Section',
        competencies: [
          { name: 'Training Delivery and Facilitation', level: 'Emerging' },
          { name: 'Training Implementation, Logistics and Resource Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'AFD',
    asOf: 'PRI Organizational Chart 2026',
    sourceNote:
      'Built from the Philippine Railways Institute Organizational Chart 2026 (Administrative and ' +
      'Finance Division column, its three sections: Administrative, Finance, and Facilities ' +
      'Management), combined with the Division\'s competency framework. Competency and level ' +
      'assignments follow rank/tier (Chief/Supervising, then each section\'s own senior-to-entry ' +
      'Administrative Officer or specialist ladder) consistent with the approach used for other ' +
      'PRI divisions. ' +
      'Permanent plantilla positions only. Vacant items are included since they are permanent ' +
      'plantilla slots, just currently unfilled. Names are excluded per standing convention; where ' +
      'the same title is held by more than one incumbent within the same section (filled or vacant), ' +
      'it is listed once as a role.',
    positions: [
      {
        title: 'Chief Administrative Officer',
        section: null,
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Advanced' },
          { name: 'Records and Document Management', level: 'Advanced' },
          { name: 'Government Procurement and Supply Management', level: 'Advanced' },
          { name: 'Cash and Financial Transaction Management', level: 'Advanced' },
          { name: 'Financial Reporting and Regulatory Compliance', level: 'Advanced' },
          { name: 'Facilities and Property Management', level: 'Advanced' },
          { name: 'Equipment and Technical Support Services', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Customer Service', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Administrative Officer',
        section: null,
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Advanced' },
          { name: 'Records and Document Management', level: 'Proficient' },
          { name: 'Government Procurement and Supply Management', level: 'Proficient' },
          { name: 'Cash and Financial Transaction Management', level: 'Proficient' },
          { name: 'Financial Reporting and Regulatory Compliance', level: 'Proficient' },
          { name: 'Facilities and Property Management', level: 'Proficient' },
          { name: 'Equipment and Technical Support Services', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Customer Service', level: 'Advanced' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Administrative Section',
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Proficient' },
          { name: 'Records and Document Management', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Customer Service', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Administrative Section',
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Developing' },
          { name: 'Records and Document Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Administrative Section',
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Administrative Section',
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Administrative Section',
        competencies: [
          { name: 'Administrative Support and Coordination', level: 'Emerging' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Finance Section',
        competencies: [
          { name: 'Cash and Financial Transaction Management', level: 'Proficient' },
          { name: 'Financial Reporting and Regulatory Compliance', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Customer Service', level: 'Proficient' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Finance Section',
        competencies: [
          { name: 'Cash and Financial Transaction Management', level: 'Developing' },
          { name: 'Financial Reporting and Regulatory Compliance', level: 'Developing' },
        ],
      },
      {
        title: 'Accountant II',
        section: 'Finance Section',
        competencies: [
          { name: 'Cash and Financial Transaction Management', level: 'Developing' },
          { name: 'Financial Reporting and Regulatory Compliance', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer II',
        section: 'Finance Section',
        competencies: [
          { name: 'Cash and Financial Transaction Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: 'Finance Section',
        competencies: [
          { name: 'Cash and Financial Transaction Management', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Officer V',
        section: 'Facilities Management Section',
        competencies: [
          { name: 'Facilities and Property Management', level: 'Proficient' },
          { name: 'Equipment and Technical Support Services', level: 'Proficient' },
          { name: 'Stakeholder Coordination and Customer Service', level: 'Proficient' },
        ],
      },
      {
        title: 'Computer Maintenance Technologist II',
        section: 'Facilities Management Section',
        competencies: [
          { name: 'Equipment and Technical Support Services', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer III',
        section: 'Facilities Management Section',
        competencies: [
          { name: 'Facilities and Property Management', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer I',
        section: 'Facilities Management Section',
        competencies: [
          { name: 'Facilities and Property Management', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'AD',
    asOf: 'September 15, 2026',
    sourceNote:
      'Built from the Accounting Division organizational chart (per Plantilla from the DBM, as of ' +
      'September 15, 2026), combined with the existing Accounting Division competency framework. ' +
      'Competency and level assignments follow rank/tier (Chief, Section Head, then each section\'s ' +
      'own senior-to-entry Accountant or support-staff ladder), with each of the four units — ' +
      'Disbursement Section (Locally Funded and Foreign-Assisted), Bookkeeping, Financial Analysis ' +
      'and Reporting Section, and Subsidiary Ledger Maintenance & Reporting Section — weighted toward ' +
      'the competencies most relevant to its function. Permanent plantilla positions only; the 2 ' +
      'Casual Worker items are excluded. Vacant items are included since they are permanent plantilla ' +
      'slots, just currently unfilled. Names are excluded per standing convention; where the chart ' +
      'shows more than one incumbent (filled or vacant) under the same title within the same ' +
      'section, it is listed once as a role.',
    positions: [
      {
        title: 'Chief Accountant',
        section: null,
        competencies: [
          { name: 'Accounts Reconciliation', level: 'Advanced' },
          { name: 'Revenues and Expenditures', level: 'Advanced' },
          { name: 'Preparation and Interpretation of Financial Statements and Reports', level: 'Advanced' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Advanced' },
          { name: 'Accounting for Non-Current Assets', level: 'Advanced' },
          { name: 'Accounting for Debt and Other Liabilities', level: 'Advanced' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Advanced' },
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Advanced' },
          { name: 'Transaction Processing (Disbursement)', level: 'Advanced' },
        ],
      },
      {
        title: 'Accountant II',
        section: 'Division Office',
        competencies: [
          { name: 'Accounts Reconciliation', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Developing' },
          { name: 'Preparation and Interpretation of Financial Statements and Reports', level: 'Developing' },
        ],
      },
      {
        title: 'Bookkeeper',
        section: 'Division Office',
        competencies: [
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: 'Division Office',
        competencies: [
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Emerging' },
        ],
      },
      {
        title: 'Accountant IV',
        section: 'Disbursement Section — Locally Funded (Section Head)',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Advanced' },
          { name: 'Accounts Reconciliation', level: 'Advanced' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Advanced' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Advanced' },
          { name: 'Accounting for Debt and Other Liabilities', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Proficient' },
          { name: 'Accounts Reconciliation', level: 'Proficient' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant II',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Officer IV',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Developing' },
        ],
      },
      {
        title: 'Senior Bookkeeper',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Developing' },
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Developing' },
        ],
      },
      {
        title: 'Bookkeeper',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Disbursement Section — Locally Funded',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Emerging' },
        ],
      },
      {
        title: 'Accountant IV',
        section: 'Disbursement Section — Foreign-Assisted (Section Head)',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Advanced' },
          { name: 'Accounting for Debt and Other Liabilities', level: 'Advanced' },
          { name: 'Accounts Reconciliation', level: 'Advanced' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Advanced' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Disbursement Section — Foreign-Assisted',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Proficient' },
          { name: 'Accounting for Debt and Other Liabilities', level: 'Proficient' },
          { name: 'Accounts Reconciliation', level: 'Proficient' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: 'Disbursement Section — Foreign-Assisted',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Disbursement Section — Foreign-Assisted',
        competencies: [
          { name: 'Transaction Processing (Disbursement)', level: 'Emerging' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Bookkeeping, Financial Analysis and Reporting Section (Acting Section Chief)',
        competencies: [
          { name: 'Preparation and Interpretation of Financial Statements and Reports', level: 'Advanced' },
          { name: 'Revenues and Expenditures', level: 'Advanced' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Advanced' },
          { name: 'Accounts Reconciliation', level: 'Proficient' },
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Bookkeeping, Financial Analysis and Reporting Section',
        competencies: [
          { name: 'Preparation and Interpretation of Financial Statements and Reports', level: 'Proficient' },
          { name: 'Revenues and Expenditures', level: 'Proficient' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Proficient' },
          { name: 'Accounts Reconciliation', level: 'Developing' },
        ],
      },
      {
        title: 'Accountant II',
        section: 'Bookkeeping, Financial Analysis and Reporting Section',
        competencies: [
          { name: 'Preparation and Interpretation of Financial Statements and Reports', level: 'Developing' },
          { name: 'Revenues and Expenditures', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant II',
        section: 'Bookkeeping, Financial Analysis and Reporting Section',
        competencies: [
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Emerging' },
        ],
      },
      {
        title: 'Accountant IV',
        section: 'Subsidiary Ledger Maintenance & Reporting Section (Section Head)',
        competencies: [
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Advanced' },
          { name: 'Accounts Reconciliation', level: 'Advanced' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Advanced' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Advanced' },
          { name: 'Accounting for Non-Current Assets', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant III',
        section: 'Subsidiary Ledger Maintenance & Reporting Section',
        competencies: [
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Proficient' },
          { name: 'Accounts Reconciliation', level: 'Proficient' },
          { name: 'Accounting for Current Assets and Current Liabilities', level: 'Developing' },
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Proficient' },
        ],
      },
      {
        title: 'Accountant II',
        section: 'Subsidiary Ledger Maintenance & Reporting Section',
        competencies: [
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Developing' },
        ],
      },
      {
        title: 'Administrative Assistant III',
        section: 'Subsidiary Ledger Maintenance & Reporting Section',
        competencies: [
          { name: 'Accounting Analysis, Reconciliation, Checking, and Recording', level: 'Emerging' },
        ],
      },
      {
        title: 'Administrative Aide VI',
        section: 'Subsidiary Ledger Maintenance & Reporting Section',
        competencies: [
          { name: 'Accounting for Trial Balance Accounts and Balances', level: 'Emerging' },
        ],
      },
    ],
  },
  {
    divisionCode: 'NDTSD',
    asOf: 'Railways Sector organizational chart, as of August 2026',
    sourceNote:
      'Built from the Railways Sector organizational structure chart (Rail Unified Project ' +
      'Management Office / Network Development and Technical Services Division column, including ' +
      'its Infrastructure Design Section, Construction Delivery Section, and Rolling Stocks and ' +
      'System Section), combined with the Division\'s competency framework. TDO is expanded as ' +
      'Transportation Development Officer per standing convention; PEO is left unexpanded pending ' +
      'confirmation of the exact title it stands for. ' +
      'Permanent plantilla positions only. Vacant items would be included but none are shown for ' +
      'this division on the chart. Where the same title is held by more than one incumbent, it is ' +
      'listed once as a role. Names are excluded per standing convention.',
    positions: [
      {
        title: 'Chief Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Railway Network Planning and Development', level: 'Advanced' },
          { name: 'Transport Policy and Strategic Planning', level: 'Advanced' },
          { name: 'Railway Engineering and Technical Review', level: 'Advanced' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Advanced' },
          { name: 'Technical Research and Analysis', level: 'Advanced' },
          { name: 'Technical Advisory and Recommendation Development', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Technical Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Supervising Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Railway Network Planning and Development', level: 'Advanced' },
          { name: 'Transport Policy and Strategic Planning', level: 'Advanced' },
          { name: 'Railway Engineering and Technical Review', level: 'Advanced' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Advanced' },
          { name: 'Technical Research and Analysis', level: 'Advanced' },
          { name: 'Technical Advisory and Recommendation Development', level: 'Advanced' },
          { name: 'Stakeholder Coordination and Technical Liaison', level: 'Advanced' },
        ],
      },
      {
        title: 'Senior Transportation Development Officer',
        section: null,
        competencies: [
          { name: 'Railway Network Planning and Development', level: 'Proficient' },
          { name: 'Railway Engineering and Technical Review', level: 'Proficient' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Proficient' },
          { name: 'Technical Research and Analysis', level: 'Proficient' },
        ],
      },
      {
        title: 'Transportation Development Officer II',
        section: null,
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Developing' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Transportation Development Officer I',
        section: null,
        competencies: [
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Emerging' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Infrastructure Design Section',
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Proficient' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Proficient' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Infrastructure Design Section',
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Developing' },
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Construction Delivery Section',
        competencies: [
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Proficient' },
          { name: 'Railway Engineering and Technical Review', level: 'Proficient' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Construction Delivery Section',
        competencies: [
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Developing' },
          { name: 'Railway Engineering and Technical Review', level: 'Developing' },
        ],
      },
      {
        title: 'PEO II',
        section: 'Construction Delivery Section',
        competencies: [
          { name: 'Infrastructure Monitoring and Technical Evaluation', level: 'Developing' },
        ],
      },
      {
        title: 'Engineer III',
        section: 'Rolling Stocks and System Section',
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Proficient' },
          { name: 'Technical Research and Analysis', level: 'Proficient' },
        ],
      },
      {
        title: 'Engineer II',
        section: 'Rolling Stocks and System Section',
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Developing' },
          { name: 'Technical Research and Analysis', level: 'Developing' },
        ],
      },
      {
        title: 'PEO II',
        section: 'Rolling Stocks and System Section',
        competencies: [
          { name: 'Railway Engineering and Technical Review', level: 'Developing' },
        ],
      },
    ],
  },
]

export function getPositionProfile(divisionCode: string): DivisionPositionProfile | undefined {
  return positionProfiles.find(p => p.divisionCode.toLowerCase() === divisionCode.toLowerCase())
}
