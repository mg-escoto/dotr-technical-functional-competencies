import type { Metadata } from 'next'
import { getCoreCompetencyBySlug } from '@/lib/data/coreCompetencies'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const comp = getCoreCompetencyBySlug(decodeURIComponent(slug))
  return { title: comp ? comp.name : 'Competency not found' }
}

export default function CoreCompetencyLayout({ children }: { children: React.ReactNode }) {
  return children
}
