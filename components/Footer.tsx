'use client'

import { useTechColors } from '@/lib/techColors'

const REFERENCE_TIERS = [
  {
    label: 'Primary Legal Basis',
    items: [
      'Civil Service Commission (CSC) Memorandum Circular (MC) No. 24, s. 2016',
      'Civil Service Commission (CSC) Resolution No. 2600005 - Guidelines on the Development of Agency Competency-Based Human Resource Management System',
    ],
  },
  {
    label: 'Supporting Documents',
    items: [
      'Department of Transportation · Competency Framework, 2021',
      'Validation Reports from Offices/Services/Divisions (O/S/Ds)',
      'DOTr Government Optimization Program (GOP) Reports',
      'Strategic Performance Management System (SPMS) Documents (Department Performance Commitment and Review (DPCR)/Individual Performance Commitment and Review (IPCR))',
    ],
  },
]

export default function Footer() {
  const C = useTechColors()

  return (
    <footer className="px-8 py-6" style={{ background: C.card, borderTop: `1px solid ${C.borderMuted}` }}>
      <div className="max-w-6xl mx-auto space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.textMuted }}>
          References
        </p>
        {REFERENCE_TIERS.map(tier => (
          <p key={tier.label} className="text-[10px] leading-relaxed" style={{ color: C.textMuted }}>
            <span className="font-bold" style={{ color: C.text }}>
              {tier.label}:{' '}
            </span>
            {tier.items.join('; ')}
          </p>
        ))}
      </div>
    </footer>
  )
}
