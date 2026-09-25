'use client'

import { useTechColors } from '@/lib/techColors'

const REFERENCE_TIERS = [
  {
    label: 'Primary Legal Basis',
    items: [
      'Civil Service Commission (CSC) Memorandum Circular (MC) No. 24, s. 2016',
      'Civil Service Commission (CSC) Resolution No. 2600005 - Guidelines Development of Agency Competency-Based Human Resource Management System',
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
    <footer className="px-8 py-8" style={{ background: C.card, borderTop: `1px solid ${C.borderMuted}` }}>
      <div className="max-w-6xl mx-auto space-y-5">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: C.textMuted }}>
          References
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REFERENCE_TIERS.map(tier => (
            <div key={tier.label} className="space-y-1.5">
              <p className="text-xs font-bold" style={{ color: C.text }}>
                {tier.label}
              </p>
              {tier.items.map(item => (
                <p key={item} className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
