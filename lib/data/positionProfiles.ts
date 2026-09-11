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
]

export function getPositionProfile(divisionCode: string): DivisionPositionProfile | undefined {
  return positionProfiles.find(p => p.divisionCode.toLowerCase() === divisionCode.toLowerCase())
}
