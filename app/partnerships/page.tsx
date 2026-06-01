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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TerryToto Partnership Card */}
            <Card border="subtle" className="p-8 hover-lift group relative overflow-hidden">
              {/* Glowing background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none rounded-lg" />

              {/* Owner Avatar + Speech Bubble */}
              <div className="mb-6 relative flex flex-col items-center">
                {/* Speech Bubble */}
                <div
                  className="relative z-10 mb-[-16px] bg-white text-gray-900 rounded-2xl px-5 py-3 shadow-xl text-sm font-semibold max-w-[280px] text-center border-2 border-gold"
                  style={{ filter: 'drop-shadow(0 4px 16px rgba(212,175,55,0.25))' }}
                >
                  <span className="text-base leading-snug">
                    "Hey, if you want some cool NFTs like mine head over to{' '}
                    <span className="text-amber-600 font-bold">Terry Toto</span> site."
                  </span>
                  {/* Bubble tail */}
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

                {/* Avatar */}
                <div className="relative w-56 h-72 mt-2 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <Image
                    src="/squad-up-owner-avatar.png"
                    alt="Squad Up Gaming Owner"
                    fill
                    className="object-contain object-bottom"
                    style={{ filter: 'drop-shadow(0 8px 32px rgba(212,175,55,0.35))' }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">
                  TerryToto.com
                </h2>
                <Badge variant="gold" className="inline-block">
                  Featured Partner
                </Badge>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                TerryToto.com is a premier online destination for gaming enthusiasts. As a valued Squad Up member, you get exclusive access to special discounts and offers on their products and services.
              </p>

              <div className="space-y-4 mb-8 border-t border-white/10 pt-6">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-widest text-gray-300 mb-2">
                    Member Benefits
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2" />
                      <span>Exclusive discounts on all TerryToto.com products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2" />
                      <span>Special promotional offers for Squad Up members</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2" />
                      <span>Early access to new product launches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mr-3 mt-2" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-gold-light font-mono">
                  <span className="block font-bold mb-1">How It Works:</span>
                  When you order from TerryToto.com, simply use your Squad Up account email to receive exclusive member discounts automatically applied to your purchase.
                </p>
              </div>

              <Link href="https://terrytoto.com" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md" className="w-full">
                  Visit TerryToto.com
                </Button>
              </Link>
            </Card>

            {/* Additional Partnership Opportunities */}
            <Card border="subtle" className="p-8 hover-lift flex items-center justify-center min-h-[400px]">
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
