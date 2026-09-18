'use client'

import { useState, useEffect } from 'react'
import { useTechColors } from '@/lib/techColors'

export type PositionDuty = {
  position_index: number
  competency_name: string
  duties_text: string
}

export default function PositionDuties({
  divisionCode,
  positionIndex,
  competencyName,
  duties,
  onSaved,
}: {
  divisionCode: string
  positionIndex: number
  competencyName: string
  duties: PositionDuty[]
  onSaved: () => void
}) {
  const C = useTechColors()
  const existing = duties.find(
    d => d.position_index === positionIndex && d.competency_name === competencyName
  )
  const [text, setText] = useState(existing?.duties_text ?? '')
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    setText(existing?.duties_text ?? '')
  }, [existing?.duties_text])

  const save = async () => {
    if (text.trim() === (existing?.duties_text ?? '').trim()) return
    setStatus('saving')
    try {
      const res = await fetch(`/api/divisions/${encodeURIComponent(divisionCode)}/duties`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position_index: positionIndex,
          competency_name: competencyName,
          duties_text: text,
        }),
      })
      if (!res.ok) throw new Error('save failed')
      setStatus('saved')
      onSaved()
      setTimeout(() => setStatus(s => (s === 'saved' ? 'idle' : s)), 2500)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="rounded-lg p-4 space-y-2"
      style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}` }}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.text }}>
          📋 Actual Duties &amp; Responsibilities
        </p>
        {status === 'saving' && (
          <span className="text-xs" style={{ color: C.textMuted }}>Saving…</span>
        )}
        {status === 'saved' && (
          <span className="text-xs font-semibold" style={{ color: '#16a34a' }}>Saved</span>
        )}
        {status === 'error' && (
          <span className="text-xs font-semibold" style={{ color: '#dc2626' }}>Failed to save — try again</span>
        )}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
        Head of office: list the actual tasks performed by this position that map to this competency.
      </p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onBlur={save}
        placeholder="e.g. Reviews and endorses disbursement vouchers for the section's weekly claims run…"
        rows={3}
        className="w-full text-sm rounded-md p-3 resize-y"
        style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
      />
    </div>
  )
}
