'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import PortalNav from '@/components/PortalNav'
import { useTechColors, coreLevelStyle } from '@/lib/techColors'
import { getCoreCompetencyBySlug, CORE_LEVELS, type CoreLevel } from '@/lib/data/coreCompetencies'

export default function CoreCompetencyPage() {
  const params = useParams<{ slug: string }>()
  const C = useTechColors()
  const comp = getCoreCompetencyBySlug(decodeURIComponent(params.slug))

  if (!comp) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav active="core" />
        <div className="pt-32 px-8 max-w-3xl mx-auto space-y-4">
          <h1 className="font-bold text-2xl" style={{ color: C.text }}>
            Competency not found
          </h1>
          <Link href="/core" className="text-sm font-bold underline" style={{ color: C.orange }}>
            ← Back to Core Competencies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav active="core" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-12 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <Link
            href="/core"
            className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: C.textMuted }}
          >
            ← Core Competencies
          </Link>
          {comp.note && (
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
              Sample · For Review
            </p>
          )}
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', color: C.text }}>
            {comp.name}
          </h1>
          {comp.subtitle && (
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: C.orange }}>
              {comp.subtitle}
            </p>
          )}
          <p className="text-sm max-w-2xl leading-relaxed" style={{ color: C.textMuted }}>
            {comp.definition}
          </p>
        </div>
      </div>

      {comp.note && (
        <div className="px-8 pt-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-xl px-5 py-4 text-sm leading-relaxed"
              style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}`, color: C.text }}
            >
              <strong>This is a draft for recalibration, not an official determination.</strong> {comp.note}
            </div>
          </div>
        </div>
      )}

      {/* ── Indicators ────────────────────────────────────────────────────── */}
      <div className="px-8 pb-16 pt-10">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Mobile: stacked */}
          <div className="sm:hidden space-y-4">
            {CORE_LEVELS.map(level => (
              <IndicatorCard key={level} level={level} items={comp.indicators[level]} C={C} />
            ))}
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden sm:grid grid-cols-4 gap-4 items-start">
            {CORE_LEVELS.map(level => (
              <IndicatorCard key={level} level={level} items={comp.indicators[level]} C={C} />
            ))}
          </div>
        </div>
      </div>

      {/* ── References ────────────────────────────────────────────────────── */}
      {comp.references.length > 0 && (
        <div className="px-8 pb-24">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 rounded-full" style={{ background: C.orange }} />
              <h2 className="text-lg font-black" style={{ color: C.text }}>
                References
              </h2>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.borderMuted}` }}>
              {comp.references.map((ref, i) => (
                <a
                  key={ref.url}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-4 space-y-1 hover:opacity-80 transition-opacity"
                  style={{
                    background: i % 2 === 0 ? C.card : C.bg,
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
        </div>
      )}
    </div>
  )
}

function IndicatorCard({ level, items, C }: { level: CoreLevel; items: string[]; C: ReturnType<typeof useTechColors> }) {
  const s = coreLevelStyle(level, C)
  return (
    <div className="rounded-xl p-4 space-y-3 h-full" style={{ background: s.bg, border: `1px solid ${C.borderMuted}` }}>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.labelColor }}>
        {level}
      </p>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="text-sm leading-snug flex gap-2" style={{ color: s.textColor }}>
            <span aria-hidden="true" style={{ color: s.labelColor }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
