'use client'

import { useState } from 'react'
import { useTechColors } from '@/lib/techColors'

export type PublicComment = {
  id: string
  competency_index: number
  competency_name: string
  dimension_name: string | null
  author_name: string
  comment_text: string
  suggested_text: string | null
  status: 'pending' | 'accepted' | 'returned'
  final_text: string | null
  created_at: string
  reviewed_at: string | null
}

export default function CompetencyComments({
  divisionCode,
  competencyIndex,
  competencyName,
  comments,
  onSubmitted,
}: {
  divisionCode: string
  competencyIndex: number
  competencyName: string
  comments: PublicComment[]
  onSubmitted: () => void
}) {
  const C = useTechColors()
  const [showForm, setShowForm] = useState(false)
  const [authorName, setAuthorName] = useState('')
  const [authorRole, setAuthorRole] = useState('')
  const [commentText, setCommentText] = useState('')
  const [suggestedText, setSuggestedText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const relevant = comments.filter(c => c.competency_index === competencyIndex)

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
          competency_index: competencyIndex,
          competency_name: competencyName,
          author_name: authorName,
          author_role: authorRole || null,
          comment_text: commentText,
          suggested_text: suggestedText || null,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Could not submit comment.')
        return
      }
      setAuthorName('')
      setAuthorRole('')
      setCommentText('')
      setSuggestedText('')
      setShowForm(false)
      onSubmitted()
    } finally {
      setSubmitting(false)
    }
  }

  const statusColor = (status: PublicComment['status']) =>
    status === 'accepted' ? '#0d8f82' : status === 'returned' ? '#b35c00' : C.orange

  return (
    <div className="space-y-3 pt-2" style={{ borderTop: `1px solid ${C.borderMuted}` }}>
      <div className="flex items-center justify-between pt-4">
        <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: C.text }}>
          Comments for HRDD {relevant.length > 0 && `(${relevant.length})`}
        </h4>
        <button
          onClick={() => setShowForm(v => !v)}
          className="text-xs font-bold uppercase tracking-wide"
          style={{ color: C.orange }}
        >
          {showForm ? 'Cancel' : '+ Leave a comment'}
        </button>
      </div>

      {relevant.length > 0 && (
        <div className="space-y-2">
          {relevant.map(c => (
            <div key={c.id} className="rounded-lg p-3 space-y-1.5" style={{ background: C.subtleBg }}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold" style={{ color: C.text }}>
                  {c.author_name}
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
              {c.suggested_text && c.status === 'pending' && (
                <p className="text-xs italic leading-relaxed" style={{ color: C.textMuted }}>
                  Suggested text: "{c.suggested_text}"
                </p>
              )}
              {c.status === 'accepted' && c.final_text && (
                <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
                  Embedded: "{c.final_text}"
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-3 rounded-lg p-4" style={{ background: C.subtleBg }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
                Your name
              </label>
              <input
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
                required
                className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
                style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
                Role (e.g. Head of Office)
              </label>
              <input
                value={authorRole}
                onChange={e => setAuthorRole(e.target.value)}
                className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
                style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              Comment
            </label>
            <textarea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              required
              rows={3}
              placeholder="Feedback on this competency's content"
              className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
              style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              Suggested replacement text (optional)
            </label>
            <textarea
              value={suggestedText}
              onChange={e => setSuggestedText(e.target.value)}
              rows={2}
              placeholder="Exact wording you'd like to see in the definition, if you have one"
              className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
              style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: '#e05252' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={submitting || !authorName.trim() || !commentText.trim()}
            className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg disabled:opacity-50"
            style={{ background: C.orange, color: C.white }}
          >
            {submitting ? 'Submitting…' : 'Submit to HRDD'}
          </button>
        </form>
      )}
    </div>
  )
}
