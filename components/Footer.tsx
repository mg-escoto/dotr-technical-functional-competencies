'use client'

import { useTechColors } from '@/lib/techColors'

type RefItem = string | { text: string; url: string }

const REFERENCE_TIERS: { label: string; items: RefItem[] }[] = [
  {
    label: 'Primary References',
    items: [
      'Civil Service Commission (CSC) Memorandum Circular (MC) No. 24, s. 2016 - Program to Institutionalize Meritocracy and Excellence in Human Resource Management (PRIME-HRM) Enhanced Maturity Level Indicators',
      'Civil Service Commission (CSC) Resolution No. 2600005 - Guidelines on the Development of Agency Competency-Based Human Resource Management System',
      {
        text: 'Civil Service Commission (CSC), A Guidebook on Competency Modelling and Profiling (2016)',
        url: 'https://www.csc.gov.ph/phocadownload/userupload/hrpso/guidebook/Guidebook%20on%20Competency%20Modelling.pdf',
      },
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
            {tier.items.map((item, i) => (
              <span key={i}>
                {typeof item === 'string' ? (
                  item
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                    style={{ color: C.textMuted }}
                  >
                    {item.text}
                  </a>
                )}
                {i < tier.items.length - 1 ? '; ' : ''}
              </span>
            ))}
          </p>
        ))}
      </div>
    </footer>
  )
}
