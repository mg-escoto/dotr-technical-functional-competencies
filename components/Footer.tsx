'use client'

import { useTechColors } from '@/lib/techColors'

const REFERENCES = [
  'CSC MC 24 2016',
  'CSC Resolution No. 2600005 - Guidelines Development of Agency Competency-Based Human Resource Management System',
  'Department of Transportation · Competency Framework, 2021',
  'Validation Reports from Offices/Services/Divisions (O/S/Ds)',
  'DOTr Government Optimization Program (GOP) Reports',
  'Strategic Performance Management System (SPMS) Documents (Department Performance Commitment and Review (DPCR)/Individual Performance Commitment and Review (IPCR))',
]

export default function Footer() {
  const C = useTechColors()

  return (
    <footer className="px-8 py-8" style={{ background: C.card, borderTop: `1px solid ${C.borderMuted}` }}>
      <div className="max-w-6xl mx-auto space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textMuted }}>
          References
        </p>
        <ul className="text-xs leading-relaxed space-y-1 list-disc pl-4" style={{ color: C.textMuted }}>
          {REFERENCES.map(ref => (
            <li key={ref}>{ref}</li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
