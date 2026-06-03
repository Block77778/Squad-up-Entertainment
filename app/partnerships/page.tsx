import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { TypingText } from '@/components/typing-text'

export const metadata = {
  title: 'Partnerships - Squad Up Gaming',
  description: 'Discover our partner brands and exclusive discounts available to Squad Up members',
}

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_REV = 'linear-gradient(to right, #10B981, #8B5CF6)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

export default function Partnerships() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 via-transparent to-background pointer-events-none" />
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span
              className="text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full border text-white"
              style={{ background: GRADIENT_BG, borderColor: 'rgba(139,92,246,0.4)' }}
            >
              OUR PARTNERS
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-4 leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
            <TypingText text="Strategic Partnerships" typingSpeed={60} wordDelay={100} />
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Exclusive benefits and discounts for Squad Up members through our trusted partner network.
          </p>
        </div>
      </div>

      {/* Partners Section — tighter gap to hero */}
      <section className="pt-4 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* TerryToto Partnership Card */}
          <Card border="subtle" className="mb-8 hover-lift group relative overflow-hidden">

            {/* Claw / dark bg image */}
            <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ zIndex: 0 }}>
              <Image
                src="/WhatsApp_Image_2026-06-01_at_6_22_07_PM.jpeg"
                alt=""
                fill
                className="object-cover rounded-lg"
                style={{ opacity: 0.12 }}
              />
              <div className="absolute inset-0 bg-black/55 rounded-lg" />
              <div className="absolute inset-0 rounded-lg" style={{ background: GRADIENT_BG }} />
            </div>

            {/* ── MOBILE layout: stacked ── */}
            <div className="relative z-10 flex flex-col md:hidden">
              {/* Content on top */}
              <div className="p-6">
                <MobileContent />
              </div>
              {/* CEO centred below content, no absolute overlap */}
              <div className="flex flex-col items-center pb-0">
                {/* CEO label */}
                <span
                  className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full text-white font-bold mb-3"
                  style={{ background: GRADIENT, boxShadow: '0 2px 12px rgba(139,92,246,0.4)' }}
                >
                  Squad Up CEO
                </span>
                {/* Speech bubble */}
                <div className="relative w-60 mb-2">
                  <div
                    className="relative bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl text-xs font-semibold text-center border-2"
                    style={{ borderColor: '#8B5CF6', filter: 'drop-shadow(0 4px 16px rgba(139,92,246,0.35))' }}
                  >
                    <span className="leading-snug block">
                      "Hey, if you want some cool NFTs like mine head over to{' '}
                      <span className="text-violet-600 font-bold">Terry Toto</span> site."
                    </span>
                    {/* tail pointing down */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-0 h-0"
                      style={{ borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderTop:'12px solid #8B5CF6' }} />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0"
                      style={{ borderLeft:'9px solid transparent', borderRight:'9px solid transparent', borderTop:'11px solid white' }} />
                  </div>
                </div>
                {/* Avatar */}
                <div
                  className="relative w-72 h-[380px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  style={{ filter: 'drop-shadow(0 12px 40px rgba(139,92,246,0.45))' }}
                >
                  <Image src="/squad-up-owner-avatar.png" alt="Squad Up Gaming CEO" fill className="object-contain object-bottom" />
                </div>
              </div>
            </div>

            {/* ── DESKTOP layout: avatar left, content right ── */}
            <div className="relative z-10 hidden md:flex flex-row items-stretch min-h-[560px]">

              {/* LEFT: CEO column — in-flow flex, no absolute for label/bubble */}
              <div className="relative w-96 flex-shrink-0 flex flex-col items-center overflow-hidden">
                {/* radial glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)' }} />

                {/* Spacer pushes label+bubble+avatar to bottom */}
                <div className="flex-1" />

                {/* CEO label — in flow */}
                <div className="flex justify-center z-20 mb-3">
                  <span
                    className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full text-white font-bold"
                    style={{ background: GRADIENT, boxShadow: '0 2px 12px rgba(139,92,246,0.4)' }}
                  >
                    Squad Up CEO
                  </span>
                </div>

                {/* Speech bubble — in flow, directly above avatar */}
                <div className="flex justify-center z-20 w-60 mb-2">
                  <div
                    className="relative w-full bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl text-xs font-semibold text-center border-2"
                    style={{ borderColor: '#8B5CF6', filter: 'drop-shadow(0 4px 16px rgba(139,92,246,0.35))' }}
                  >
                    <span className="leading-snug block">
                      "Hey, if you want some cool NFTs like mine head over to{' '}
                      <span className="text-violet-600 font-bold">Terry Toto</span> site."
                    </span>
                    {/* tail pointing down */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-0 h-0"
                      style={{ borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderTop:'12px solid #8B5CF6' }} />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0"
                      style={{ borderLeft:'9px solid transparent', borderRight:'9px solid transparent', borderTop:'11px solid white' }} />
                  </div>
                </div>

                {/* Avatar */}
                <div
                  className="relative w-80 h-[500px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  style={{ filter: 'drop-shadow(0 12px 40px rgba(139,92,246,0.45))' }}
                >
                  <Image src="/squad-up-owner-avatar.png" alt="Squad Up Gaming CEO" fill className="object-contain object-bottom" />
                </div>
              </div>

              {/* RIGHT: content */}
              <div className="flex-1 p-8 flex flex-col justify-between border-l border-white/10">
                <DesktopContent />
              </div>
            </div>
          </Card>

          {/* More Partners */}
          <Card border="subtle" className="p-8 hover-lift flex items-center justify-center min-h-[180px]">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>More Partners Coming Soon</h2>
              <p className="text-text-secondary mb-6">
                We're constantly expanding our partnership network to bring you the best deals and exclusive offers from top gaming brands.
              </p>
              <button
                className="px-8 py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider border border-white/20 hover:opacity-90 transition-opacity"
                style={{ background: GRADIENT_BG }}
              >
                Stay Tuned
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold bg-clip-text text-transparent mb-4" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>Why Partner With Squad Up?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our community of dedicated gamers represents a premium target audience for brands in the gaming and esports space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '10K+', label: 'Active Members', desc: 'Engaged and competitive gamers across all platforms' },
              { stat: '24/7', label: 'Community', desc: 'Always active with tournaments, streams, and engagement' },
              { stat: 'Global', label: 'Reach', desc: 'Connect with gamers from around the world' },
            ].map(({ stat, label, desc }) => (
              <Card key={label} border="subtle" className="p-6 text-center relative overflow-hidden group hover-lift">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" style={{ background: GRADIENT_BG }} />
                <div className="text-4xl mb-4 font-black bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
                  {stat}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{label}</h3>
                <p className="text-text-muted text-sm">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

/* ─── Shared content components ─── */

function ContentBody() {
  const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
  const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

  return (
    <>
      <div className="mb-6">
        <h2 className="text-4xl font-serif font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>TerryToto.com</h2>
        <span
          className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full text-white font-bold"
          style={{ background: GRADIENT }}
        >
          Featured Partner
        </span>
      </div>

      <p className="text-text-secondary mb-6 leading-relaxed">
        TerryToto.com is a full ecosystem spanning{' '}
        <strong className="text-white">gaming, music, NFTs, digital collectibles</strong>, and much more.
        As a valued Squad Up member, you unlock exclusive access to everything across their entire universe of products and experiences.
      </p>

      {/* Ecosystem tags — centred */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['🎮 Gaming', '🎵 Music', '🖼️ NFTs', '🏆 Collectibles', '🌐 And More'].map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1 rounded-full text-white border border-white/20"
            style={{ background: GRADIENT_BG }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6 mb-6">
        <h3 className="text-sm font-mono uppercase tracking-widest text-gray-300 mb-3">Member Benefits</h3>
        <ul className="space-y-2 text-text-secondary mb-6">
          {[
            'Exclusive discounts across gaming, music & NFT drops on TerryToto.com',
            'Special promotional offers for Squad Up members across all verticals',
            'Early access to new drops, launches, and ecosystem releases',
            'Priority customer support across the full TerryToto platform',
          ].map((item) => (
            <li key={item} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: GRADIENT }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Passport CTA */}
        <div
          className="rounded-xl p-5 mb-6 border border-violet-500/30 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(16,185,129,0.12) 100%)' }}
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🛂</span>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Claim Your Free Totonian Gamer Passport</h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                Gamers in our community can now claim a free Totonian Passport NFT through Terry Toto. Your Passport unlocks exclusive discounts, partner perks, and access to future opportunities inside the Totonia ecosystem — including gaming-related rewards, digital collectibles, community events, and special offers.
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-xs leading-relaxed mb-4 pl-9">
            This is more than a free NFT. It is your access badge into Totonia's growing world of gaming, culture, digital ownership, and community rewards. Claim your free Totonian Gamer Passport today and start unlocking your perks.
          </p>
          <div className="pl-9">
            <Link href="https://terrytoto.com/citizenship/" target="_blank" rel="noopener noreferrer">
              <button
                className="px-6 py-2 rounded-lg font-bold text-white text-xs uppercase tracking-wider transition-opacity hover:opacity-90"
                style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
              >
                🎫 Claim Free Passport →
              </button>
            </Link>
          </div>
        </div>

        <div
          className="rounded-lg p-4 mb-6 border border-white/10"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(16,185,129,0.08) 100%)' }}
        >
          <p className="text-sm text-white/80 font-mono">
            <span className="block font-bold mb-1 text-white">How It Works:</span>
            When you shop or participate on TerryToto.com, simply use your Squad Up account email to receive exclusive member discounts automatically applied across their entire ecosystem.
          </p>
        </div>
      </div>
    </>
  )
}

function MobileContent() {
  const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
  return (
    <div>
      <ContentBody />
      <Link href="https://terrytoto.com" target="_blank" rel="noopener noreferrer">
        <button
          className="w-full py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
        >
          Visit TerryToto.com
        </button>
      </Link>
    </div>
  )
}

function DesktopContent() {
  const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
  return (
    <div className="flex flex-col h-full justify-between">
      <ContentBody />
      <Link href="https://terrytoto.com" target="_blank" rel="noopener noreferrer">
        <button
          className="w-full md:w-auto px-10 py-3 rounded-lg font-bold text-white text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
        >
          Visit TerryToto.com
        </button>
      </Link>
    </div>
  )
}
