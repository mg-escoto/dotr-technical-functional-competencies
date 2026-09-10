'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const TOOLTIP_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 10px)',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 200,
  background: '#0F0F4A',
  color: '#EDE6D2',
  fontSize: 11,
  fontWeight: 500,
  lineHeight: 1.5,
  padding: '8px 12px',
  borderRadius: 10,
  zIndex: 100,
  pointerEvents: 'none',
  textAlign: 'center',
  whiteSpace: 'normal',
}

const CARET_STYLE: React.CSSProperties = {
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 0, height: 0,
  borderLeft: '6px solid transparent',
  borderRight: '6px solid transparent',
  borderBottom: '6px solid #0F0F4A',
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted]   = useState(false)
  const [showTip, setShowTip]   = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {showTip && (
        <div style={TOOLTIP_STYLE}>
          <div style={CARET_STYLE} />
          <strong style={{ display: 'block', marginBottom: 3 }}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </strong>
          {isDark
            ? 'Switch to a light background — easier in bright environments.'
            : 'Switch to a dark background — easier on the eyes at night or in low light.'}
        </div>
      )}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: 16,
          lineHeight: 1,
          padding: '4px 6px',
          borderRadius: 20,
          transition: 'opacity 0.2s',
          opacity: 0.85,
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  )
}
