'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/layout'
import { ImageCarousel } from '@/components/image-carousel'
import { TypingText } from '@/components/typing-text'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { FeatureGrid } from '@/components/feature-grid'
import { StatBar } from '@/components/stat-bar'

export default function Home() {
  const router = useRouter()

  const platformTiles = [
    {
      title: 'Squad Stream',
      href: '/squad-stream',
      description: 'Live tournaments, streams, and community moments',
      icon: '🎬',
      color: 'purple',
    },
    {
      title: 'Squad Tracks',
      href: '/squad-tracks',
      description: 'Discover and share gaming music from our creators',
      icon: '🎵',
      color: 'teal',
    },
    {
      title: 'Contests',
      href: '/contests',
      description: 'Compete for prizes and climb the leaderboards',
      icon: '🏆',
      color: 'gold',
    },
  ]
  
  const stats = [
    { value: '10K+', label: 'Members', accent: 'purple' as const },
    { value: '$500K', label: 'Prize Pool', accent: 'teal' as const },
    { value: '50+', label: 'Tournaments', accent: 'gold' as const },
    { value: '24/7', label: 'Live Streams', accent: 'purple' as const },
  ]
  
  const gameWeekCards = [
    {
      game: 'Madden 25',
      href: '/games/madden',
      tournament: 'NFL Championship',
      prize: '$50K',
      participants: '256',
    },
    {
      game: 'Call of Duty',
      href: '/games/cod',
      tournament: 'Global Clash',
      prize: '$75K',
      participants: '512',
    },
    {
      game: 'NBA 2K',
      href: '/games/nba-2k',
      tournament: 'Pro Circuit',
      prize: '$100K',
      participants: '1024',
    },
    {
      game: 'FIFA',
      href: '/games/fifa',
      tournament: 'Global Cup',
      prize: '$60K',
      participants: '512',
    },
  ]

  const carouselImages = [
    { src: '/squad-up-gang.jpeg', alt: 'Squad Up Gang - Level Up Together', objectPosition: 'center top' },
  ]

  return (
    <Layout>
      {/* Hero Section with Game Image Carousel */}
      <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <ImageCarousel 
          images={carouselImages}
          interval={4000}
          autoPlay={true}
          className="absolute inset-0"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 pointer-events-none" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-8xl font-serif font-black mb-6 leading-tight tracking-tighter uppercase bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
            <TypingText text="Level Up Your Gaming" typingSpeed={60} wordDelay={100} />
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Join Squad Up - Where Gamers Compete, Stream, and Connect
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Join Now
              </Button>
            </Link>
            <Link href="/squad-stream">
              <Button variant="outline" size="lg">
                Watch Live
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Platform Overview Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="purple" className="mb-4">OUR PLATFORM</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-pretty leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
              Everything for the Competitive Gamer
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From streaming and tournaments to music discovery and token rewards, Squad Up is your all-in-one gaming ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformTiles.map((tile, idx) => (
              <Card
                key={tile.title}
                border="subtle"
                className="p-8 text-center group cursor-pointer animate-slide-up hover-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:animate-float transition-all duration-300">
                  {tile.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-glow-purple transition-all">
                  {tile.title}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {tile.description}
                </p>
                <Link href={tile.href}>
                  <Button variant="ghost" size="sm" className="group-hover:text-gray-300">
                    Explore →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Squad Up Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="teal" className="mb-4">WHY SQUAD UP</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-pretty bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
              Built for Gamers, by Gamers
            </h2>
          </div>

          <FeatureGrid
            columns={3}
            items={[
              {
                title: 'Competitive Tournaments',
                description: 'Daily tournaments across all major gaming titles with real prize pools and leaderboards.',
                color: 'purple',
              },
              {
                title: 'Live Streaming Hub',
                description: 'Stream your gameplay, watch pro players, and engage with millions of viewers in real-time.',
                color: 'teal',
              },
              {
                title: 'Creator Economy',
                description: 'Monetize your content, earn tokens, and build your community with exclusive rewards.',
                color: 'gold',
              },
              {
                title: 'Music Discovery',
                description: 'Discover gaming soundtracks and independent artists curated for competitive gaming.',
                color: 'purple',
              },
              {
                title: 'Crypto Rewards',
                description: 'Earn cryptocurrency tokens for competing, streaming, and building your Squad network.',
                color: 'teal',
              },
              {
                title: '24/7 Community',
                description: 'Join a global community of gamers who share your passion for competition and creativity.',
                color: 'gold',
              },
            ]}
          />
        </div>
      </section>

      {/* Game of the Week Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="gold" className="mb-4">THIS WEEK</Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-pretty leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
              Games of the Week
            </h2>
            <p className="text-xl text-text-secondary">
              Premium tournaments with the highest prize pools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameWeekCards.map((card, index) => (
              <Card
                key={index}
                border="gold"
                className="p-8 border-premium-gold hover-lift relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-gold/0 rounded-lg transition-all duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <Badge variant="gold" size="md" className="mb-6">
                    FEATURED
                  </Badge>
                  <h3 className="text-3xl font-serif font-bold mb-3 text-gold-light group-hover:text-glow-gold transition-all">
                    {card.game}
                  </h3>
                  <p className="text-white mb-6 font-mono text-sm uppercase tracking-wide">
                    {card.tournament}
                  </p>
                  
                  <div className="space-y-4 mb-8 border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center hover:bg-white/5 px-3 py-2 rounded transition-all">
                      <span className="text-text-muted text-sm uppercase font-mono">Prize Pool</span>
                      <span className="text-gold-light font-bold text-lg">{card.prize}</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-white/5 px-3 py-2 rounded transition-all">
                      <span className="text-text-muted text-sm uppercase font-mono">Competitors</span>
                      <span className="text-gold-light font-bold text-lg">{card.participants}</span>
                    </div>
                  </div>
                  
                  <Link href={card.href}>
                    <Button variant="secondary" size="md" className="w-full group-hover:shadow-xl transition-all">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <StatBar stats={stats} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 md:px-8 relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 via-transparent to-teal/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float" style={{ animationDelay: '-2s' }} />
        
        <div className="max-w-3xl mx-auto text-center relative z-10 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
            Ready to Squad Up?
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Join thousands of competitive gamers competing for glory and rewards on the ultimate gaming platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button variant="primary" size="lg" glow="purple">
                Get Started Today
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
