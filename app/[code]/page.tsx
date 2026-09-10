'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import TechCompNav from '@/components/TechCompNav'
import { useTechColors, levelStyle } from '@/lib/techColors'
import { getDivisionByCode, divisions, LEVELS, LEVEL_SCALE } from '@/lib/data/technicalCompetencies'
import { getPositionProfile } from '@/lib/data/positionProfiles'

export default function DivisionCompetencyPage() {
  const params = useParams<{ code: string }>()
  const C = useTechColors()
  const division = getDivisionByCode(decodeURIComponent(params.code))
  const positionProfile = division ? getPositionProfile(division.code) : undefined
  const subUnits = division ? divisions.filter(d => d.parentCode === division.code) : []
  const [expanded, setExpanded] = useState<string | null>(null)

  if (!division) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <TechCompNav />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <h1 className="font-bold text-2xl" style={{ color: C.text }}>
            Division not found
          </h1>
          <Link href="/" className="text-sm font-bold underline" style={{ color: C.orange }}>
            ← Back to all divisions
          </Link>
        </div>
      </div>
    )
  }

  if (division.status === 'under-construction') {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <TechCompNav />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: C.textMuted }}
          >
            ← All Divisions
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            {division.code} · {division.office}
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: C.text }}>
            {division.name}
          </h1>
          <div
            className="rounded-xl px-5 py-4 text-sm leading-relaxed"
            style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}`, color: C.text }}
          >
            <strong>Under Construction.</strong> This division's competency framework hasn't
            been added yet — check back once it's been reviewed and populated.
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <TechCompNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-12 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: C.textMuted }}
          >
            ← All Divisions
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            {division.code} · {division.office} · {division.category === 'with-framework' ? 'Revised Framework' : 'New Framework'}
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: C.text }}>
            {division.name}
          </h1>
          {division.basis && (
            <p className="text-sm max-w-2xl leading-relaxed" style={{ color: C.textMuted }}>
              {division.basis}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.navy, color: C.white }}
            >
              {division.competencies.length} Competencies
            </div>
            {positionProfile && (
              <Link
                href={`/${encodeURIComponent(division.code)}/positions`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
                style={{ background: C.orange, color: C.white }}
              >
                View Position Competency Profile (Sample) →
              </Link>
            )}
          </div>
        </div>
      </div>

      {division.reorgNote && (
        <div className="px-8 pt-6">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-xl px-5 py-4 text-sm leading-relaxed"
              style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}`, color: C.text }}
            >
              <strong>Note:</strong> {division.reorgNote}
            </div>
          </div>
        </div>
      )}

      {subUnits.length > 0 && (
        <div className="px-8 pt-6">
          <div className="max-w-6xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textMuted }}>
              Units under {division.name}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subUnits.map(u => (
                <Link
                  key={u.code}
                  href={`/${encodeURIComponent(u.code)}`}
                  className="group rounded-xl p-4 flex items-center justify-between gap-3 transition-all hover:-translate-y-0.5"
                  style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.orange }}>
                      {u.code}
                    </p>
                    <p className="font-bold text-sm" style={{ color: C.text }}>
                      {u.name}
                    </p>
                    {u.status === 'populated' && (
                      <p className="text-xs" style={{ color: C.textMuted }}>
                        {u.competencies.length} competencies · {u.competencies.reduce((s, c) => s + c.dimensions.length, 0)} dimensions
                      </p>
                    )}
                  </div>
                  <span
                    className="text-lg font-black flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: C.orange }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Career progression legend ────────────────────────────────────────
          Same level, career-stage label, and description everywhere
          — not division-specific, so it reads identically for every office. */}
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
          {division.competencies.map((comp, idx) => {
            const key = `${idx}-${comp.name}`
            const isOpen = expanded === key
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
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
                      Competency {idx + 1}
                    </p>
                    <h3 className="font-bold text-lg leading-snug" style={{ color: C.text }}>
                      {comp.name}
                    </h3>
                    {comp.definition && (
                      <p className="text-sm leading-relaxed max-w-3xl" style={{ color: C.textMuted }}>
                        {comp.definition}
                      </p>
                    )}
                    <p className="text-xs font-bold" style={{ color: C.textMuted }}>
                      {comp.dimensions.length} dimension{comp.dimensions.length !== 1 ? 's' : ''}
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
                    {comp.dimensions.map(dim => (
                      <div key={dim.name} className="space-y-3 pt-5">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: C.text }}>
                            {dim.name}
                          </h4>
                          {dim.definition && (
                            <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
                              {dim.definition}
                            </p>
                          )}
                        </div>

                        {/* Mobile: stacked */}
                        <div className="sm:hidden space-y-2">
                          {LEVELS.map(level => {
                            const s = levelStyle(level, C)
                            return (
                              <div
                                key={level}
                                className="rounded-lg p-3 space-y-1"
                                style={{ background: s.bg, border: `1px solid ${C.borderMuted}` }}
                              >
                                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.labelColor }}>
                                  {level}
                                </p>
                                <p className="text-sm leading-snug" style={{ color: s.textColor }}>
                                  {dim.levels[level]}
                                </p>
                              </div>
                            )
                          })}
                        </div>

                        {/* Desktop: 4-col grid */}
                        <div className="hidden sm:grid grid-cols-4 gap-3">
                          {LEVELS.map(level => {
                            const s = levelStyle(level, C)
                            return (
                              <div
                                key={level}
                                className="rounded-lg p-4 space-y-2"
                                style={{ background: s.bg, border: `1px solid ${C.borderMuted}` }}
                              >
                                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.labelColor }}>
                                  {level}
                                </p>
                                <p className="text-sm leading-snug" style={{ color: s.textColor }}>
                                  {dim.levels[level]}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
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
