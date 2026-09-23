'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import PortalNav from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'
import { getDivisionByCode } from '@/lib/data/technicalCompetencies'
import { getPositionProfile } from '@/lib/data/positionProfiles'

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

type Duty = {
  id: string
  division_code: string
  position_index: number
  competency_name: string
  duties_text: string
  status: 'pending' | 'final' | 'rejected'
  created_at: string
}

const LEVEL_OPTIONS = ['Emerging', 'Developing', 'Proficient', 'Advanced']

function matchesQuery(c: Comment, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return [
    c.division_code,
    c.competency_name,
    c.dimension_name,
    c.position_title,
    c.author_name,
    c.comment_text,
    c.suggested_text,
  ]
    .filter(Boolean)
    .some(field => (field as string).toLowerCase().includes(q))
}

function positionTitle(divisionCode: string, positionIndex: number): string {
  return getPositionProfile(divisionCode)?.positions[positionIndex]?.title ?? `Position #${positionIndex + 1}`
}

function matchesDutyQuery(d: Duty, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return [d.division_code, d.competency_name, positionTitle(d.division_code, d.position_index), d.duties_text]
    .filter(Boolean)
    .some(field => field.toLowerCase().includes(q))
}

export default function AdminDashboardPage() {
  const C = useTechColors()
  const router = useRouter()
  const [view, setView] = useState<'comments' | 'duties'>('comments')
  const [comments, setComments] = useState<Comment[] | null>(null)
  const [duties, setDuties] = useState<Duty[] | null>(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [filter, setFilter] = useState<'pending' | 'accepted' | 'returned' | 'all'>('pending')
  const [dutyFilter, setDutyFilter] = useState<'pending' | 'final' | 'rejected' | 'all'>('pending')
  const [query, setQuery] = useState('')

  const loadComments = useCallback(async () => {
    const res = await fetch('/api/admin/comments')
    if (res.status === 401) {
      router.push('/admin/login')
      return
    }
    const body = await res.json()
    setComments(body.comments ?? [])
    setAuthChecked(true)
  }, [router])

  const loadDuties = useCallback(async () => {
    const res = await fetch('/api/admin/duties')
    if (res.status === 401) {
      router.push('/admin/login')
      return
    }
    const body = await res.json()
    setDuties(body.duties ?? [])
  }, [router])

  useEffect(() => {
    loadComments()
    loadDuties()
  }, [loadComments, loadDuties])

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  if (!authChecked || !comments || !duties) {
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        <PortalNav />
        <div className="pt-32 px-8 text-sm" style={{ color: C.textMuted }}>
          Loading…
        </div>
      </div>
    )
  }

  const visible = comments.filter(c => (filter === 'all' || c.status === filter) && matchesQuery(c, query))
  const counts = {
    pending: comments.filter(c => c.status === 'pending').length,
    accepted: comments.filter(c => c.status === 'accepted').length,
    returned: comments.filter(c => c.status === 'returned').length,
  }

  const visibleDuties = duties.filter(
    d => (dutyFilter === 'all' || d.status === dutyFilter) && matchesDutyQuery(d, query)
  )
  const dutyCounts = {
    pending: duties.filter(d => d.status === 'pending').length,
    final: duties.filter(d => d.status === 'final').length,
    rejected: duties.filter(d => d.status === 'rejected').length,
  }

  return (
    <div className="min-h-screen" style={{ background: C.bg }}>
      <PortalNav />

      <div className="pt-28 pb-10 px-8" style={{ background: C.heroBg }}>
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            HRDD Review Dashboard
          </p>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex gap-2">
              <button
                onClick={() => { setView('comments'); setQuery('') }}
                className="text-sm font-black uppercase tracking-wide px-4 py-2 rounded-lg"
                style={{ background: view === 'comments' ? C.navy : C.subtleBg, color: view === 'comments' ? C.white : C.text }}
              >
                💬 Comments
              </button>
              <button
                onClick={() => { setView('duties'); setQuery('') }}
                className="text-sm font-black uppercase tracking-wide px-4 py-2 rounded-lg"
                style={{ background: view === 'duties' ? C.navy : C.subtleBg, color: view === 'duties' ? C.white : C.text }}
              >
                📋 Duties
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs font-bold uppercase tracking-wide underline"
              style={{ color: C.textMuted }}
            >
              Sign out
            </button>
          </div>

          {view === 'comments' ? (
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
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: C.navy, color: C.white }}>
                {dutyCounts.pending} Pending
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: 'rgba(22,163,74,0.12)', color: '#16a34a' }}>
                {dutyCounts.final} Final
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold" style={{ background: C.subtleBg, color: C.text }}>
                {dutyCounts.rejected} Rejected
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-8 pt-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          {view === 'comments' ? (
            <div className="flex gap-2">
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
          ) : (
            <div className="flex gap-2">
              {(['pending', 'final', 'rejected', 'all'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setDutyFilter(f)}
                  className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg"
                  style={{
                    background: dutyFilter === f ? C.orange : C.subtleBg,
                    color: dutyFilter === f ? C.white : C.textMuted,
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
          <div className="relative flex-1 min-w-[220px]">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none"
              style={{ color: C.textMuted }}
              aria-hidden="true"
            >
              🔍
            </span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={
                view === 'comments'
                  ? 'Search by division, competency, position, author, or comment text…'
                  : 'Search by division, position, competency, or duties text…'
              }
              className="w-full text-sm rounded-lg pl-9 pr-9 py-2 outline-none"
              style={{ background: C.card, border: `1px solid ${C.borderMuted}`, color: C.text }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm font-bold w-5 h-5 rounded-full flex items-center justify-center hover:opacity-70"
                style={{ color: C.textMuted, background: C.subtleBg }}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-8 pb-24 pt-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {view === 'comments' ? (
            <>
              {visible.length === 0 && (
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {query.trim()
                    ? `No ${filter !== 'all' ? filter + ' ' : ''}comments match "${query.trim()}".`
                    : `No ${filter !== 'all' ? filter : ''} comments.`}
                </p>
              )}
              {visible.map(c => (
                <CommentCard key={c.id} comment={c} C={C} onChanged={loadComments} />
              ))}
            </>
          ) : (
            <>
              {visibleDuties.length === 0 && (
                <p className="text-sm" style={{ color: C.textMuted }}>
                  {query.trim()
                    ? `No ${dutyFilter !== 'all' ? dutyFilter + ' ' : ''}entries match "${query.trim()}".`
                    : `No ${dutyFilter !== 'all' ? dutyFilter : ''} entries.`}
                </p>
              )}
              {visibleDuties.map(d => (
                <DutyCard key={d.id} duty={d} C={C} onChanged={loadDuties} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function DutyCard({
  duty,
  C,
  onChanged,
}: {
  duty: Duty
  C: ReturnType<typeof useTechColors>
  onChanged: () => void
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const division = getDivisionByCode(duty.division_code)

  const statusColor =
    duty.status === 'final' ? '#16a34a' : duty.status === 'rejected' ? '#b35c00' : C.orange

  async function act(action: 'finalize' | 'reject') {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch(`/api/admin/duties/${duty.id}/${action}`, { method: 'POST' })
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
            {duty.division_code} · Position: {positionTitle(duty.division_code, duty.position_index)}
          </p>
          <h3 className="font-bold text-base" style={{ color: C.text }}>
            {duty.competency_name}
          </h3>
          <p className="text-xs" style={{ color: C.textMuted }}>
            {division?.office} · {new Date(duty.created_at).toLocaleString()}
          </p>
        </div>
        <span
          className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md flex-shrink-0"
          style={{ background: C.subtleBg, color: statusColor }}
        >
          {duty.status}
        </span>
      </div>

      <div className="rounded-lg p-3" style={{ background: C.subtleBg }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: C.textMuted }}>
          Duties &amp; Responsibilities
        </p>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          {duty.duties_text}
        </p>
      </div>

      {error && (
        <p className="text-sm" style={{ color: '#e05252' }}>
          {error}
        </p>
      )}

      {duty.status === 'pending' && (
        <div className="flex gap-2">
          <button
            onClick={() => act('finalize')}
            disabled={busy}
            aria-label="Mark as final"
            title="Mark as final"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-black disabled:opacity-50"
            style={{ background: 'rgba(22,163,74,0.12)', color: '#16a34a', border: '1px solid rgba(22,163,74,0.4)' }}
          >
            ✓
          </button>
          <button
            onClick={() => act('reject')}
            disabled={busy}
            aria-label="Reject entry"
            title="Reject entry"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-black disabled:opacity-50"
            style={{ background: 'rgba(179,92,0,0.10)', color: '#b35c00', border: '1px solid rgba(179,92,0,0.4)' }}
          >
            ✕
          </button>
        </div>
      )}
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
