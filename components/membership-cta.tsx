'use client'

import Link from 'next/link'

interface Props {
  tier: string
  ctaText: string
  ctaHref: string
  ctaStyle: React.CSSProperties
  textColor?: string
}

export function MembershipCTA({ tier, ctaText, ctaHref, ctaStyle, textColor }: Props) {
  return (
    <Link
      href={ctaHref}
      className="block w-full text-center font-mono uppercase tracking-widest text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
      style={{ color: textColor || 'white', ...ctaStyle }}
    >
      {ctaText}
    </Link>
  )
}
