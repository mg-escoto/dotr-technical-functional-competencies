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
        title: 'Admin Asst I',
        section: null,
        competencies: [
          { name: 'Investment Program Preparation and Management', level: 'Emerging' },
        ],
      },
    ],
  },

  {
    divisionCode: 'TSKMD',
    asOf: 'PPDO staff distribution (Annex D), per OO 2026-071',
    sourceNote:
      'Built from the Transport Policy and Planning Service, Transport Statistics and Knowledge Management Division staff ' +
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
          { name: 'Transport Data Collection and Coordination', level: 'Proficient' },
          { name: 'Knowledge Dissemination and Archiving', level: 'Proficient' },
          { name: 'Transport Statistics Management and Publication', level: 'Developing' },
        ],
      },
      {
        title: 'Statistician III',
        section: null,
        competencies: [
          { name: 'Research, Analysis, and Policy Studies', level: 'Proficient' },
          { name: 'Transport Statistics Management and Publication', level: 'Developing' },
        ],
      },
      {
        title: 'Admin Officer IV',
        section: null,
        competencies: [
          { name: 'Data Repository and Database Management', level: 'Developing' },
          { name: 'Data Standardization and Technical Assistance', level: 'Developing' },
        ],
      },
      {
        title: 'Draftsman I',
        section: null,
        competencies: [
          { name: 'Data Repository and Database Management', level: 'Emerging' },
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
]

export function getPositionProfile(divisionCode: string): DivisionPositionProfile | undefined {
  return positionProfiles.find(p => p.divisionCode.toLowerCase() === divisionCode.toLowerCase())
}
