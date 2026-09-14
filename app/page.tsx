'use client'

import Link from 'next/link'
import PortalNav, { LPS_URL } from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'
import { divisions } from '@/lib/data/technicalCompetencies'
import { coreCompetencies } from '@/lib/data/coreCompetencies'

export default function LandingPage() {
  const C = useTechColors()

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="pt-28 pb-14 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-6xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            Department of Transportation
          </p>
          <h1 className="font-sans font-black leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: C.text }}>
            DOTr Competency Portal
          </h1>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: C.textMuted }}>
            Three pillars of the Department's competency framework — the behavioral standards
            every employee is expected to demonstrate, the leadership proficiencies expected of
            supervisors and managers, and the technical and functional competencies specific to
            each office and division.
          </p>
        </div>
      </div>

      {/* ── Three pillars ─────────────────────────────────────────────────── */}
      <div className="px-8 pb-24 pt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <PillarCard
            C={C}
            href="/core"
            eyebrow="Pillar 1"
            title="Core Competencies"
            description="Department-wide behavioral competencies every employee is expected to demonstrate, from Emerging to Advanced."
            stat={`${coreCompetencies.length} competencies`}
          />
          <PillarCard
            C={C}
            href={LPS_URL}
            external
            eyebrow="Pillar 2"
            title="Leadership Competencies"
            description="Leadership proficiencies expected of supervisors and managers, tracked on the separate LPS portal."
            stat="Opens the LPS portal"
          />
          <PillarCard
            C={C}
            href="/technical"
            eyebrow="Pillar 3"
            title="Technical & Functional Competencies"
            description="Division-specific technical competency frameworks and sample position competency profiles."
            stat={`${divisions.length} divisions`}
          />
        </div>
      </div>
    </div>
  )
}

function PillarCard({
  C,
  href,
  external,
  eyebrow,
  title,
  description,
  stat,
}: {
  C: ReturnType<typeof useTechColors>
  href: string
  external?: boolean
  eyebrow: string
  title: string
  description: string
  stat: string
}) {
  const content = (
    <>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
        {eyebrow}
      </p>
      <h3 className="font-black text-xl leading-snug" style={{ color: C.text }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: C.textMuted }}>
        {description}
      </p>
      <div className="flex items-center justify-between gap-2 pt-2">
        <p className="text-sm font-bold" style={{ color: C.text }}>
          {stat}
        </p>
        <span className="text-lg font-black flex-shrink-0" style={{ color: C.orange }}>
          {external ? '↗' : '→'}
        </span>
      </div>
    </>
  )

  const className = 'group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-1'
  const style = { background: C.card, border: `1px solid ${C.borderMuted}` }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={style}>
      {content}
    </Link>
  )
}
