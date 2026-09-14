import 'server-only'
import { createClient } from '@supabase/supabase-js'

// Service-role client — full read/write access, server-only. Never import this
// from a Client Component; all comment/review operations go through API routes.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceRoleKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set')
  }
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  })
}
