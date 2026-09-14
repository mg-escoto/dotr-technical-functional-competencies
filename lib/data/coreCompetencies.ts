export type CoreLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Superior'

export const CORE_LEVELS: CoreLevel[] = ['Basic', 'Intermediate', 'Advanced', 'Superior']

export const CORE_LEVEL_SCALE: { level: CoreLevel; stage: string; description: string }[] = [
  { level: 'Basic',        stage: 'Foundational Practice',    description: 'Demonstrates fundamental awareness and consistent basic behavior' },
  { level: 'Intermediate', stage: 'Consistent Application',   description: 'Applies the competency proactively across routine situations' },
  { level: 'Advanced',     stage: 'Team and Unit Influence',  description: 'Models and promotes the competency across a team, unit, or division' },
  { level: 'Superior',     stage: 'Organizational Leadership', description: 'Shapes department-wide culture, policy, and practice' },
]

export type CoreReference = {
  citation: string
  source: string
  url: string
}

export type CoreCompetency = {
  slug: string
  name: string
  subtitle: string | null
  definition: string
  indicators: Record<CoreLevel, string[]>
  references: CoreReference[]
  note?: string
}

export const coreCompetencies: CoreCompetency[] = [
  {
    slug: 'nationalism',
    name: 'Nationalism',
    subtitle: 'Through Service Excellence',
    definition: 'Promoting the noble interest of the country through excellent public service.',
    indicators: {
      Basic: [
        'Efficient, industrious, and diligent in serving the people and the country through the Department.',
        'Demonstrates courtesy and professional attitude when responding to both internal and external stakeholders.',
        'Knows basic procedure in addressing complaints of both internal and external stakeholders.',
      ],
      Intermediate: [
        'Promotes accurate and significant accomplishments and concerns of the Department with fellow employees as well as outside the DOTr.',
        'Makes him/herself available to both internal and external stakeholders to provide accurate and timely information.',
        'Effectively uses diplomacy when addressing complaints of both internal and external stakeholders.',
        'Actively listens and provides feedback to both internal and external stakeholders.',
      ],
      Advanced: [
        "Communicates and promotes common understanding of the Department's accomplishments and critical issues to the unit, office, and/or division.",
        "Offers appropriate and innovative solutions to clients' issues and concerns.",
        'Understands the point of view and anticipates the needs of both internal and external stakeholders.',
      ],
      Superior: [
        'Organizes programs and implements policies in promoting Nationalism through excellent service in the Department.',
        'Actively supports the interests of both internal and external stakeholders when faced with multiple/various requests/concerns by making choices and setting priorities to meet their needs.',
        'Influences a culture of service to individual and team by modelling behavior that is client-centered and initiating structure to ensure excellent service.',
      ],
    },
    references: [],
  },
  {
    slug: 'integrity',
    name: 'Integrity',
    subtitle: 'Through Transparency',
    definition:
      "Practicing ethical principles in formulating and implementing policies, programs, projects, and appropriate use of resources attuned to the Organization's Mission and Vision. Earning people's trust and respect through honesty and professionalism in all interactions.",
    indicators: {
      Basic: [
        'Demonstrates openness and transparency to both internal and external stakeholders.',
      ],
      Intermediate: [
        'Consistently practices openness and transparency in the fulfilment of tasks among co-employees.',
        'Refuses and/or avoids malicious and unethical situations.',
      ],
      Advanced: [
        'Promotes integrity and transparency with the members of the project, unit, office, and division.',
        "Includes integrity checks in the team's performance review.",
        'Understands and actively promotes integrity in the organization and its standards.',
      ],
      Superior: [
        'Upholds integrity and transparency at all times as fundamental to good governance.',
        'Ensures organizational compliance with legislation, regulatory requirements, and best practices.',
        'Stands up publicly in the manifestation of integrity and transparency through the implementation of Departmental programs and projects.',
      ],
    },
    references: [],
  },
  {
    slug: 'respect',
    name: 'Respect',
    subtitle: null,
    definition: 'Treating stakeholders equally with utmost courtesy and encouraging participation and involvement.',
    indicators: {
      Basic: [
        'Observes impartiality and avoids personal biases and assumptions.',
        'Displays appreciation for and recognizes value of different opinions, roles, experiences, cultures, and backgrounds.',
      ],
      Intermediate: [
        "Demonstrates understanding of others' concerns, perceptions, opinions, or suggestions.",
        'Demonstrates cultural competence and participates in ongoing learning and engagement.',
        'Appropriately involves and collaborates with others.',
      ],
      Advanced: [
        "Seeks input from and values team members' contributions.",
        'Fosters a climate of openness, trust, and solidarity among team members.',
        'Takes appropriate action to raise awareness, address issues, and concerns.',
        'Helps team members develop the necessary knowledge, skills, and abilities to contribute to a respectful and inclusive workplace.',
      ],
      Superior: [
        'Establishes and ensures adherence to policies and practices that support and advance a respectful and inclusive workplace culture and climate.',
        'Promotes the importance of respect and inclusion through key messages and communication vehicles.',
        'Accountable for a shared responsibility in establishing and maintaining a climate of respect and inclusion.',
      ],
    },
    references: [],
  },
  {
    slug: 'teamwork',
    name: 'Teamwork',
    subtitle: null,
    definition: 'Collaborative effort to attain common goals and objectives.',
    indicators: {
      Basic: [
        'Does what is required of a team member in the completion of individual tasks.',
        'Works well in teams working on a common goal and objective.',
        'Provides team members with information when requested or as the need arises.',
      ],
      Intermediate: [
        'Can be relied upon in contributing work output to the team.',
        'Is viewed as a valued team member.',
        'Uplifts the self-esteem of the members of the team.',
        'Shares all relevant or useful information with other team members.',
        'Recognizes and manages the individual social styles of the team members.',
      ],
      Advanced: [
        'Actively supports the efforts and contributions of other team members.',
        'Is flexible and can work with a wide variety of different people on different tasks.',
        'Creates a team spirit by speaking positively of others.',
        'Shares all relevant information that may be important to other team members.',
        'Encourages other team members to participate and facilitates when appropriate.',
      ],
      Superior: [
        'Plans and strategizes ways on how to bring teamwork to the highest level possible.',
        'Builds teamwork among members and across the Unit, Office, Division, and/or Department.',
        'Provides guidance to others as they work through conflicts and disagreements so they can become better "team players."',
        'Proactively works with team members to improve team collaboration and functioning on a continuous basis.',
      ],
    },
    references: [],
  },
  {
    slug: 'quality-management',
    name: 'Quality Management',
    subtitle: null,
    definition: 'Doing things efficiently and effectively at all times.',
    indicators: {
      Basic: [
        "Demonstrates general understanding of the Office's work processes.",
        'Seeks relevant information and answers to key questions from several sources.',
        'Has solutions and suggestions that are effective in addressing the problem at hand.',
      ],
      Intermediate: [
        'Analyzes work processes and output to make sound, timely decisions and to solve problems.',
        'Probes appropriate sources for relevant information and answers to key questions; demonstrates persistence and skill in gathering information.',
        'Has solutions and suggestions that are effective and turn out to be correct and accurate.',
        'Is sought out by others for input and process support.',
      ],
      Advanced: [
        'Uses a combination of logic, analysis, experience, and wisdom to make sound, timely, strategic decisions and to solve problems; demonstrates the ability to solve difficult problems and creates effective solutions.',
        'Demonstrates advanced skill and insight in gathering and sorting key information; demonstrates resilience throughout the process; identifies the appropriate level of inclusion indicated by the situation.',
        'Delivers solutions and decisions that are effective and turn out to be correct, accurate, and constructive to the Division.',
        'Is well respected and sought out often by others for input, process support, and direction.',
      ],
      Superior: [
        'Uses a combination of advanced methods and other resources to make sound, timely decisions and to solve problems; demonstrates the ability to solve complex, difficult, and intractable problems, and creates effective and innovative solutions.',
        'Skillfully probes all appropriate sources; identifies and manages the appropriate level of inclusion indicated; builds and leads coalitions and teams to facilitate the work when indicated.',
        'Delivers solutions with comprehensive organizational impact, influencing future events and directions.',
        'Is well respected inside and outside the organization; is often pursued as a consultant for input, analysis, process support, and direction.',
      ],
    },
    references: [],
  },
  {
    slug: 'gedsi',
    name: 'Gender Equality, Disability, and Social Inclusion (GEDSI)',
    subtitle: null,
    definition:
      'The ability to recognize, respect, and actively promote gender equality, disability inclusion, and social inclusion in the planning, delivery, and evaluation of transportation policies, programs, projects, and services, and in everyday workplace conduct — ensuring that internal processes and public-facing transport services are equitable, accessible, and non-discriminatory for all persons regardless of sex, gender identity, disability, ethnicity, age, or socioeconomic status.',
    indicators: {
      Basic: [
        "Demonstrates basic awareness of gender equality, disability rights, and social inclusion principles as they apply to the Department's mandate and workplace conduct.",
        'Uses respectful, non-discriminatory, and gender-fair language in written and verbal communication with colleagues and stakeholders.',
        'Recognizes common physical, communication, and procedural barriers that persons with disabilities, women, and other marginalized groups may face in accessing transport services and Department processes.',
      ],
      Intermediate: [
        'Applies gender-responsive and disability-inclusive considerations when preparing documents, presentations, or routine outputs (e.g., accessible formats, sex-disaggregated data where relevant).',
        'Refers or escalates GEDSI-related concerns, complaints, or accessibility barriers to the appropriate office or focal person.',
        'Participates in GEDSI-related orientations, trainings, or Gender and Development (GAD) activities organized by the Department.',
        'Identifies gaps in existing programs, projects, or services that may disproportionately affect women, persons with disabilities, or other vulnerable groups.',
      ],
      Advanced: [
        'Integrates gender-responsive and disability-inclusive considerations into the design, review, or implementation of transport policies, programs, and projects within own area of responsibility.',
        'Applies relevant legal and policy frameworks — including the Magna Carta of Women (RA 9710), the Magna Carta for Disabled Persons as amended (RA 7277 / RA 10524), and the Accessibility Law (Batas Pambansa Blg. 344) — when reviewing outputs and recommending corrective action.',
        'Uses sex- and disability-disaggregated data to identify inclusion gaps and recommend evidence-based interventions.',
        "Coordinates with the Department's GAD Focal Point System, PWD-related units, or relevant external bodies (e.g., the Philippine Commission on Women, the National Council on Disability Affairs) to align initiatives with national GEDSI standards.",
      ],
      Superior: [
        "Champions the institutionalization of GEDSI principles across the Department's policies, programs, and organizational culture, influencing leadership decisions and resource allocation.",
        'Establishes or strengthens mechanisms (e.g., accessibility audits, GAD plans and budgets, grievance redress systems) that ensure sustained accountability for GEDSI outcomes.',
        "Represents the Department in inter-agency or international GEDSI initiatives related to transportation, contributing the Department's perspective to national policy development.",
        'Mentors and builds the capacity of others across the Department to apply GEDSI principles consistently in their work.',
      ],
    },
    references: [
      {
        citation: 'Republic Act No. 9710, "The Magna Carta of Women" (2009)',
        source: 'Philippine Commission on Women',
        url: 'https://pcw.gov.ph/magna-carta-of-women/',
      },
      {
        citation: 'Frequently Asked Questions: Republic Act 9710, the Magna Carta of Women (GAD budget policy)',
        source: 'Philippine Commission on Women',
        url: 'https://pcw.gov.ph/faq-republic-act-9710-the-magna-carta-of-women/',
      },
      {
        citation: 'Republic Act No. 7277, "Magna Carta for Disabled Persons," as amended by Republic Act No. 10524 (2013)',
        source: 'National Council on Disability Affairs',
        url: 'https://ncda.gov.ph/category/disability-laws/republic-acts-bp/',
      },
      {
        citation: '2024 Revised Implementing Rules and Regulations of Batas Pambansa Blg. 344 (Accessibility Law)',
        source: 'National Council on Disability Affairs',
        url: 'https://ncda.gov.ph/revised-2024-rules-and-regulations-implementing-batas-pambansa-344/',
      },
      {
        citation: 'Gender Equality in Transport Tool Kit: Moving Toward Gender-Transformative Transport Systems in Asia and the Pacific',
        source: 'Asian Development Bank',
        url: 'https://www.adb.org/publications/gender-equality-transport-tool-kit',
      },
      {
        citation: 'Addressing the Linkages between Gender and Transport in Low- and Middle-Income Countries, Sustainability, 11(17), 4555 (2019)',
        source: 'Priya Uteng, T. et al., peer-reviewed journal article',
        url: 'https://www.mdpi.com/2071-1050/11/17/4555',
      },
    ],
    note:
      'GEDSI and Climate Action for Transportation are not part of the official DOTr Core Competencies document — they are drafted here to reflect commitments the Department has taken on separately, and are presented as a sample for review before adoption.',
  },
  {
    slug: 'climate-action-for-transportation',
    name: 'Climate Action for Transportation',
    subtitle: null,
    definition:
      "The ability to understand, apply, and promote climate change mitigation and adaptation principles within the transportation sector's policies, programs, projects, and daily operations — contributing to the Department's commitment to a low-carbon, climate-resilient, and sustainable transport system.",
    indicators: {
      Basic: [
        'Demonstrates basic awareness of climate change concepts (mitigation, adaptation, greenhouse gas emissions) and their relevance to the transportation sector.',
        'Practices resource- and energy-conscious behaviors in day-to-day office work (e.g., reducing paper use, energy conservation, waste segregation).',
        "Recognizes the Department's climate-related mandates, including its role in the National Climate Change Action Plan and the Philippines' Nationally Determined Contribution.",
      ],
      Intermediate: [
        'Applies climate-conscious considerations when preparing routine reports, project documents, or procurement requests (e.g., recommending energy-efficient or low-emission options where applicable).',
        'Identifies climate-related risks (e.g., flooding, extreme weather) that may affect transport infrastructure, projects, or operations within own area of work.',
        'Participates in climate change and environmental sustainability orientations, trainings, or Department initiatives.',
        'Supports the collection or monitoring of climate-relevant data (e.g., fuel consumption, emissions estimates, climate risk assessments) for assigned projects.',
      ],
      Advanced: [
        "Integrates climate mitigation and adaptation measures into the design, evaluation, or implementation of transport policies, programs, and projects within own area of responsibility, consistent with the Climate Change Act (RA 9729) and the Philippines' Nationally Determined Contribution.",
        'Evaluates the climate and disaster risk exposure of transport projects and recommends resilience-enhancing design or operational adjustments.',
        'Coordinates with relevant units and external bodies (e.g., the Climate Change Commission, the Department of Environment and Natural Resources) to align Department initiatives with national and international climate commitments.',
        "Analyzes data on emissions, energy use, or climate risk to inform recommendations that reduce the transport sector's carbon footprint.",
      ],
      Superior: [
        "Champions the integration of climate action into the Department's strategic direction, policies, and major infrastructure programs, influencing leadership decisions on climate-resilient and low-carbon transport investments.",
        'Establishes or strengthens systems (e.g., climate risk assessment protocols, greenhouse gas inventories, green procurement standards) that embed climate accountability across the Department.',
        "Represents the Department in national or international climate and sustainable transport forums, contributing to policy development such as Nationally Determined Contribution updates.",
        'Mentors and builds organization-wide capacity to apply climate mitigation and adaptation principles consistently across offices and services.',
      ],
    },
    references: [
      {
        citation: 'Republic Act No. 9729, "Climate Change Act of 2009," as amended by Republic Act No. 10174',
        source: 'Climate Change Commission',
        url: 'https://climate.gov.ph/',
      },
      {
        citation: "Philippines' Nationally Determined Contribution, submitted to the UNFCCC (April 2021)",
        source: 'Climate Change Commission',
        url: 'https://climate.gov.ph/our-programs/nationally-determined-contributions',
      },
      {
        citation: 'National Climate Change Action Plan 2011–2028',
        source: 'Climate Change Commission',
        url: 'https://climate.gov.ph/our-programs/national-climate-change-action-plan',
      },
      {
        citation: 'Implementation Plan for the Philippine NDC 2020–2030 — identifies transport, led by DOTr, as a priority mitigation sector',
        source: 'Climate Change Laws of the World',
        url: 'https://climate-laws.org/document/implementation-plan-for-the-philippines-ndc-2020-2030_9989',
      },
      {
        citation: 'Climate Change 2022: Mitigation of Climate Change — Working Group III Contribution to the IPCC Sixth Assessment Report, Chapter 10: Transport',
        source: 'Intergovernmental Panel on Climate Change (IPCC)',
        url: 'https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_Chapter10.pdf',
      },
    ],
    note:
      'GEDSI and Climate Action for Transportation are not part of the official DOTr Core Competencies document — they are drafted here to reflect commitments the Department has taken on separately, and are presented as a sample for review before adoption.',
  },
]

export function getCoreCompetencyBySlug(slug: string): CoreCompetency | undefined {
  return coreCompetencies.find(c => c.slug.toLowerCase() === slug.toLowerCase())
}
