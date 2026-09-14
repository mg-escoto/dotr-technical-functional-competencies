'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PortalNav from '@/components/PortalNav'
import { useTechColors } from '@/lib/techColors'

export default function AdminLoginPage() {
  const C = useTechColors()
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setError(body.error ?? 'Login failed.')
        return
      }
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8" style={{ background: C.bg }}>
      <PortalNav />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl p-8 space-y-5"
        style={{ background: C.card, border: `1px solid ${C.borderMuted}` }}
      >
        <div className="space-y-1.5">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.orange }}>
            HRDD Review Dashboard
          </p>
          <h1 className="font-black text-xl" style={{ color: C.text }}>
            Admin Sign-In
          </h1>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wide" style={{ color: C.textMuted }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded-lg px-3 py-2 text-sm"
            style={{ background: C.bg, border: `1px solid ${C.borderMuted}`, color: C.text }}
            autoFocus
          />
        </div>
        {error && (
          <p className="text-sm" style={{ color: '#e05252' }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading || !password}
          className="w-full rounded-lg px-4 py-2.5 text-sm font-bold tracking-wide disabled:opacity-50"
          style={{ background: C.orange, color: C.white }}
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
