'use client'

import Link from 'next/link'
import TechCompNav from '@/components/TechCompNav'
import { useTechColors } from '@/lib/techColors'
import { getDivisionsByCategory, LEVEL_SCALE } from '@/lib/data/technicalCompetencies'

export default function TechnicalCompetenciesPage() {
  const C = useTechColors()

  const withFramework = getDivisionsByCategory('with-framework')
  const withoutFramework = getDivisionsByCategory('without-framework')

  const totalCompetencies = [...withFramework, ...withoutFramework].reduce(
    (sum, d) => sum + d.competencies.length,
    0
  )

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <TechCompNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-14 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Technical &amp; Functional Competency Portal
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: C.text }}>
            Division Competency Frameworks
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: C.textMuted }}>
            Technical and functional competency frameworks for each division, defining the dimensions and behavioral indicators expected at every career progression stage — from Emerging to Advanced.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.navy, color: C.white }}
            >
              {withFramework.length + withoutFramework.length} Divisions
            </div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: C.orange, color: C.white }}
            >
              {totalCompetencies} Competencies
            </div>
          </div>
        </div>
      </div>

      {/* ── Competency Level Scale (kept consistent with the LPS) ───────────── */}
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

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="px-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-14 pt-12">
          <DivisionGroup
            C={C}
            title="With Existing Competency Framework"
            subtitle="Divisions whose competency frameworks were revised from an existing, previously validated structure (DPCR-aligned)."
            divisions={withFramework}
          />
          <DivisionGroup
            C={C}
            title="Without Existing Competency Framework"
            subtitle="Divisions for which a competency framework was newly developed."
            divisions={withoutFramework}
          />
        </div>
      </div>
    </div>
  )
}

function DivisionGroup({
  C,
  title,
  subtitle,
  divisions,
}: {
  C: ReturnType<typeof useTechColors>
  title: string
  subtitle: string
  divisions: ReturnType<typeof getDivisionsByCategory>
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
        <h2 className="text-lg font-black" style={{ color: C.text }}>
          {title}
        </h2>
      </div>
      <p className="text-sm leading-relaxed max-w-2xl -mt-2" style={{ color: C.textMuted }}>
        {subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {divisions.map(d => (
          <Link
            key={d.code}
            href={`/${encodeURIComponent(d.code)}`}
            className="group rounded-xl p-5 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
            style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
          >
            <div className="flex items-center justify-between gap-2">
              <p
                className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-md w-fit"
                style={{ background: C.subtleBg, color: C.orange }}
              >
                {d.code}
              </p>
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
            <p className="text-sm" style={{ color: C.textMuted }}>
              {d.competencies.length} competencies · {d.competencies.reduce((s, c) => s + c.dimensions.length, 0)} dimensions
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
