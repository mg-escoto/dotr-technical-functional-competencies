'use client'

import { useEffect, useRef, useState } from 'react'
import { useTechColors } from '@/lib/techColors'

export default function DownloadMenu({
  onDownloadDocx,
  downloading,
}: {
  onDownloadDocx: () => void
  downloading: boolean
}) {
  const C = useTechColors()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="no-print relative flex-shrink-0" ref={rootRef}>
      <button
        onClick={() => setOpen(o => !o)}
        disabled={downloading}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
        style={{ background: C.card, color: C.text, border: `1px solid ${C.borderMuted}` }}
      >
        {downloading ? 'Preparing…' : '⬇ Download'}
        <span aria-hidden="true" style={{ fontSize: 10 }}>▾</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1.5 rounded-lg overflow-hidden z-20 min-w-[170px] shadow-lg"
          style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
        >
          <button
            onClick={() => {
              setOpen(false)
              onDownloadDocx()
            }}
            className="w-full text-left px-3.5 py-2.5 text-xs font-semibold hover:opacity-70 transition-opacity"
            style={{ color: C.text }}
          >
            Word document (.docx)
          </button>
          <button
            onClick={() => {
              setOpen(false)
              window.print()
            }}
            className="w-full text-left px-3.5 py-2.5 text-xs font-semibold hover:opacity-70 transition-opacity"
            style={{ color: C.text, borderTop: `1px solid ${C.borderMuted}` }}
          >
            PDF (print)
          </button>
        </div>
      )}
    </div>
  )
}
