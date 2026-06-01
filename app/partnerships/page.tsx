import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'

export const metadata = {
  title: 'Partnerships - Squad Up Gaming',
  description: 'Discover our partner brands and exclusive discounts available to Squad Up members',
}

export default function Partnerships() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">OUR PARTNERS</Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight text-white">
            Strategic Partnerships
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Exclusive benefits and discounts for Squad Up members through our trusted partner network.
          </p>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* TerryToto Partnership Card — full width with CEO standing beside */}
          <Card border="subtle" className="mb-8 hover-lift group relative overflow-hidden">
            {/* Glowing background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none rounded-lg" />

            {/* Mobile: content on top, avatar on bottom. Desktop: avatar left, content right */}
            <div className="flex flex-col md:flex-row items-stretch min-h-[520px]">

              {/* LEFT (desktop) / BOTTOM (mobile): CEO Avatar */}
              <div className="relative md:w-96 flex-shrink-0 flex flex-col items-center justify-end overflow-hidden order-2 md:order-1">
                {/* Subtle radial glow behind the character */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
                  }}
                />

                {/* CEO Label badge — desktop only (shown above avatar) */}
                <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1">
                  <span
                    className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-gold/60 text-gold-light"
                    style={{ background: 'rgba(212,175,55,0.12)' }}
                  >
                    Squad Up CEO
                  </span>
                </div>

                {/* Speech bubble — desktop only */}
                <div className="hidden md:block absolute top-14 z-20 w-60 left-1/2 -translate-x-1/2">
                  <div
                    className="relative bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-xl text-xs font-semibold text-center border-2 border-gold"
                    style={{ filter: 'drop-shadow(0 4px 16px rgba(212,175,55,0.3))' }}
                  >
                    <span className="leading-snug block">
                      "TerryToto isn't just gaming — it's music, NFTs, and a whole lot more. Check them out!"
                    </span>
                    {/* Tail pointing down toward the character */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-0 h-0"
                      style={{
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '12px solid #D4AF37',
                      }}
                    />
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0"
                      style={{
                        borderLeft: '9px solid transparent',
                        borderRight: '9px solid transparent',
                        borderTop: '11px solid white',
                      }}
                    />
                  </div>
                </div>

                {/* Avatar — shorter on mobile so it doesn't dominate */}
                <div
                  className="relative w-72 md:w-80 h-[300px] md:h-[500px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  style={{ filter: 'drop-shadow(0 12px 40px rgba(212,175,55,0.4))' }}
                >
                  <Image
                    src="/squad-up-owner-avatar.png"
                    alt="Squad Up Gaming CEO"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* RIGHT (desktop) / TOP (mobile): Terry Toto card content */}
              <div className="flex-1 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-l border-white/10 order-1 md:order-2">
                <div>
                  <div className="mb-6">
                    <h2 className="text-4xl font-serif font-bold text-white mb-2">
                      TerryToto.com
                    </h2>
                    <Badge variant="gold" className="inline-block">
                      Featured Partner
                    </Badge>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    TerryToto.com is far more than a gaming destination — it's a full lifestyle ecosystem spanning <strong className="text-white">gaming, music, NFTs, digital collectibles</strong>, and much more. As a valued Squad Up member, you unlock exclusive access to everything across their entire universe of products and experiences.
                  </p>

                  {/* Ecosystem tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['🎮 Gaming', '🎵 Music', '🖼️ NFTs', '🏆 Collectibles', '🌐 And More'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full border border-gold/40 text-gold-light"
                        style={{ background: 'rgba(212,175,55,0.10)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4 mb-8 border-t border-white/10 pt-6">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-gray-300 mb-2">
                      Member Benefits
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 flex-shrink-0" />
                        <span>Exclusive discounts across gaming, music &amp; NFT drops on TerryToto.com</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 flex-shrink-0" />
                        <span>Special promotional offers for Squad Up members across all verticals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 flex-shrink-0" />
                        <span>Early access to new drops, launches, and ecosystem releases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2 flex-shrink-0" />
                        <span>Priority customer support across the full TerryToto platform</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gold-light font-mono">
                      <span className="block font-bold mb-1">How It Works:</span>
                      When you shop or participate on TerryToto.com, simply use your Squad Up account email to receive exclusive member discounts automatically applied across their entire ecosystem.
                    </p>
                  </div>
                </div>

                <Link href="https://terrytoto.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="md" className="w-full md:w-auto px-10">
                    Visit TerryToto.com
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Additional Partnership Opportunities */}
          <Card border="subtle" className="p-8 hover-lift flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                More Partners Coming Soon
              </h2>
              <p className="text-text-secondary mb-6">
                We're constantly expanding our partnership network to bring you the best deals and exclusive offers from top gaming brands.
              </p>
              <Button variant="outline" size="md">
                Stay Tuned
              </Button>
            </div>
          </Card>

        </div>
      </section>

      {/* Partnership Benefits Overview */}
      <section className="py-20 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Why Partner With Squad Up?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our community of dedicated gamers represents a premium target audience for brands in the gaming and esports space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card border="subtle" className="p-6 text-center">
              <div className="text-4xl mb-4">10K+</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Active Members</h3>
              <p className="text-text-muted text-sm">
                Engaged and competitive gamers across all platforms
              </p>
            </Card>

            <Card border="subtle" className="p-6 text-center">
              <div className="text-4xl mb-4">24/7</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Community</h3>
              <p className="text-text-muted text-sm">
                Always active with tournaments, streams, and engagement
              </p>
            </Card>

            <Card border="subtle" className="p-6 text-center">
              <div className="text-4xl mb-4">Global</div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Reach</h3>
              <p className="text-text-muted text-sm">
                Connect with gamers from around the world
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
