'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import PortalNav from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'

type Comment = {
  id: string
  division_code: string
  target_type: 'competency' | 'position'
  competency_index: number | null
  competency_name: string
  dimension_name: string | null
  position_index: number | null
  position_title: string | null
  author_name: string
  author_role: string | null
  comment_text: string
  suggested_text: string | null
  status: 'pending' | 'accepted' | 'returned'
  hrdd_note: string | null
  final_text: string | null
  created_at: string
  reviewed_at: string | null
}

const LEVEL_OPTIONS = ['Emerging', 'Developing', 'Proficient', 'Advanced']

export default function AdminDashboardPage() {
  const C = useTechColors()
  const router = useRouter()
  const [comments, setComments] = useState<Comment[] | null>(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [filter, setFilter] = useState<'pending' | 'accepted' | 'returned' | 'all'>('pending')

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/comments')
    if (res.status === 401) {
      router.push('/admin/login')
      return
    }
    const body = await res.json()
    setComments(body.comments ?? [])
    setAuthChecked(true)
  }, [router])

  useEffect(() => {
    load()
  }, [load])

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (!authChecked || !comments) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav />
        <div className="pt-32 px-8 text-sm" style={{ color: C.textMuted }}>
          Loading…
        </div>
      </div>
    )
  }

  const visible = comments.filter(c => filter === 'all' || c.status === filter)
  const counts = {
    pending: comments.filter(c => c.status === 'pending').length,
    accepted: comments.filter(c => c.status === 'accepted').length,
    returned: comments.filter(c => c.status === 'returned').length,
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav />

      <div className="pt-28 pb-10 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            HRDD Review Dashboard
          </p>
          <h1 className="font-black text-3xl" style={{ color: C.text }}>
            Division Comments
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: C.navy, color: C.white }}>
              {counts.pending} Pending
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: C.subtleBg, color: C.text }}>
              {counts.accepted} Accepted
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: C.subtleBg, color: C.text }}>
              {counts.returned} Returned
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto text-xs font-bold uppercase tracking-wide underline"
              style={{ color: C.textMuted }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 pt-6">
        <div className="max-w-5xl mx-auto flex gap-2">
          {(['pending', 'accepted', 'returned', 'all'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg"
              style={{
                background: filter === f ? C.orange : C.subtleBg,
                color: filter === f ? C.white : C.textMuted,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="px-8 pb-24 pt-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {visible.length === 0 && (
            <p className="text-sm" style={{ color: C.textMuted }}>
              No {filter !== 'all' ? filter : ''} comments.
            </p>
          )}
          {visible.map(c => (
            <CommentCard key={c.id} comment={c} C={C} onChanged={load} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CommentCard({
  comment,
  C,
  onChanged,
}: {
  comment: Comment
  C: ReturnType<typeof useTechColors>
  onChanged: () => void
}) {
  const [finalText, setFinalText] = useState(comment.suggested_text ?? '')
  const [hrddNote, setHrddNote] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const statusColor =
    comment.status === 'accepted' ? '#0d8f82' : comment.status === 'returned' ? '#b35c00' : C.orange

  async function act(action: 'accept' | 'return') {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch(`/api/admin/comments/${comment.id}/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          action === 'accept' ? { final_text: finalText, hrdd_note: hrddNote || null } : { hrdd_note: hrddNote || null }
        ),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Action failed.')
        return
      }
      onChanged()
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-xl p-5 space-y-3" style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}>
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            {comment.division_code}{' '}
            {comment.target_type === 'position'
              ? `· Position: ${comment.position_title}`
              : `· Competency ${(comment.competency_index ?? 0) + 1}`}
          </p>
          <h3 className="font-bold text-base" style={{ color: C.text }}>
            {comment.competency_name}
            {comment.dimension_name && (
              <span className="font-semibold" style={{ color: C.textMuted }}>
                {' '}— {comment.dimension_name}
              </span>
            )}
          </h3>
          <p className="text-xs" style={{ color: C.textMuted }}>
            {comment.author_name}
            {comment.author_role ? `, ${comment.author_role}` : ''} · {new Date(comment.created_at).toLocaleString()}
          </p>
        </div>
        <span
          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md flex-shrink-0"
          style={{ background: C.subtleBg, color: statusColor }}
        >
          {comment.status}
        </span>
      </div>

      <div className="rounded-lg p-3" style={{ background: C.subtleBg }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: C.textMuted }}>
          Comment
        </p>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          {comment.comment_text}
        </p>
      </div>

      {comment.status === 'pending' ? (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              {comment.target_type === 'position'
                ? 'Level to embed'
                : 'Text to embed (edit to reword before accepting)'}
            </label>
            {comment.target_type === 'position' ? (
              <select
                value={finalText}
                onChange={e => setFinalText(e.target.value)}
                className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
                style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
              >
                <option value="">Select a level…</option>
                {LEVEL_OPTIONS.map(lvl => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            ) : (
              <textarea
                value={finalText}
                onChange={e => setFinalText(e.target.value)}
                rows={3}
                placeholder="Text that will replace the competency definition on the live site"
                className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
                style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
              />
            )}
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
              Note back to the division (optional)
            </label>
            <textarea
              value={hrddNote}
              onChange={e => setHrddNote(e.target.value)}
              rows={2}
              className="w-full mt-1 rounded-lg px-3 py-2 text-sm"
              style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
          </div>
          {error && (
            <p className="text-sm" style={{ color: '#e05252' }}>
              {error}
            </p>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => act('accept')}
              disabled={busy || !finalText.trim()}
              className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg disabled:opacity-50"
              style={{ background: C.orange, color: C.white }}
            >
              Accept &amp; Embed
            </button>
            <button
              onClick={() => act('return')}
              disabled={busy}
              className="text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-lg disabled:opacity-50"
              style={{ background: C.subtleBg, color: C.text }}
            >
              Return
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg p-3 space-y-1" style={{ border: `1px solid ${C.borderMuted}` }}>
          <p className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
            {comment.status === 'accepted'
              ? comment.target_type === 'position'
                ? 'Embedded level'
                : 'Embedded text'
              : "HRDD's note"}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: C.text }}>
            {comment.status === 'accepted' ? comment.final_text : comment.hrdd_note || '—'}
          </p>
        </div>
      )}
    </div>
  )
}
