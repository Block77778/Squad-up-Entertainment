import Link from 'next/link'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { TypingText } from '@/components/typing-text'

export const metadata = {
  title: 'Sponsorships - Squad Up Gaming',
  description: 'Partner with Squad Up Entertainment for sponsorship opportunities',
}

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

const tiers = [
  {
    name: 'Bronze',
    price: '$500/mo',
    color: '#cd7f32',
    glow: 'rgba(205,127,50,0.3)',
    perks: [
      'Logo on website footer',
      'Social media mention (1x/month)',
      'Discord sponsor badge',
      'Access to community events',
    ],
  },
  {
    name: 'Silver',
    price: '$1,500/mo',
    color: '#C0C0C0',
    glow: 'rgba(192,192,192,0.3)',
    perks: [
      'Everything in Bronze',
      'Logo on all tournament pages',
      'Monthly newsletter feature',
      'Sponsored post (2x/month)',
      'Banner ad on site',
    ],
  },
  {
    name: 'Gold',
    price: '$3,500/mo',
    featured: true,
    color: '#FFD700',
    glow: 'rgba(255,215,0,0.35)',
    perks: [
      'Everything in Silver',
      'Title sponsorship of one tournament/month',
      'Dedicated landing page on squad-up',
      'Weekly social media features',
      'In-stream banner ads',
      'Co-branded content creation',
    ],
  },
  {
    name: 'Platinum',
    price: 'Custom',
    color: '#a78bfa',
    glow: 'rgba(139,92,246,0.4)',
    perks: [
      'Everything in Gold',
      'Exclusive naming rights to a series',
      'Full content integration package',
      'Priority placement on all channels',
      'Dedicated account manager',
      'Custom activations & events',
    ],
  },
]

const stats = [
  { value: '10K+', label: 'Active Members' },
  { value: '500K+', label: 'Monthly Impressions' },
  { value: '50+', label: 'Tournaments/Year' },
  { value: '24/7', label: 'Live Engagement' },
]

export default function Sponsorship() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 via-transparent to-background pointer-events-none" />
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">SPONSORSHIPS</Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
            <TypingText text="Become a Sponsor" typingSpeed={60} wordDelay={100} />
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Partner with the leading competitive gaming platform and reach thousands of hardcore gamers.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: GRADIENT, boxShadow: '0 4px 24px rgba(139,92,246,0.4)' }}
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8 border-y border-white/10" style={{ background: GRADIENT_BG }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl md:text-4xl font-black mb-1 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
                {value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-text-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
              Sponsorship Tiers
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Choose the level that fits your brand. All tiers include access to our engaged gaming community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                border="subtle"
                className="p-6 hover-lift flex flex-col relative overflow-hidden group"
                style={tier.featured ? { boxShadow: `0 0 30px ${tier.glow}`, border: `1px solid ${tier.color}40` } : {}}
              >
                {tier.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded-full text-black font-bold" style={{ background: tier.color }}>
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold mb-1" style={{ color: tier.color }}>{tier.name}</h3>
                  <div className="text-3xl font-black text-white">{tier.price}</div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start text-sm text-text-secondary">
                      <span className="mr-2 mt-0.5 flex-shrink-0" style={{ color: tier.color }}>✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center font-mono uppercase tracking-widest text-white text-xs py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90"
                  style={{ background: tier.featured ? GRADIENT : GRADIENT_BG, border: `1px solid ${tier.color}40`, boxShadow: tier.featured ? `0 4px 20px ${tier.glow}` : 'none' }}
                >
                  Apply Now
                </Link>
              </Card>
            ))}
          </div>

          {/* Custom CTA */}
          <Card border="subtle" className="p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ background: GRADIENT_BG }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
                Need a Custom Package?
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8">
                We work with brands of all sizes. Reach out and let's build a sponsorship package tailored specifically to your goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:opacity-90 border border-white/20"
                  style={{ background: GRADIENT_BG }}
                >
                  View Partnerships
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
