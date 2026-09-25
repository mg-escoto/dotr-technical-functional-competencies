'use client'

import Link from 'next/link'
import PortalNav, { LPS_URL } from '@/components/PortalNav'
import HeroParallaxDecor from '@/components/HeroParallaxDecor'
import { useTechColors } from '@/lib/techColors'
import { divisions } from '@/lib/data/technicalCompetencies'
import { coreCompetencies } from '@/lib/data/coreCompetencies'

export default function LandingPage() {
  const C = useTechColors()

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-28 pb-14 px-8" style={{ background: C.heroBg }}>
        <HeroParallaxDecor />
        <div className="relative z-10 max-w-6xl mx-auto space-y-3">
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
      <div className="px-8 pb-16 pt-12">
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

      {/* ── What is a Competency? ────────────────────────────────────────── */}
      <div className="px-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
              About the Framework
            </p>
            <h2 className="font-black leading-snug" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', color: C.text }}>
              What Is a Competency?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
              A competency is an observable, measurable combination of knowledge, skills, and
              attitudes that an employee consistently applies to perform a job well — not a
              single skill on its own, but the fuller set of capabilities behind sustained,
              effective performance. This portal follows the Civil Service Commission&apos;s (CSC)
              Competency-Based Human Resource Management System (CBHRMS), issued under CSC
              Resolution No. 2600005 — Guidelines on the Development of Agency Competency-Based
              Human Resource Management System. The resolution directs agencies to define core,
              leadership, and technical/functional competencies, the same three pillars organized
              above, for use across recruitment, performance management, and employee development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <CompetencyPartCard
              C={C}
              label="Knowledge"
              description="What an employee understands: the facts, concepts, procedures, and subject-matter expertise relevant to the job."
            />
            <CompetencyPartCard
              C={C}
              label="Skills"
              description="What an employee can do: the practical, applied abilities built through training and hands-on experience."
            />
            <CompetencyPartCard
              C={C}
              label="Attitudes"
              description="How an employee approaches the work: the values, behaviors, and mindset that shape performance."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetencyPartCard({
  C,
  label,
  description,
}: {
  C: ReturnType<typeof useTechColors>
  label: string
  description: string
}) {
  return (
    <div
      className="rounded-2xl p-6 space-y-2"
      style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
    >
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
        {label}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
        {description}
      </p>
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
