'use client'

import { useState } from 'react'
import { useTechColors } from '@/lib/techColors'
import { LEVELS, type ProficiencyLevel } from '@/lib/data/technicalCompetencies'

export type PublicPositionComment = {
  id: string
  target_type: 'competency' | 'position'
  position_index: number | null
  position_title: string | null
  competency_name: string
  author_name: string
  comment_text: string
  suggested_text: string | null
  status: 'pending' | 'accepted' | 'returned'
  hrdd_note: string | null
  final_text: string | null
  created_at: string
  reviewed_at: string | null
}

export default function PositionCompetencyComments({
  divisionCode,
  positionIndex,
  positionTitle,
  competencyName,
  currentLevel,
  comments,
  onSubmitted,
}: {
  divisionCode: string
  positionIndex: number
  positionTitle: string
  competencyName: string
  currentLevel: ProficiencyLevel
  comments: PublicPositionComment[]
  onSubmitted: () => void
}) {
  const C = useTechColors()
  const [showForm, setShowForm] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [suggestedLevel, setSuggestedLevel] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const relevant = comments.filter(
    c => c.target_type === 'position' && c.position_index === positionIndex && c.competency_name === competencyName
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
          target_type: 'position',
          position_index: positionIndex,
          position_title: positionTitle,
          competency_name: competencyName,
          comment_text: commentText,
          suggested_text: suggestedLevel || null,
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Could not submit comment.')
        return
      }
      setCommentText('')
      setSuggestedLevel('')
      setShowForm(false)
      onSubmitted()
    } finally {
      setSubmitting(false)
    }
  }

  const statusColor = (status: PublicPositionComment['status']) =>
    status === 'accepted' ? '#0d8f82' : status === 'returned' ? '#b35c00' : C.orange

  const tintBg = 'rgba(245,158,11,0.10)'
  const tintBorder = 'rgba(245,158,11,0.4)'
  const tintText = '#b45309'

  return (
    <div className="space-y-3 rounded-xl p-4 mt-2" style={{ background: tintBg, border: `1px solid ${tintBorder}` }}>
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-xs font-black uppercase tracking-wide flex items-center gap-1.5" style={{ color: tintText }}>
          <span aria-hidden="true">💬</span>
          Comments/Suggestions {relevant.length > 0 && `(${relevant.length})`}
        </h4>
        <button
          onClick={() => setShowForm(v => !v)}
          className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg flex-shrink-0"
          style={{ background: showForm ? C.subtleBg : '#f59e0b', color: showForm ? C.text : '#ffffff' }}
        >
          {showForm ? 'Cancel' : '+ Leave a comment'}
        </button>
      </div>

      {relevant.length > 0 && (
        <div className="space-y-2">
          {relevant.map(c => (
            <div key={c.id} className="rounded-lg p-3 space-y-1.5" style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}>
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
              {c.suggested_text && c.status === 'pending' && (
                <p className="text-xs italic" style={{ color: C.textMuted }}>
                  Suggested level: {c.suggested_text} (currently {currentLevel})
                </p>
              )}
              {c.status === 'accepted' && c.final_text && (
                <p className="text-xs" style={{ color: C.textMuted }}>
                  Embedded level: {c.final_text}
                </p>
              )}
              {c.status === 'returned' && c.hrdd_note && (
                <p
                  className="text-xs leading-relaxed rounded-md px-2 py-1.5"
                  style={{ color: C.text, background: C.subtleBg }}
                >
                  <span className="font-bold uppercase tracking-wide" style={{ color: statusColor(c.status) }}>
                    HRDD's note:
                  </span>{' '}
                  {c.hrdd_note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-3 rounded-lg p-4" style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              Comment
            </label>
            <textarea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              required
              autoFocus
              rows={3}
              placeholder="Feedback on this position's assigned level for this competency"
              className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
              style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              Suggested level (optional)
            </label>
            <select
              value={suggestedLevel}
              onChange={e => setSuggestedLevel(e.target.value)}
              className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
              style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
            >
              <option value="">No change suggested — comment only</option>
              {LEVELS.map(lvl => (
                <option key={lvl} value={lvl}>
                  {lvl}
                  {lvl === currentLevel ? ' (currently assigned)' : ''}
                </option>
              ))}
            </select>
          </div>
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
