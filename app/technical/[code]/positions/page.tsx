'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import PositionCompetencyComments, { type PublicPositionComment } from '@/components/PositionCompetencyComments'
import PositionDuties, { type PositionDuty } from '@/components/PositionDuties'
import { useTechColors, levelStyle } from '@/lib/techColors'
import { getDivisionByCode, LEVELS, type ProficiencyLevel } from '@/lib/data/technicalCompetencies'
import { getPositionProfile, type PositionProfile } from '@/lib/data/positionProfiles'

export default function PositionProfilePage() {
  const params = useParams<{ code: string }>()
  const C = useTechColors()
  const code = decodeURIComponent(params.code)
  const division = getDivisionByCode(code)
  const staticProfile = getPositionProfile(code)
  const [expandedComp, setExpandedComp] = useState<string | null>(null)
  const [livePositions, setLivePositions] = useState<PositionProfile[] | null>(null)
  const [comments, setComments] = useState<PublicPositionComment[]>([])
  const [duties, setDuties] = useState<PositionDuty[]>([])
  const [pendingScrollId, setPendingScrollId] = useState<string | null>(null)

  const loadComments = useCallback(async () => {
    if (!division) return
    const res = await fetch(`/api/comments?division=${encodeURIComponent(division.code)}`)
    if (res.ok) {
      const body = await res.json()
      setComments(body.comments ?? [])
    }
  }, [division])

  const loadDuties = useCallback(async () => {
    if (!division) return
    const res = await fetch(`/api/divisions/${encodeURIComponent(division.code)}/duties`)
    if (res.ok) {
      const body = await res.json()
      setDuties(body.duties ?? [])
    }
  }, [division])

  useEffect(() => {
    if (!division) return
    fetch(`/api/divisions/${encodeURIComponent(division.code)}/positions`)
      .then(res => res.json())
      .then(body => setLivePositions(body.positions ?? null))
      .catch(() => setLivePositions(null))
    loadComments()
    loadDuties()
  }, [division, loadComments, loadDuties])

  const positions = livePositions ?? staticProfile?.positions ?? null
  const profile = staticProfile ? { ...staticProfile, positions: positions ?? staticProfile.positions } : null

  useEffect(() => {
    if (!pendingScrollId) return
    const el = document.getElementById(pendingScrollId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingScrollId(null)
    }
  }, [expandedComp, pendingScrollId])

  function jumpToComment(c: PublicPositionComment) {
    if (!profile || c.position_index === null) return
    const pos = profile.positions[c.position_index]
    if (!pos) return
    const posKey = `${c.position_index}-${pos.title}-${pos.section ?? ''}`
    const compKey = `${posKey}-${c.competency_name}`
    setExpandedComp(compKey)
    setPendingScrollId(compKey)
  }

  const returnedComments = comments.filter(c => c.status === 'returned' && c.target_type === 'position')

  if (!division || !profile) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav active="technical" />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <h1 className="font-bold text-2xl" style={{ color: C.text }}>
            No position profile available yet
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
            This preview only exists for divisions where an org chart has been reviewed so far.
          </p>
          <Link href="/technical" className="text-sm font-bold underline" style={{ color: C.orange }}>
            ← Back to all divisions
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav active="technical" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-10 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <Link
            href={`/technical/${encodeURIComponent(division.code)}`}
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: C.textMuted }}
          >
            ← {division.name}
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Sample · For Review
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: C.text }}>
            Position Competency Profile
          </h1>
        </div>
      </div>

      {/* ── Calibration notice ───────────────────────────────────────────── */}
      <div className="px-8 pt-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-xl px-5 py-4 text-sm leading-relaxed"
            style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}`, color: C.text }}
          >
            <strong>This is a draft for recalibration, not an official determination.</strong> Levels and
            competency assignments below were inferred from position and section placement — review each
            position and adjust before treating this as a finished classification.
          </div>
        </div>
      </div>

      {/* ── Returned comments notification ───────────────────────────────── */}
      {returnedComments.length > 0 && (
        <div className="px-8 pt-6">
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
                  {c.position_title} — {c.competency_name} was returned
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

      {/* ── Positions ─────────────────────────────────────────────────────── */}
      <div className="px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {profile.positions.map((pos, idx) => {
            const posKey = `${idx}-${pos.title}-${pos.section ?? ''}`
            return (
              <div
                key={posKey}
                className="rounded-xl p-6 space-y-4"
                style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
              >
                <div>
                  <h3 className="font-bold text-lg leading-snug" style={{ color: C.text }}>
                    {pos.title}
                  </h3>
                  {pos.section && (
                    <p className="text-sm" style={{ color: C.textMuted }}>
                      {pos.section}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  {pos.competencies.map(({ name, level }) => {
                    const s = levelStyle(level, C)
                    const compKey = `${posKey}-${name}`
                    const isOpen = expandedComp === compKey
                    const comp = division.competencies.find(c => c.name === name)
                    return (
                      <div
                        key={compKey}
                        id={compKey}
                        className="rounded-lg overflow-hidden scroll-mt-24"
                        style={{ border: `1px solid ${C.borderMuted}` }}
                      >
                        <button
                          onClick={() => setExpandedComp(isOpen ? null : compKey)}
                          className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
                          style={{ background: C.subtleBg }}
                        >
                          <p className="text-sm font-semibold" style={{ color: C.text }}>
                            {name}
                          </p>
                          <span
                            className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md flex-shrink-0"
                            style={{ background: s.bg, color: s.labelColor }}
                          >
                            {level}
                          </span>
                        </button>
                        {isOpen && comp && (
                          <div className="px-4 py-4 space-y-5" style={{ borderTop: `1px solid ${C.borderMuted}` }}>
                            {comp.definition && (
                              <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
                                {comp.definition}
                              </p>
                            )}
                            {comp.dimensions.map(dim => (
                              <div key={dim.name} className="space-y-2">
                                <div>
                                  <h4 className="text-xs font-bold uppercase tracking-wide" style={{ color: C.text }}>
                                    {dim.name}
                                  </h4>
                                  {dim.definition && (
                                    <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
                                      {dim.definition}
                                    </p>
                                  )}
                                </div>

                                {/* Mobile: stacked */}
                                <div className="sm:hidden space-y-2">
                                  {LEVELS.map(lvl => (
                                    <DimensionLevelCard key={lvl} lvl={lvl} activeLevel={level} text={dim.levels[lvl]} C={C} />
                                  ))}
                                </div>

                                {/* Desktop: 4-col grid */}
                                <div className="hidden sm:grid grid-cols-4 gap-2">
                                  {LEVELS.map(lvl => (
                                    <DimensionLevelCard key={lvl} lvl={lvl} activeLevel={level} text={dim.levels[lvl]} C={C} />
                                  ))}
                                </div>
                              </div>
                            ))}

                            <PositionDuties
                              divisionCode={division.code}
                              positionIndex={idx}
                              competencyName={name}
                              duties={duties}
                              onSaved={loadDuties}
                            />

                            <PositionCompetencyComments
                              divisionCode={division.code}
                              positionIndex={idx}
                              positionTitle={pos.title}
                              competencyName={name}
                              currentLevel={level}
                              comments={comments}
                              onSubmitted={loadComments}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function DimensionLevelCard({
  lvl,
  activeLevel,
  text,
  C,
}: {
  lvl: ProficiencyLevel
  activeLevel: ProficiencyLevel
  text: string
  C: ReturnType<typeof useTechColors>
}) {
  const s = levelStyle(lvl, C)
  const isActive = lvl === activeLevel
  return (
    <div
      className="rounded-lg p-3 space-y-1"
      style={{
        background: s.bg,
        border: isActive ? `2px solid ${C.orange}` : `1px solid ${C.borderMuted}`,
      }}
    >
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.labelColor }}>
        {lvl}{isActive ? ' ← assigned' : ''}
      </p>
      <p className="text-xs leading-snug" style={{ color: s.textColor }}>
        {text}
      </p>
    </div>
  )
}
