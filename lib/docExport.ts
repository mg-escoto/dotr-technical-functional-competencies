'use client'

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
} from 'docx'
import type { Division, ProficiencyLevel } from './data/technicalCompetencies'
import type { DivisionPositionProfile } from './data/positionProfiles'
import { LEVELS } from './data/technicalCompetencies'

const NAVY = '1E293B'
const ORANGE = '0D9488'
const BORDER_GRAY = 'CBD5C7'

function cellBorders() {
  const edge = { style: BorderStyle.SINGLE, size: 2, color: BORDER_GRAY }
  return { top: edge, bottom: edge, left: edge, right: edge }
}

function heading(text: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel], color = NAVY) {
  return new Paragraph({
    heading: level,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, color })],
  })
}

function body(text: string, opts: { italics?: boolean; color?: string } = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, italics: opts.italics, color: opts.color })],
  })
}

function levelCell(level: ProficiencyLevel, text: string) {
  return new TableCell({
    width: { size: 2500, type: WidthType.DXA },
    borders: cellBorders(),
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [
      new Paragraph({ children: [new TextRun({ text: level.toUpperCase(), bold: true, size: 16, color: ORANGE })] }),
      new Paragraph({ children: [new TextRun({ text, size: 18 })] }),
    ],
  })
}

async function downloadDoc(doc: Document, filename: string) {
  const blob = await Packer.toBlob(doc)
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export async function downloadDivisionDoc(division: Division, competencies = division.competencies) {
  const children: (Paragraph | Table)[] = [
    new Paragraph({
      children: [new TextRun({ text: 'Department of Transportation', bold: true, size: 20, color: ORANGE })],
    }),
    new Paragraph({
      heading: HeadingLevel.TITLE,
      spacing: { after: 60 },
      children: [new TextRun({ text: division.name, bold: true, color: NAVY })],
    }),
    body(`${division.code} · ${division.office}`, { color: '64748B' }),
  ]

  if (division.basis) children.push(body(division.basis, { italics: true, color: '64748B' }))

  children.push(
    body(
      'This document reflects the technical and functional competency framework as maintained in the DOTr Competency Portal. Levels and content may be updated as part of ongoing HRDD review.',
      { italics: true, color: '64748B' }
    )
  )

  competencies.forEach((comp, i) => {
    children.push(heading(`Competency ${i + 1}: ${comp.name}`, HeadingLevel.HEADING_1))
    if (comp.definition) children.push(body(comp.definition))

    comp.dimensions.forEach(dim => {
      children.push(heading(dim.name, HeadingLevel.HEADING_2, '111827'))
      if (dim.definition) children.push(body(dim.definition))

      const table = new Table({
        width: { size: 10000, type: WidthType.DXA },
        rows: [
          new TableRow({
            children: LEVELS.map(lvl => levelCell(lvl, dim.levels[lvl])),
          }),
        ],
      })
      children.push(table)
      children.push(new Paragraph({ text: '', spacing: { after: 200 } }))
    })
  })

  const doc = new Document({
    sections: [{ properties: {}, children }],
  })

  await downloadDoc(doc, `${division.code}-competencies.docx`)
}

type DutyEntry = {
  position_index: number
  competency_name: string
  duties_text: string
  status: 'pending' | 'final' | 'rejected'
  created_at: string
}

export async function downloadPositionsDoc(division: Division, profile: DivisionPositionProfile, duties: DutyEntry[]) {
  const children: (Paragraph | Table)[] = [
    new Paragraph({
      children: [new TextRun({ text: 'Department of Transportation', bold: true, size: 20, color: ORANGE })],
    }),
    new Paragraph({
      heading: HeadingLevel.TITLE,
      spacing: { after: 60 },
      children: [new TextRun({ text: `${division.name} — Position Competency Profile`, bold: true, color: NAVY })],
    }),
    body(
      'This is a draft for recalibration, not an official determination. Levels and competency assignments were inferred from position and section placement — review each position and adjust before treating this as a finished classification.',
      { italics: true, color: '64748B' }
    ),
  ]

  profile.positions.forEach((pos, posIndex) => {
    children.push(heading(pos.title, HeadingLevel.HEADING_1))
    if (pos.section) children.push(body(pos.section, { color: '64748B' }))

    const rows = pos.competencies.map(
      ({ name, level }) =>
        new TableRow({
          children: [
            new TableCell({
              width: { size: 7000, type: WidthType.DXA },
              borders: cellBorders(),
              margins: { top: 60, bottom: 60, left: 100, right: 100 },
              children: [new Paragraph({ children: [new TextRun({ text: name, size: 18 })] })],
            }),
            new TableCell({
              width: { size: 2000, type: WidthType.DXA },
              borders: cellBorders(),
              margins: { top: 60, bottom: 60, left: 100, right: 100 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: level.toUpperCase(), bold: true, size: 16, color: ORANGE })],
                }),
              ],
            }),
          ],
        })
    )

    children.push(
      new Table({
        width: { size: 9000, type: WidthType.DXA },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 7000, type: WidthType.DXA },
                borders: cellBorders(),
                shading: { fill: 'F1F5F4' },
                children: [new Paragraph({ children: [new TextRun({ text: 'Competency', bold: true, size: 16 })] })],
              }),
              new TableCell({
                width: { size: 2000, type: WidthType.DXA },
                borders: cellBorders(),
                shading: { fill: 'F1F5F4' },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: 'Level', bold: true, size: 16 })],
                  }),
                ],
              }),
            ],
          }),
          ...rows,
        ],
      })
    )

    // Duties & responsibilities for this position
    const relevantDuties = duties.filter(d => d.position_index === posIndex)
    if (relevantDuties.length > 0) {
      children.push(new Paragraph({ text: '', spacing: { after: 100 } }))
      children.push(
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: 'Actual Duties & Responsibilities', bold: true, size: 18 })],
        })
      )
      relevantDuties.forEach(d => {
        children.push(
          new Paragraph({
            spacing: { after: 60 },
            bullet: { level: 0 },
            children: [
              new TextRun({ text: `[${d.competency_name}] `, bold: true, size: 16 }),
              new TextRun({ text: d.duties_text, size: 16 }),
              new TextRun({ text: `  (${d.status})`, italics: true, size: 14, color: '64748B' }),
            ],
          })
        )
      })
    }

    children.push(new Paragraph({ text: '', spacing: { after: 200 } }))
  })

  const doc = new Document({
    sections: [{ properties: {}, children }],
  })

  await downloadDoc(doc, `${division.code}-position-profile.docx`)
}
