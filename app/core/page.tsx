'use client'

import { useState } from 'react'
import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import { useTechColors, levelStyle } from '@/lib/techColors'
import { coreCompetencies } from '@/lib/data/coreCompetencies'
import { LEVELS, LEVEL_SCALE } from '@/lib/data/technicalCompetencies'

export default function CoreCompetenciesPage() {
  const C = useTechColors()
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav active="core" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-12 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: C.textMuted }}
          >
            ← All Competencies
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Core Competencies
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: C.text }}>
            Department-Wide Core Competencies
          </h1>
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: C.textMuted }}>
            Behavioral competencies every DOTr employee is expected to demonstrate, regardless
            of office, division, or role.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.navy, color: C.white }}
            >
              {coreCompetencies.length} Competencies
            </div>
          </div>
        </div>
      </div>

      {/* ── Career progression legend ─────────────────────────────────────── */}
      <div className="px-8 pt-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.borderMuted}` }}>
            <div className="grid grid-cols-3 gap-3 px-5 py-3" style={{ background: C.navy }}>
              {['Level', 'Career Stage', 'Description'].map(h => (
                <p key={h} className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {h}
                </p>
              ))}
            </div>
            {LEVEL_SCALE.map((row, i) => (
              <div
                key={row.level}
                className="grid grid-cols-3 gap-3 px-5 py-4 items-center"
                style={{ background: i % 2 === 0 ? C.card : C.bg, borderTop: `1px solid ${C.borderMuted}` }}
              >
                <p className="text-sm font-bold" style={{ color: C.orange }}>{row.level}</p>
                <p className="text-sm font-semibold" style={{ color: C.text }}>{row.stage}</p>
                <p className="text-sm leading-snug" style={{ color: C.textMuted }}>{row.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Competencies ──────────────────────────────────────────────────── */}
      <div className="px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {coreCompetencies.map((comp, idx) => {
            const key = `${idx}-${comp.slug}`
            const isOpen = expanded === key
            const totalIndicators = Object.values(comp.indicators).reduce((s, arr) => s + arr.length, 0)
            return (
              <div
                key={key}
                className="rounded-xl overflow-hidden"
                style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : key)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
                        Competency {idx + 1}
                      </p>
                      {comp.note && (
                        <p
                          className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-md w-fit"
                          style={{ background: C.subtleBg, color: C.orange }}
                        >
                          Sample · For Review
                        </p>
                      )}
                    </div>
                    <h3 className="font-bold text-lg leading-snug" style={{ color: C.text }}>
                      {comp.name}
                      {comp.subtitle && (
                        <span className="font-semibold" style={{ color: C.textMuted }}>
                          {' '}— {comp.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-3xl" style={{ color: C.textMuted }}>
                      {comp.definition}
                    </p>
                    <p className="text-xs font-bold" style={{ color: C.textMuted }}>
                      {totalIndicators} behavioral indicators
                    </p>
                  </div>
                  <span
                    className="text-lg font-black flex-shrink-0 transition-transform"
                    style={{ color: C.orange, transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 space-y-6" style={{ borderTop: `1px solid ${C.borderMuted}` }}>
                    <div className="space-y-3 pt-5">
                      {/* Mobile: stacked */}
                      <div className="sm:hidden space-y-2">
                        {LEVELS.map(level => (
                          <IndicatorCard key={level} level={level} items={comp.indicators[level]} C={C} />
                        ))}
                      </div>

                      {/* Desktop: 4-col grid */}
                      <div className="hidden sm:grid grid-cols-4 gap-3">
                        {LEVELS.map(level => (
                          <IndicatorCard key={level} level={level} items={comp.indicators[level]} C={C} />
                        ))}
                      </div>
                    </div>

                    {comp.references.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: C.text }}>
                          References
                        </h4>
                        <div className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.borderMuted}` }}>
                          {comp.references.map((ref, i) => (
                            <a
                              key={ref.url}
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-3 space-y-0.5 hover:opacity-80 transition-opacity"
                              style={{
                                background: i % 2 === 0 ? C.subtleBg : C.bg,
                                borderTop: i === 0 ? 'none' : `1px solid ${C.borderMuted}`,
                              }}
                            >
                              <p className="text-sm font-semibold" style={{ color: C.text }}>
                                {ref.citation} ↗
                              </p>
                              <p className="text-xs" style={{ color: C.textMuted }}>
                                {ref.source}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function IndicatorCard({
  level,
  items,
  C,
}: {
  level: (typeof LEVELS)[number]
  items: string[]
  C: ReturnType<typeof useTechColors>
}) {
  const s = levelStyle(level, C)
  return (
    <div className="rounded-lg p-4 space-y-2" style={{ background: s.bg, border: `1px solid ${C.borderMuted}` }}>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.labelColor }}>
        {level}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm leading-snug flex gap-1.5" style={{ color: s.textColor }}>
            <span aria-hidden="true" style={{ color: s.labelColor }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
