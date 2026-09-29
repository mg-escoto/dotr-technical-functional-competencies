'use client'

import { useState } from 'react'
import { useTechColors } from '@/lib/techColors'

export const GENERAL_COMMENT_INDEX = -1
export const GENERAL_COMMENT_NAME = 'General'

export type PublicGeneralComment = {
  id: string
  competency_index: number
  competency_name: string
  author_name: string
  comment_text: string
  status: 'pending' | 'accepted' | 'returned'
  hrdd_note: string | null
  created_at: string
}

export default function GeneralComments({
  divisionCode,
  comments,
  onSubmitted,
  description = "Anything else about this division's competency framework that doesn't fit under a specific competency or dimension.",
  placeholder = "Any other feedback on this division's competency framework",
}: {
  divisionCode: string
  comments: PublicGeneralComment[]
  onSubmitted: () => void
  description?: string
  placeholder?: string
}) {
  const C = useTechColors()
  const [showForm, setShowForm] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const relevant = comments.filter(
    c => c.competency_index === GENERAL_COMMENT_INDEX && c.competency_name === GENERAL_COMMENT_NAME
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          division_code: divisionCode,
          target_type: 'competency',
          competency_index: GENERAL_COMMENT_INDEX,
          competency_name: GENERAL_COMMENT_NAME,
          comment_text: commentText,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Could not submit comment.')
        return
      }
      setCommentText('')
      setShowForm(false)
      onSubmitted()
    } finally {
      setSubmitting(false)
    }
  }

  const statusColor = (status: PublicGeneralComment['status']) =>
    status === 'accepted' ? '#0d8f82' : status === 'returned' ? '#b35c00' : C.orange

  return (
    <div className="rounded-xl p-6 space-y-4" style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-black text-lg leading-snug" style={{ color: C.text }}>
            General Comments
          </h3>
          <p className="text-sm" style={{ color: C.textMuted }}>
            {description}
          </p>
        </div>
        <button
          onClick={() => setShowForm(v => !v)}
          className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg flex-shrink-0"
          style={{ background: showForm ? C.subtleBg : C.orange, color: showForm ? C.text : C.white }}
        >
          {showForm ? 'Cancel' : '+ Leave a comment'}
        </button>
      </div>

      {relevant.length > 0 && (
        <div className="space-y-2">
          {relevant.map(c => (
            <div key={c.id} className="rounded-lg p-3 space-y-1.5" style={{ background: C.subtleBg, border: `1px solid ${C.borderMuted}` }}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs" style={{ color: C.textMuted }}>
                  {new Date(c.created_at).toLocaleDateString()}
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-md"
                  style={{ background: C.card, color: statusColor(c.status) }}
                >
                  {c.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: C.text }}>
                {c.comment_text}
              </p>
              {c.status === 'returned' && c.hrdd_note && (
                <p className="text-xs leading-relaxed rounded-md px-2 py-1.5" style={{ color: C.text, background: C.card }}>
                  <span className="font-bold uppercase tracking-wide" style={{ color: statusColor(c.status) }}>
                    HRDD&apos;s note:
                  </span>{' '}
                  {c.hrdd_note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-3 rounded-lg p-4" style={{ background: C.subtleBg, border: `1px solid ${C.borderMuted}` }}>
          <textarea
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            required
            autoFocus
            rows={4}
            placeholder={placeholder}
            className="w-full rounded-lg px-3 py-2 text-sm"
            style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
          />
          {error && (
            <p className="text-sm" style={{ color: '#e05252' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting || !commentText.trim()}
            className="text-sm font-black uppercase tracking-wide px-5 py-2.5 rounded-lg disabled:opacity-40 shadow-sm hover:opacity-90 transition-opacity"
            style={{ background: C.orange, color: C.white }}
          >
            {submitting ? 'Submitting…' : 'Submit to HRDD'}
          </button>
        </form>
      )}
    </div>
  )
}
