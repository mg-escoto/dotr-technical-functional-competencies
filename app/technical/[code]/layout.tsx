import type { Metadata } from 'next'
import { getDivisionByCode } from '@/lib/data/technicalCompetencies'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>
}): Promise<Metadata> {
  const { code } = await params
  const division = getDivisionByCode(decodeURIComponent(code))
  return { title: division ? division.name : 'Division not found' }
}

export default function DivisionLayout({ children }: { children: React.ReactNode }) {
  return children
}
