'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const lightColors = {
  bg:           '#F0EDE5',
  card:         '#FFFFFF',
  nav:          '#F0EDE5',
  text:         '#111111',
  textMuted:    'rgba(17,17,17,0.55)',
  navy:         '#0F0F4A',
  orange:       '#E84B2C',
  yellow:       '#F5D63A',
  heroBg:       '#F5D63A',
  white:        '#FFFFFF',
  border:       '#111111',
  borderMuted:  'rgba(17,17,17,0.12)',
  subtleBg:     'rgba(15,15,74,0.07)',
  subtleBorder: 'rgba(15,15,74,0.22)',
}

const darkColors = {
  bg:           '#0D0D1A',
  card:         '#16162A',
  nav:          '#0D0D1A',
  text:         '#EDE6D2',
  textMuted:    'rgba(237,230,210,0.78)',
  navy:         '#2A2A6A',
  orange:       '#E84B2C',
  yellow:       '#F5D63A',
  heroBg:       '#2A2200',
  white:        '#EDE6D2',
  border:       'rgba(237,230,210,0.25)',
  borderMuted:  'rgba(237,230,210,0.1)',
  subtleBg:     'rgba(237,230,210,0.08)',
  subtleBorder: 'rgba(237,230,210,0.2)',
}

export type ColorPalette = typeof lightColors

export function useColors(): ColorPalette {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return lightColors
  return resolvedTheme === 'dark' ? darkColors : lightColors
}
