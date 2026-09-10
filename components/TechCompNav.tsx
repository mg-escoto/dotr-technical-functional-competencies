'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTechColors } from '@/lib/techColors'
import ThemeToggle from '@/components/ThemeToggle'

export default function TechCompNav() {
  const [scrolled, setScrolled] = useState(false)
  const C = useTechColors()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300"
      style={{
        background: C.nav,
        borderBottom: scrolled ? `1px solid ${C.borderMuted}` : '1px solid transparent',
      }}
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
          style={{ background: C.navy }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </div>
        <p className="hidden sm:block text-xs font-black uppercase tracking-widest" style={{ color: C.text }}>
          Technical Competencies
        </p>
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  )
}
