'use client'

import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'
import { coreCompetencies, CORE_LEVEL_SCALE } from '@/lib/data/coreCompetencies'

export default function CoreCompetenciesPage() {
  const C = useTechColors()

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav active="core" />

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
            Core Competency Portal
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: C.text }}>
            Department-Wide Core Competencies
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: C.textMuted }}>
            Behavioral competencies every DOTr employee is expected to demonstrate, regardless
            of office, division, or role — from Basic to Superior.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.navy, color: C.white }}
            >
              {coreCompetencies.length} Core Competencies
            </div>
          </div>
        </div>
      </div>

      {/* ── Level Scale ───────────────────────────────────────────────────── */}
      <div className="px-8 pt-12">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
            <h2 className="text-lg font-black" style={{ color: C.text }}>
              Core Competency Level Scale
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-2xl -mt-2" style={{ color: C.textMuted }}>
            Every core competency uses the same four-level progression.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CORE_LEVEL_SCALE.map(row => (
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

      {/* ── Competencies ──────────────────────────────────────────────────── */}
      <div className="px-8 pb-24 pt-12">
        <div className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
            <h2 className="text-lg font-black" style={{ color: C.text }}>
              Competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCompetencies.map(comp => {
              const totalIndicators = Object.values(comp.indicators).reduce((s, arr) => s + arr.length, 0)
              const isDrafted = !!comp.note
              return (
                <Link
                  key={comp.slug}
                  href={`/core/${encodeURIComponent(comp.slug)}`}
                  className="group rounded-xl p-5 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
                  style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {isDrafted && (
                        <p
                          className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md w-fit"
                          style={{ background: C.subtleBg, color: C.orange }}
                        >
                          Sample · For Review
                        </p>
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
                    {comp.name}
                  </h3>
                  {comp.subtitle && (
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.orange }}>
                      {comp.subtitle}
                    </p>
                  )}
                  <p className="text-sm" style={{ color: C.textMuted }}>
                    {totalIndicators} behavioral indicators
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
