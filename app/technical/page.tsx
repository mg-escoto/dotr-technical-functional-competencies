'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'
import { getDivisionsByOffice, divisions, LEVEL_SCALE, type Division } from '@/lib/data/technicalCompetencies'
import { getPositionProfile } from '@/lib/data/positionProfiles'

function matches(d: Division, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return d.code.toLowerCase().includes(q) || d.name.toLowerCase().includes(q) || d.office.toLowerCase().includes(q)
}

export default function TechnicalCompetenciesPage() {
  const C = useTechColors()
  const [query, setQuery] = useState('')
  const officeGroups = getDivisionsByOffice()
  const populatedCount = divisions.filter(d => d.status === 'populated').length

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return officeGroups
    return officeGroups
      .map(group => {
        // A top-level division is kept if it matches directly, or if one of its
        // nested children (e.g. Dental Unit under GSD) matches — children only ever
        // render as an inline "Includes ..." mention on the parent card, not as
        // their own card, so we keep every child of a kept parent, matching or not.
        const topLevel = group.divisions.filter(d => !d.parentCode)
        const keptTop = topLevel.filter(parent => {
          if (matches(parent, query)) return true
          const children = group.divisions.filter(c => c.parentCode === parent.code)
          return children.some(c => matches(c, query))
        })
        const keptCodes = new Set(keptTop.map(d => d.code))
        const keptDivisions = group.divisions.filter(
          d => keptCodes.has(d.code) || (d.parentCode && keptCodes.has(d.parentCode))
        )
        return { ...group, divisions: keptDivisions }
      })
      .filter(group => group.divisions.length > 0)
  }, [officeGroups, query])

  const resultCount = filteredGroups.reduce((s, g) => s + g.divisions.filter(d => !d.parentCode).length, 0)
  const isSearching = query.trim().length > 0

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav active="technical" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-14 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity inline-block"
            style={{ color: C.textMuted }}
          >
            ← All Competencies
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Division Technical &amp; Functional Competencies
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: C.text }}>
            Division Competency Frameworks
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: C.textMuted }}>
            Technical and functional competency frameworks organized by office and service,
            defining the dimensions and behavioral indicators expected at every career
            progression stage — from Emerging to Advanced.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.navy, color: C.white }}
            >
              {divisions.length} Divisions
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.orange, color: C.white }}
            >
              {populatedCount} Populated · {divisions.length - populatedCount} Under Construction
            </div>
          </div>
        </div>
      </div>

      {/* ── Search bar (sticky, docked just below the fixed nav) ───────────── */}
      <div className="sticky top-[70px] z-20 px-8 py-4" style={{ background: C.bg, borderBottom: `1px solid ${C.borderMuted}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <span
              className="absolute left-4 top-1/2 -translate-y-1/2 text-base pointer-events-none"
              style={{ color: C.textMuted }}
              aria-hidden="true"
            >
              🔍
            </span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by division name, code, or office…"
              className="w-full text-sm rounded-xl pl-11 pr-10 py-3 outline-none"
              style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
            {isSearching && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center hover:opacity-70"
                style={{ color: C.textMuted, background: C.subtleBg }}
              >
                ×
              </button>
            )}
          </div>
          {isSearching && (
            <p className="text-xs pt-2" style={{ color: C.textMuted }}>
              {resultCount === 0
                ? 'No divisions match your search.'
                : `${resultCount} division${resultCount === 1 ? '' : 's'} found`}
            </p>
          )}
        </div>
      </div>

      {/* ── Competency Level Scale ────────────────────────────────────────── */}
      {!isSearching && (
      <div className="px-8 pt-12">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
            <h2 className="text-lg font-black" style={{ color: C.text }}>
              Competency Level Scale
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl -mt-2" style={{ color: C.textMuted }}>
            Every division framework uses the same four-level progression.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LEVEL_SCALE.map(row => (
              <div
                key={row.level}
                className="rounded-xl p-4 space-y-1.5"
                style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
              >
                <p className="text-sm font-black" style={{ color: C.orange }}>{row.level}</p>
                <p className="text-xs font-semibold" style={{ color: C.text }}>{row.stage}</p>
                <p className="text-sm leading-snug" style={{ color: C.textMuted }}>{row.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* ── Offices ───────────────────────────────────────────────────────── */}
      <div className="px-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-14 pt-12">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-16 space-y-2">
              <p className="text-4xl">🔍</p>
              <p className="font-bold" style={{ color: C.text }}>No divisions match &ldquo;{query.trim()}&rdquo;</p>
              <p className="text-sm" style={{ color: C.textMuted }}>Try a division name, code (e.g. AD, HRDD), or office name.</p>
            </div>
          ) : (
            filteredGroups.map(group => (
              <OfficeSection key={group.officeOrder} C={C} office={group.office} divisions={group.divisions} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function OfficeSection({
  C,
  office,
  divisions,
}: {
  C: ReturnType<typeof useTechColors>
  office: string
  divisions: Division[]
}) {
  const topLevel = divisions.filter(d => !d.parentCode)

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
        <h2 className="text-lg font-black" style={{ color: C.text }}>
          {office}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topLevel.map(d => {
          const children = divisions.filter(c => c.parentCode === d.code)
          const hasPositionProfile = !!getPositionProfile(d.code)
          return (
            <Link
              key={d.code}
              href={`/technical/${encodeURIComponent(d.code)}`}
              className="group rounded-xl p-5 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: C.card,
                border: `1px solid ${C.borderMuted}`,
                opacity: d.status === 'under-construction' ? 0.75 : 1,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <p
                    className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md w-fit"
                    style={{ background: C.subtleBg, color: C.orange }}
                  >
                    {d.code}
                  </p>
                  {hasPositionProfile && (
                    <span
                      title="Individual competencies available"
                      aria-label="Individual competencies available"
                      className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold flex-shrink-0"
                      style={{ background: C.orange, color: C.white }}
                    >
                      ✓
                    </span>
                  )}
                </div>
                <span
                  className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: C.orange }}
                >
                  →
                </span>
              </div>
              <h3 className="font-bold text-base leading-snug" style={{ color: C.text }}>
                {d.name}
              </h3>
              {d.status === 'under-construction' ? (
                <p
                  className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md w-fit"
                  style={{ background: C.subtleBg, color: C.textMuted }}
                >
                  Under Construction
                </p>
              ) : (
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {d.competencies.length} competencies · {d.competencies.reduce((s, c) => s + c.dimensions.length, 0)} dimensions
                </p>
              )}
              {children.length > 0 && (
                <p className="text-xs italic" style={{ color: C.textMuted }}>
                  Includes {children.map(c => c.name).join(', ')}
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
