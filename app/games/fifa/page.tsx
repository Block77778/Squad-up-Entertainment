import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { StatBar } from '@/components/stat-bar'
import { TypingText } from '@/components/typing-text'

export const metadata = {
  title: 'FIFA - Squad Up Gaming',
  description: 'Compete in Squad Up FIFA tournaments. Join the Global Cup and prove you are the best player in the world.',
}

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

const stats = [
  { value: '512', label: 'Competitors', accent: 'purple' as const },
  { value: '$60K', label: 'Prize Pool', accent: 'teal' as const },
  { value: '12', label: 'Rounds', accent: 'gold' as const },
  { value: '5.2K', label: 'Avg Viewers', accent: 'purple' as const },
]

const tournament = {
  name: 'Squad Up Global Cup',
  prize: '$60,000',
  format: 'Single Elimination',
  platform: 'PS5 / Xbox Series X / PC',
  startDate: 'Rolling — new brackets weekly',
  teamSize: '1v1 & 2v2 formats',
}

const features = [
  {
    icon: '⚽',
    title: 'Global Cup',
    desc: 'Weekly open tournaments. Any skill level can enter — brackets fill fast so register early.',
  },
  {
    icon: '🏆',
    title: '$60K Prize Pool',
    desc: 'Cash prizes distributed across placement tiers. Top 8 finishers guaranteed a payout.',
  },
  {
    icon: '🎮',
    title: 'All Platforms',
    desc: 'PS5, Xbox Series X, and PC cross-play brackets. Play on your preferred platform.',
  },
  {
    icon: '📊',
    title: 'Live Leaderboard',
    desc: 'Track your rank in real time. Stats, match history, and head-to-head records all tracked.',
  },
  {
    icon: '🔴',
    title: 'Streamed Live',
    desc: 'Top matches broadcast on Squad Stream with full commentary and replays.',
  },
  {
    icon: '🤝',
    title: 'Squad Mode',
    desc: '2v2 co-op bracket available. Team up with a friend and dominate the pitch together.',
  },
]

const schedule = [
  { round: 'Open Registration', date: 'Every Monday', status: 'open' },
  { round: 'Group Stage', date: 'Tuesday – Wednesday', status: 'upcoming' },
  { round: 'Round of 32', date: 'Thursday', status: 'upcoming' },
  { round: 'Quarter Finals', date: 'Friday', status: 'upcoming' },
  { round: 'Semi Finals', date: 'Saturday', status: 'upcoming' },
  { round: 'Grand Final', date: 'Sunday (Live Streamed)', status: 'final' },
]

const prizes = [
  { place: '🥇 1st Place', amount: '$25,000', color: '#FFD700' },
  { place: '🥈 2nd Place', amount: '$12,000', color: '#C0C0C0' },
  { place: '🥉 3rd Place', amount: '$7,000', color: '#cd7f32' },
  { place: '4th Place', amount: '$4,000', color: '#a78bfa' },
  { place: 'Top 8', amount: '$1,500 each', color: '#34d399' },
  { place: 'Top 16', amount: '$500 each', color: '#9ca3af' },
]

export default function FifaPage() {
  return (
    <Layout>

      {/* Hero */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0f1a 0%, #0d1a0d 50%, #0a0f1a 100%)' }}>
          {/* Green pitch lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-400" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-emerald-400" />
            <div className="absolute top-0 bottom-0 left-0 w-1/4 border-r border-emerald-400 opacity-50" />
            <div className="absolute top-0 bottom-0 right-0 w-1/4 border-l border-emerald-400 opacity-50" />
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, rgba(0,0,0,0.6) 70%)' }} />
        </div>

        <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-500/40 text-xs font-mono uppercase tracking-widest text-emerald-400"
            style={{ background: 'rgba(16,185,129,0.08)' }}>
            ⚽ Now Recruiting
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-black mb-4 leading-none bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #a78bfa, #34d399)' }}>
            <TypingText text="FIFA" typingSpeed={80} wordDelay={100} />
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
            Squad Up Global Cup
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            The world's most popular football game meets Squad Up's competitive platform. Weekly tournaments, massive prize pools, all skill levels welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up"
              className="inline-block font-mono uppercase tracking-widest text-white text-sm px-10 py-4 rounded-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: GRADIENT, boxShadow: '0 4px 24px rgba(139,92,246,0.5)' }}>
              Register Now
            </Link>
            <Link href="/contests"
              className="inline-block font-mono uppercase tracking-widest text-white text-sm px-10 py-4 rounded-lg font-bold transition-all hover:opacity-90 border border-white/20"
              style={{ background: GRADIENT_BG }}>
              View All Contests
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8 border-y border-white/10" style={{ background: GRADIENT_BG }}>
        <div className="max-w-7xl mx-auto">
          <StatBar stats={stats} />
        </div>
      </section>

      {/* Tournament Info + Prize Breakdown */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Tournament Details */}
            <Card border="subtle" className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 bg-clip-text text-transparent"
                style={{ backgroundImage: GRADIENT }}>
                Tournament Details
              </h2>
              <ul className="space-y-4">
                {Object.entries(tournament).map(([key, val]) => (
                  <li key={key} className="flex items-start justify-between gap-4 pb-4 border-b border-white/5 last:border-0">
                    <span className="text-xs font-mono uppercase tracking-widest text-text-muted capitalize flex-shrink-0">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-white text-sm text-right">{val}</span>
                  </li>
                ))}
              </ul>
              <Link href="/sign-up"
                className="mt-8 block w-full text-center font-mono uppercase tracking-widest text-white text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90"
                style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
                Join Tournament →
              </Link>
            </Card>

            {/* Prize Breakdown */}
            <Card border="subtle" className="p-8">
              <h2 className="text-3xl font-serif font-bold mb-6 bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #10B981, #8B5CF6)' }}>
                Prize Breakdown
              </h2>
              <ul className="space-y-3">
                {prizes.map((p) => (
                  <li key={p.place}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${p.color}20` }}>
                    <span className="text-sm text-text-secondary">{p.place}</span>
                    <span className="font-black font-mono text-lg" style={{ color: p.color }}>{p.amount}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Weekly Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center bg-clip-text text-transparent"
              style={{ backgroundImage: GRADIENT }}>
              Weekly Schedule
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {schedule.map((s, i) => (
                <div key={s.round}
                  className="p-4 rounded-xl text-center relative overflow-hidden"
                  style={{
                    background: s.status === 'final' ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))' : GRADIENT_BG,
                    border: s.status === 'open' ? '1px solid rgba(16,185,129,0.5)' : s.status === 'final' ? '1px solid rgba(255,215,0,0.4)' : '1px solid rgba(255,255,255,0.08)',
                  }}>
                  <div className="text-2xl font-black font-mono mb-1"
                    style={{ color: s.status === 'open' ? '#34d399' : s.status === 'final' ? '#FFD700' : 'rgba(255,255,255,0.4)' }}>
                    {i + 1}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{s.round}</div>
                  <div className="text-xs text-text-muted font-mono">{s.date}</div>
                  {s.status === 'open' && (
                    <div className="mt-2 text-xs font-mono uppercase tracking-widest text-emerald-400">● Open</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT }}>
            Why Compete on Squad Up?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Card key={f.title} border="subtle" className="p-6 hover-lift group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Card border="subtle" className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none rounded-xl" style={{ background: GRADIENT_BG }} />
            <div className="relative z-10">
              <div className="text-5xl mb-4">⚽</div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 bg-clip-text text-transparent"
                style={{ backgroundImage: GRADIENT }}>
                Ready to Play?
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8">
                Create your free account and enter the next available bracket. New tournaments open every Monday — don't miss your spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/sign-up"
                  className="inline-block font-mono uppercase tracking-widest text-white text-sm px-10 py-4 rounded-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: GRADIENT, boxShadow: '0 4px 24px rgba(139,92,246,0.4)' }}>
                  Create Free Account
                </Link>
                <Link href="/membership"
                  className="inline-block font-mono uppercase tracking-widest text-white text-sm px-10 py-4 rounded-lg font-bold transition-all hover:opacity-90 border border-white/20"
                  style={{ background: GRADIENT_BG }}>
                  View Membership Perks
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </Layout>
  )
}
