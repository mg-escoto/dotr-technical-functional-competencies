'use client'

import Link from 'next/link'
import PortalNav, { LPS_URL } from '@/components/PortalNav'
import HeroParallaxDecor from '@/components/HeroParallaxDecor'
import FadeIn from '@/components/FadeIn'
import { IconCore, IconLeadership, IconTechnical, IconKnowledge, IconSkills, IconAttitudes } from '@/components/LandingIcons'
import { useTechColors } from '@/lib/techColors'
import { divisions } from '@/lib/data/technicalCompetencies'
import { coreCompetencies } from '@/lib/data/coreCompetencies'

export default function LandingPage() {
  const C = useTechColors()

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: C.bg }}>
      <PortalNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden pt-28 pb-10 px-8"
        style={{ background: `linear-gradient(135deg, ${C.heroBg}, ${C.card})` }}
      >
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

          <div className="flex flex-wrap gap-8 pt-6">
            <StatBlock C={C} value={coreCompetencies.length} label="Core Competencies" accent={C.orange} />
            <StatBlock C={C} value={divisions.length} label="Technical Divisions" accent={C.yellow} />
            <StatBlock C={C} value={3} label="Framework Pillars" accent={C.navy} />
          </div>
        </div>
      </div>

      {/* ── Three pillars ─────────────────────────────────────────────────── */}
      <div className="px-8 pb-16 pt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FadeIn>
            <PillarCard
              C={C}
              href="/core"
              icon={<IconCore />}
              accent={C.orange}
              eyebrow="Pillar 1"
              title="Core Competencies"
              description="Department-wide behavioral competencies every employee is expected to demonstrate, from Emerging to Advanced."
              stat={`${coreCompetencies.length} competencies`}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <PillarCard
              C={C}
              href={LPS_URL}
              external
              icon={<IconLeadership />}
              accent={C.navy}
              eyebrow="Pillar 2"
              title="Leadership Competencies"
              description="Leadership proficiencies expected of supervisors and managers, tracked on the separate LPS portal."
              stat="Opens the LPS portal"
            />
          </FadeIn>
          <FadeIn delay={200}>
            <PillarCard
              C={C}
              href="/technical"
              icon={<IconTechnical />}
              accent={C.yellow}
              eyebrow="Pillar 3"
              title="Technical & Functional Competencies"
              description="Division-specific technical competency frameworks and sample position competency profiles."
              stat={`${divisions.length} divisions`}
            />
          </FadeIn>
        </div>
      </div>

      {/* ── What is a Competency? ────────────────────────────────────────── */}
      <div className="px-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-8">
          <FadeIn>
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
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <FadeIn delay={0}>
              <CompetencyPartCard
                C={C}
                icon={<IconKnowledge />}
                accent={C.orange}
                label="Knowledge"
                description="What an employee understands: the facts, concepts, procedures, and subject-matter expertise relevant to the job."
              />
            </FadeIn>
            <FadeIn delay={100}>
              <CompetencyPartCard
                C={C}
                icon={<IconSkills />}
                accent={C.yellow}
                label="Skills"
                description="What an employee can do: the practical, applied abilities built through training and hands-on experience."
              />
            </FadeIn>
            <FadeIn delay={200}>
              <CompetencyPartCard
                C={C}
                icon={<IconAttitudes />}
                accent={C.navy}
                label="Attitudes"
                description="How an employee approaches the work: the values, behaviors, and mindset that shape performance."
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatBlock({
  C,
  value,
  label,
  accent,
}: {
  C: ReturnType<typeof useTechColors>
  value: number
  label: string
  accent: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: accent }} />
      <div>
        <p className="font-black leading-none" style={{ fontSize: 'clamp(26px, 3vw, 34px)', color: C.text }}>
          {value}
        </p>
        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
          {label}
        </p>
      </div>
    </div>
  )
}

function CompetencyPartCard({
  C,
  icon,
  accent,
  label,
  description,
}: {
  C: ReturnType<typeof useTechColors>
  icon: React.ReactNode
  accent: string
  label: string
  description: string
}) {
  return (
    <div
      className="group rounded-2xl p-6 space-y-3 transition-all hover:-translate-y-1"
      style={{ background: C.card, border: `1px solid ${C.borderMuted}`, borderTop: `3px solid ${accent}` }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ background: `${accent}1f`, color: accent }}
      >
        <div className="w-5 h-5">{icon}</div>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
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
  icon,
  accent,
  eyebrow,
  title,
  description,
  stat,
}: {
  C: ReturnType<typeof useTechColors>
  href: string
  external?: boolean
  icon: React.ReactNode
  accent: string
  eyebrow: string
  title: string
  description: string
  stat: string
}) {
  const content = (
    <>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:-rotate-3"
        style={{ background: `${accent}1f`, color: accent }}
      >
        <div className="w-6 h-6">{icon}</div>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
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
        <span
          className="text-lg font-black flex-shrink-0 transition-transform group-hover:translate-x-1"
          style={{ color: accent }}
        >
          {external ? '↗' : '→'}
        </span>
      </div>
    </>
  )

  const className = 'group rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-1'
  const style = { background: C.card, border: `1px solid ${C.borderMuted}`, borderTop: `3px solid ${accent}` }

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
