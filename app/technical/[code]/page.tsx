'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import CompetencyComments, { type PublicComment } from '@/components/CompetencyComments'
import { useTechColors, levelStyle } from '@/lib/techColors'
import { getDivisionByCode, divisions, LEVELS, LEVEL_SCALE, type Competency } from '@/lib/data/technicalCompetencies'
import { getPositionProfile } from '@/lib/data/positionProfiles'
import { downloadDivisionDoc } from '@/lib/docExport'
import DownloadMenu from '@/components/DownloadMenu'

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

function LevelText({ text }: { text: string }) {
  const lines = text
    .split('\n')
    .map(l => l.trim().replace(/^•\s*/, ''))
    .filter(Boolean)
  if (lines.length <= 1) {
    return <p className="text-sm leading-snug">{lines[0] ?? ''}</p>
  }
  return (
    <ul className="text-sm leading-snug space-y-1 pl-4 list-disc">
      {lines.map((l, i) => (
        <li key={i}>{l}</li>
      ))}
    </ul>
  )
}

export default function DivisionCompetencyPage() {
  const params = useParams<{ code: string }>()
  const C = useTechColors()
  const division = getDivisionByCode(decodeURIComponent(params.code))
  const positionProfile = division ? getPositionProfile(division.code) : undefined
  const subUnits = division ? divisions.filter(d => d.parentCode === division.code) : []
  const [expanded, setExpanded] = useState<string | null>(null)
  const [liveCompetencies, setLiveCompetencies] = useState<Competency[] | null>(null)
  const [comments, setComments] = useState<PublicComment[]>([])
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)

  const loadComments = useCallback(async () => {
    if (!division) return
    const res = await fetch(`/api/comments?division=${encodeURIComponent(division.code)}`)
    if (res.ok) {
      const body = await res.json()
      setComments(body.comments ?? [])
    }
  }, [division])

  useEffect(() => {
    if (!division) return
    fetch(`/api/divisions/${encodeURIComponent(division.code)}/competencies`)
      .then(res => res.json())
      .then(body => setLiveCompetencies(body.competencies ?? null))
      .catch(() => setLiveCompetencies(null))
    loadComments()
  }, [division, loadComments])

  const competencies = liveCompetencies ?? division?.competencies ?? []

  useEffect(() => {
    if (!pendingScrollId) return
    const el = document.getElementById(pendingScrollId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingScrollId(null)
    }
  }, [expanded, pendingScrollId])

  function jumpToComment(c: PublicComment) {
    setExpanded(`${c.competency_index}-${c.competency_name}`)
    setPendingScrollId(`dim-${c.competency_index}-${slugify(c.dimension_name ?? '')}`)
  }

  async function handleDownload() {
    if (!division || downloading) return
    setDownloading(true)
    try {
      await downloadDivisionDoc(division, competencies)
    } finally {
      setDownloading(false)
    }
  }

  const returnedComments = comments.filter(c => c.status === 'returned' && c.target_type === 'competency')

  if (!division) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav active="technical" />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <h1 className="font-bold text-2xl" style={{ color: C.text }}>
            Division not found
          </h1>
          <Link href="/technical" className="text-sm font-bold underline" style={{ color: C.orange }}>
            ← Back to all divisions
          </Link>
        </div>
      </div>
    )
  }

  if (division.status === 'under-construction') {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav active="technical" />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <Link
            href="/technical"
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
      <PortalNav active="technical" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-12 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/technical"
              className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
              style={{ color: C.textMuted }}
            >
              ← All Divisions
            </Link>
            <DownloadMenu onDownloadDocx={handleDownload} downloading={downloading} />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            {division.code} · {division.office}
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
              {competencies.length} Competencies
            </div>
            {positionProfile && (
              <Link
                href={`/technical/${encodeURIComponent(division.code)}/positions`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide hover:opacity-90 transition-opacity"
                style={{ background: C.orange, color: C.white }}
              >
                View Position Competency Profile (Sample) →
              </Link>
            )}
          </div>
        </div>
      </div>

      {returnedComments.length > 0 && (
        <div className="no-print px-8 pt-6">
          <div className="max-w-6xl mx-auto space-y-2">
            {returnedComments.map(c => (
              <button
                key={c.id}
                onClick={() => jumpToComment(c)}
                className="w-full text-left rounded-xl px-5 py-3.5 flex items-center justify-between gap-3 transition-opacity hover:opacity-90"
                style={{ background: 'rgba(179,92,0,0.10)', border: '1px solid rgba(179,92,0,0.4)' }}
              >
                <p className="text-sm font-semibold leading-snug" style={{ color: '#b35c00' }}>
                  <span aria-hidden="true">⚠️</span>{' '}
                  {c.competency_name}
                  {c.dimension_name ? ` — ${c.dimension_name}` : ''} was returned
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-wide flex-shrink-0"
                  style={{ color: '#b35c00' }}
                >
                  Click to view →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

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
              Other units under {division.name}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subUnits.map(u => (
                <Link
                  key={u.code}
                  href={`/technical/${encodeURIComponent(u.code)}`}
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
          {competencies.map((comp, idx) => {
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
                      <div key={dim.name} id={`dim-${idx}-${slugify(dim.name)}`} className="space-y-3 pt-5 scroll-mt-24">
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
                                <div className="space-y-1" style={{ color: s.textColor }}>
                                  <LevelText text={dim.levels[level]} />
                                </div>
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
                                <div className="space-y-1" style={{ color: s.textColor }}>
                                  <LevelText text={dim.levels[level]} />
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        <div className="no-print">
                          <CompetencyComments
                            divisionCode={division.code}
                            competencyIndex={idx}
                            competencyName={comp.name}
                            dimensionName={dim.name}
                            comments={comments}
                            onSubmitted={loadComments}
                          />
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
