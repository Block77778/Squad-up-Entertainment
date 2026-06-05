import Link from 'next/link'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { TypingText } from '@/components/typing-text'

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_REV = 'linear-gradient(to right, #10B981, #8B5CF6)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

export const metadata = {
  title: 'Membership - Squad Up Gaming',
  description: 'Choose your Squad Up membership tier and unlock exclusive benefits',
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Get started with the basics',
    color: '#9ca3af',
    gradient: 'linear-gradient(135deg, rgba(156,163,175,0.2), rgba(156,163,175,0.05))',
    border: 'rgba(156,163,175,0.3)',
    perks: [
      { label: 'Community access', included: true },
      { label: 'Browse tournaments', included: true },
      { label: 'Squad Up profile', included: true },
      { label: 'Discord access (public channels)', included: true },
      { label: 'Priority tournament registration', included: false },
      { label: 'Exclusive member discounts', included: false },
      { label: 'Partner perks (TerryToto etc.)', included: false },
      { label: 'Crypto Squad rewards', included: false },
      { label: 'Early access to drops', included: false },
      { label: 'VIP Discord channels', included: false },
    ],
    cta: 'Sign Up Free',
    ctaHref: '/sign-up',
    ctaStyle: { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(156,163,175,0.3)' },
  },
  {
    name: 'Starter',
    price: '$4.99',
    period: 'per month',
    tagline: 'Level up your game',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.05))',
    border: 'rgba(16,185,129,0.4)',
    perks: [
      { label: 'Everything in Free', included: true },
      { label: 'Priority tournament registration', included: true },
      { label: 'Exclusive member discounts', included: true },
      { label: 'Partner perks (TerryToto etc.)', included: true },
      { label: 'Crypto Squad rewards', included: false },
      { label: 'Early access to drops', included: false },
      { label: 'VIP Discord channels', included: false },
      { label: 'Monthly prize draw entry', included: false },
      { label: 'Dedicated support', included: false },
      { label: 'Custom profile badge', included: false },
    ],
    cta: 'Get Starter',
    ctaHref: '/sign-up',
    ctaStyle: { background: 'linear-gradient(to right, #10B981, #34d399)', boxShadow: '0 4px 20px rgba(16,185,129,0.35)' },
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    tagline: 'For serious competitors',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(139,92,246,0.08))',
    border: 'rgba(139,92,246,0.5)',
    featured: true,
    badge: 'Most Popular',
    perks: [
      { label: 'Everything in Starter', included: true },
      { label: 'Crypto Squad rewards', included: true },
      { label: 'Early access to drops & launches', included: true },
      { label: 'VIP Discord channels', included: true },
      { label: 'Monthly prize draw entry', included: true },
      { label: 'Dedicated support', included: false },
      { label: 'Custom profile badge', included: false },
      { label: 'Featured on leaderboard', included: false },
      { label: 'Squad Up merch discount (20%)', included: false },
      { label: 'Exclusive NFT drops', included: false },
    ],
    cta: 'Get Pro',
    ctaHref: '/sign-up',
    ctaStyle: { background: GRADIENT, boxShadow: '0 4px 24px rgba(139,92,246,0.5)' },
  },
  {
    name: 'Elite',
    price: '$19.99',
    period: 'per month',
    tagline: 'The ultimate Squad Up experience',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.05))',
    border: 'rgba(255,215,0,0.4)',
    badge: 'Best Value',
    perks: [
      { label: 'Everything in Pro', included: true },
      { label: 'Dedicated support', included: true },
      { label: 'Custom profile badge', included: true },
      { label: 'Featured on leaderboard', included: true },
      { label: 'Squad Up merch discount (20%)', included: true },
      { label: 'Exclusive NFT drops', included: true },
      { label: 'Name in credits for events', included: true },
      { label: 'Invite to private community events', included: true },
      { label: 'Co-creator opportunities', included: true },
      { label: 'All future perks, early access', included: true },
    ],
    cta: 'Go Elite',
    ctaHref: '/sign-up',
    ctaStyle: { background: 'linear-gradient(to right, #d4a017, #FFD700)', boxShadow: '0 4px 24px rgba(255,215,0,0.35)', color: '#000' },
  },
]

const faqs = [
  {
    q: 'Can I cancel my membership anytime?',
    a: 'Yes. You can cancel at any time from your account settings. You keep your benefits until the end of your current billing period.',
  },
  {
    q: 'Can I upgrade or downgrade my tier?',
    a: 'Absolutely. You can upgrade immediately and the new benefits kick in right away. Downgrades take effect at the next billing cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit/debit cards and PayPal. Crypto payment options are coming soon for our Crypto Squad members.',
  },
  {
    q: 'Do partner perks like TerryToto discounts apply to all paid tiers?',
    a: 'Yes — all paid tiers (Starter and above) unlock exclusive partner discounts including TerryToto.com. Your Squad Up email is your key.',
  },
]

export default function Membership() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-background pointer-events-none" />
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border text-white"
              style={{ background: GRADIENT_BG, borderColor: 'rgba(139,92,246,0.4)' }}>
              Membership
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 leading-tight bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT }}>
            <TypingText text="Choose Your Tier" typingSpeed={60} wordDelay={100} />
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            From free community access to full Elite status — every tier unlocks more of the Squad Up universe.
          </p>
        </div>
      </div>

      {/* Tiers */}
      <section className="py-8 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: tier.gradient,
                  border: `1px solid ${tier.border}`,
                  boxShadow: tier.featured ? `0 0 40px rgba(139,92,246,0.2)` : 'none',
                }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full text-white font-bold whitespace-nowrap"
                      style={{ background: tier.featured ? GRADIENT : `linear-gradient(to right, ${tier.color}, ${tier.color}cc)`, color: tier.name === 'Elite' ? '#000' : 'white' }}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-serif font-bold mb-1" style={{ color: tier.color }}>
                      {tier.name}
                    </h2>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-black text-white">{tier.price}</span>
                      <span className="text-xs text-text-muted font-mono">/{tier.period}</span>
                    </div>
                    <p className="text-xs text-text-muted">{tier.tagline}</p>
                  </div>

                  {/* Perks */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk.label} className={`flex items-start gap-2 text-xs ${perk.included ? 'text-text-secondary' : 'text-white/25'}`}>
                        <span className="flex-shrink-0 mt-0.5 text-base leading-none" style={{ color: perk.included ? tier.color : 'rgba(255,255,255,0.15)' }}>
                          {perk.included ? '✓' : '✕'}
                        </span>
                        {perk.label}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={tier.ctaHref}
                    className="block w-full text-center font-mono uppercase tracking-widest text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ color: tier.name === 'Elite' ? '#000' : 'white', ...tier.ctaStyle }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison callout */}
      <section className="py-16 px-4 md:px-8 border-y border-white/10" style={{ background: GRADIENT_BG }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT }}>
            All Paid Members Get Partner Perks
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Every Starter, Pro, and Elite member unlocks exclusive discounts across our partner network — including TerryToto.com NFTs, gaming gear, and more.
          </p>
          <Link
            href="/partnerships"
            className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all hover:opacity-90 border border-violet-500/30"
            style={{ background: GRADIENT_BG }}
          >
            View All Partners →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT_REV }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl p-6 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-muted text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all hover:opacity-90"
              style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
