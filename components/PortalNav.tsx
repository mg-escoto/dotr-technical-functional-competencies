'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTechColors } from '@/lib/techColors'
import ThemeToggle from '@/components/ThemeToggle'

export const LPS_URL = 'http://lps-dotr.vercel.app'

type Section = 'core' | 'leadership' | 'technical' | null

export default function PortalNav({ active = null }: { active?: Section }) {
  const [scrolled, setScrolled] = useState(false)
  const C = useTechColors()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = (section: Section) => ({
    color: active === section ? C.orange : C.textMuted,
  })

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-6 py-4 transition-all duration-300"
      style={{
        background: C.nav,
        borderBottom: scrolled ? `1px solid ${C.borderMuted}` : '1px solid transparent',
      }}
    >
      <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/dotr-logo.svg" alt="Department of Transportation" className="w-9 h-9 flex-shrink-0" />
        <p className="hidden sm:block text-xs font-black uppercase tracking-widest" style={{ color: C.text }}>
          DOTr Competency Portal
        </p>
      </Link>

      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        <Link
          href="/core"
          className="text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
          style={linkStyle('core')}
        >
          Core
        </Link>
        <a
          href={LPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity inline-flex items-center gap-1"
          style={linkStyle('leadership')}
        >
          Leadership
          <span aria-hidden="true">↗</span>
        </a>
        <Link
          href="/technical"
          className="text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
          style={linkStyle('technical')}
        >
          Technical &amp; Functional
        </Link>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <Link
          href="/admin"
          title="HRDD review dashboard"
          className="text-xs font-semibold tracking-wide opacity-50 hover:opacity-90 transition-opacity"
          style={{ color: C.textMuted }}
        >
          HRDD
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
