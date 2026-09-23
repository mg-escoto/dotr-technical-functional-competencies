'use client'

import { useState } from 'react'
import { useTechColors } from '@/lib/techColors'

export type PositionDuty = {
  id: string
  position_index: number
  competency_name: string
  duties_text: string
  status: 'pending' | 'final'
  created_at: string
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
  const relevant = duties.filter(
    d => d.position_index === positionIndex && d.competency_name === competencyName
  )
  const [open, setOpen] = useState(true)
  const [showForm, setShowForm] = useState(relevant.length === 0)
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
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
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Could not save.')
        return
      }
      setText('')
      setShowForm(false)
      onSaved()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ background: C.subtleBg, border: `1px solid ${C.subtleBorder}` }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.text }}>
          📋 Duties &amp; Responsibilities {relevant.length > 0 && `(${relevant.length})`}
        </p>
        <span className="text-sm font-bold flex-shrink-0" style={{ color: C.textMuted }}>
          {open ? '▾' : '▸'}
        </span>
      </button>

      {open && (
      <div className="px-4 pb-4 space-y-3">
      <div className="flex items-center justify-end gap-3">
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg flex-shrink-0"
            style={{ background: C.text, color: C.card }}
          >
            + Add entry
          </button>
        )}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
        Head of office (preferred): list the actual tasks performed by this position that
        map to this competency. Multiple people can add their own entries; all entries are
        kept until confirmed as final.
      </p>

      {relevant.length > 0 && (
        <div className="space-y-2">
          {relevant.map(d => (
            <div
              key={d.id}
              className="rounded-md p-3 space-y-1"
              style={{
                background: C.card,
                border: d.status === 'final' ? `2px solid #16a34a` : `1px solid ${C.borderMuted}`,
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs" style={{ color: C.textMuted }}>
                  {new Date(d.created_at).toLocaleString()}
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{
                    background: d.status === 'final' ? 'rgba(22,163,74,0.12)' : C.subtleBg,
                    color: d.status === 'final' ? '#16a34a' : C.textMuted,
                  }}
                >
                  {d.status === 'final' ? '✓ Final' : 'Pending review'}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.text }}>
                {d.duties_text}
              </p>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-2 rounded-md p-3" style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            required
            autoFocus
            rows={3}
            placeholder="e.g. Reviews and endorses disbursement vouchers for the section's weekly claims run…"
            className="w-full text-sm rounded-md p-3 resize-y"
            style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
          />
          {error && (
            <p className="text-xs" style={{ color: '#dc2626' }}>{error}</p>
          )}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting || !text.trim()}
              className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg disabled:opacity-40"
              style={{ background: C.orange, color: C.white }}
            >
              {submitting ? 'Saving…' : 'Save entry'}
            </button>
            {relevant.length > 0 && (
              <button
                type="button"
                onClick={() => { setShowForm(false); setText(''); setError(null) }}
                className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg"
                style={{ background: C.subtleBg, color: C.text }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
      </div>
      )}
    </div>
  )
}
