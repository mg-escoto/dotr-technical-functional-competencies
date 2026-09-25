function base(children: React.ReactNode) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

export function IconCore() {
  return base(
    <>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  )
}

export function IconLeadership() {
  return base(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 5-5 2 2-5 5-2z" />
    </>
  )
}

export function IconTechnical() {
  return base(
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  )
}

export function IconKnowledge() {
  return base(
    <>
      <path d="M4 5c2-1 5-1 8 1 3-2 6-2 8-1v13c-2-1-5-1-8 1-3-2-6-2-8-1V5z" />
      <path d="M12 6v13" />
    </>
  )
}

export function IconSkills() {
  return base(<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />)
}

export function IconAttitudes() {
  return base(
    <path d="M12 20s-7-4.4-9.5-9C1 8 2 4.5 5.5 4c2-.3 4 1 6.5 3.5C14.5 5 16.5 3.7 18.5 4c3.5.5 4.5 4 3 7-2.5 4.6-9.5 9-9.5 9z" />
  )
}
