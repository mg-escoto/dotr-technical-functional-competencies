'use client'

import { useEffect, useRef } from 'react'
import { useTechColors } from '@/lib/techColors'

export default function HeroParallaxDecor() {
  const C = useTechColors()
  const slowRef = useRef<HTMLDivElement>(null)
  const fastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (slowRef.current) slowRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`
        if (fastRef.current) fastRef.current.style.transform = `translate3d(0, ${y * -0.18}px, 0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        ref={slowRef}
        className="absolute rounded-full blur-3xl"
        style={{ width: 440, height: 440, top: -180, right: -120, background: C.orange, opacity: 0.16 }}
      />
      <div
        ref={fastRef}
        className="absolute rounded-full blur-3xl"
        style={{ width: 340, height: 340, bottom: -200, left: -100, background: C.navy, opacity: 0.14 }}
      />
    </div>
  )
}
