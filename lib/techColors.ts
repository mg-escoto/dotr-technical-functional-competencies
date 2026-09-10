'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import type { ColorPalette } from '@/lib/colors'
import type { ProficiencyLevel } from '@/lib/data/technicalCompetencies'

// A deliberately distinct palette (deep teal/slate + cyan accent) so this
// section reads as its own product, not a page inside the LPS (navy/orange/cream).
const lightColors: ColorPalette = {
  bg:           '#F2F5F4',
  card:         '#FFFFFF',
  nav:          '#FFFFFF',
  text:         '#0F1E1C',
  textMuted:    'rgba(15,30,28,0.6)',
  navy:         '#1E293B',
  orange:       '#0D9488',
  yellow:       '#2DD4BF',
  heroBg:       '#E6F4F1',
  white:        '#FFFFFF',
  border:       '#0F1E1C',
  borderMuted:  'rgba(15,30,28,0.12)',
  subtleBg:     'rgba(13,148,136,0.08)',
  subtleBorder: 'rgba(13,148,136,0.25)',
}

const darkColors: ColorPalette = {
  bg:           '#0A1615',
  card:         '#101E1C',
  nav:          '#0A1615',
  text:         '#E4F3F0',
  textMuted:    'rgba(228,243,240,0.75)',
  navy:         '#1E293B',
  orange:       '#2DD4BF',
  yellow:       '#5EEAD4',
  heroBg:       '#0F2624',
  white:        '#E4F3F0',
  border:       'rgba(228,243,240,0.25)',
  borderMuted:  'rgba(228,243,240,0.1)',
  subtleBg:     'rgba(228,243,240,0.08)',
  subtleBorder: 'rgba(45,212,191,0.25)',
}

export function useTechColors(): ColorPalette {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return lightColors
  return resolvedTheme === 'dark' ? darkColors : lightColors
}

export function levelStyle(level: ProficiencyLevel, C: ColorPalette) {
  switch (level) {
    case 'Emerging':
      return { bg: C.subtleBg, labelColor: C.textMuted, textColor: C.text }
    case 'Developing':
      return { bg: 'rgba(45,212,191,0.12)', labelColor: '#0d8f82', textColor: C.text }
    case 'Proficient':
      return { bg: 'rgba(13,148,136,0.12)', labelColor: C.orange, textColor: C.text }
    case 'Advanced':
      return { bg: C.navy, labelColor: C.orange, textColor: '#ffffff' }
  }
}
