import 'server-only'
import crypto from 'crypto'

const COOKIE_NAME = 'hrdd_session'
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12 // 12 hours

function getSecret(): string {
  const secret = process.env.HRDD_SESSION_SECRET
  if (!secret) throw new Error('HRDD_SESSION_SECRET must be set')
  return secret
}

function sign(value: string): string {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
}

export function createSessionToken(): string {
  const issuedAt = Date.now().toString()
  return `${issuedAt}.${sign(issuedAt)}`
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false
  const [issuedAt, signature] = token.split('.')
  if (!issuedAt || !signature) return false
  if (sign(issuedAt) !== signature) return false
  const ageMs = Date.now() - Number(issuedAt)
  return ageMs >= 0 && ageMs <= SESSION_MAX_AGE_SECONDS * 1000
}

export { COOKIE_NAME as ADMIN_COOKIE_NAME, SESSION_MAX_AGE_SECONDS }

export function requireAdmin(req: Request): boolean {
  const cookieHeader = req.headers.get('cookie') ?? ''
  const match = cookieHeader
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(`${COOKIE_NAME}=`))
  const token = match?.slice(COOKIE_NAME.length + 1)
  return isValidSessionToken(token)
}
