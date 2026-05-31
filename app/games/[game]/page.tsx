'use client'

import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import { FeatureGrid } from '@/components/feature-grid'
import { StatBar } from '@/components/stat-bar'
import { useParams } from 'next/navigation'

export default function GamePage() {
  const params = useParams()
  const game = params.game as string

  const gameData: Record<string, {
    title: string
    fullName: string
    description: string
    glowColor: 'purple' | 'teal' | 'gold'
    tournament: string
    prize: string
    players: string
    stats: Array<{ value: string; label: string; accent: 'purple' | 'teal' | 'gold' }>
  }> = {
    madden: {
      title: 'Madden 25',
      fullName: 'Madden NFL 25',
      description: 'The ultimate football gaming experience. Compete in the NFL Championship and prove you&apos;re the best franchise builder.',
      glowColor: 'purple',
      tournament: 'NFL Championship',
      prize: '$50K',
      players: '256',
      stats: [
        { value: '256', label: 'Competitors', accent: 'purple' },
        { value: '$50K', label: 'Prize Pool', accent: 'teal' },
        { value: '8', label: 'Rounds', accent: 'gold' },
        { value: '2.5K', label: 'Avg Viewers', accent: 'purple' },
      ],
    },
    cod: {
      title: 'Call of Duty',
      fullName: 'Call of Duty: Modern Warfare III',
      description: 'Fast-paced competitive multiplayer action. Join the Global Clash and dominate the battlefield with your squad.',
      glowColor: 'teal',
      tournament: 'Global Clash',
      prize: '$75K',
      players: '512',
      stats: [
        { value: '512', label: 'Competitors', accent: 'teal' },
        { value: '$75K', label: 'Prize Pool', accent: 'purple' },
        { value: '10', label: 'Rounds', accent: 'gold' },
        { value: '8.4K', label: 'Avg Viewers', accent: 'teal' },
      ],
    },
    'nba-2k': {
      title: 'NBA 2K',
      fullName: 'NBA 2K25',
      description: 'Build your ultimate team and compete at the highest level. The Pro Circuit is where legends are made.',
      glowColor: 'gold',
      tournament: 'Pro Circuit',
      prize: '$100K',
      players: '1024',
      stats: [
        { value: '1024', label: 'Competitors', accent: 'gold' },
        { value: '$100K', label: 'Prize Pool', accent: 'purple' },
        { value: '12', label: 'Rounds', accent: 'teal' },
        { value: '12.1K', label: 'Avg Viewers', accent: 'gold' },
      ],
    },
  }

  const data = gameData[game] || gameData.madden

  const gameBackgrounds: Record<string, string> = {
    madden: '/madden-bg.jpg',
    cod: '/cod-bg.jpg',
    'nba-2k': '/nba-bg.jpg',
  }

  const backgroundImage = gameBackgrounds[game] || gameBackgrounds.madden

  const features = [
    {
      title: 'Ranked Tournaments',
      description: 'Compete in skill-based brackets with weekly qualifiers and championship finals.',
      color: 'purple',
    },
    {
      title: 'Live Streaming',
      description: 'Watch pro players and community members compete 24/7 on Squad Stream.',
      color: 'teal',
    },
    {
      title: 'Prize Pools',
      description: 'Weekly and seasonal tournaments with guaranteed prize distribution to top players.',
      color: 'gold',
    },
    {
      title: 'Leaderboards',
      description: 'Track your ranking and see how you stack up against the best players globally.',
      color: 'purple',
    },
    {
      title: 'Community Events',
      description: 'Special themed events, challenges, and community-voted competitions.',
      color: 'teal',
    },
    {
      title: 'NFT Rewards',
      description: 'Earn exclusive NFTs and digital collectibles by winning tournaments.',
      color: 'gold',
    },
  ]

  return (
    <Layout>
      {/* Custom Hero Section with Game-Specific Background and Animation */}
      <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Game-Specific Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{backgroundImage: `url(${backgroundImage})`}} 
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-serif font-black mb-6 leading-tight tracking-tighter uppercase text-white">
            {data.title}
          </h1>
          
          {data.description && (
            <p className="text-xl md:text-2xl text-text-secondary mb-10 font-light leading-relaxed max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </div>
      </div>

      {/* Featured Tournament */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Badge variant={data.glowColor} className="mb-4">THIS WEEK</Badge>
          <h2 className="text-4xl font-serif font-bold mb-8 text-white">
            {data.tournament}
          </h2>

          <Card
            border={data.glowColor}
            className="p-8 md:p-12 mb-12 bg-gradient-to-br from-white/5 to-transparent"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-text-muted text-sm mb-2">Total Prize Pool</p>
                <p className="text-4xl font-bold text-gold-light">
                  {data.prize}
                </p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-2">Competitors</p>
                <p className="text-4xl font-bold text-teal-light">
                  {data.players}
                </p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-2">Status</p>
                <Badge variant={data.glowColor}>REGISTRATION OPEN</Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" glow={data.glowColor}>
                Register Now
              </Button>
              <Button variant="outline" size="lg">
                View Bracket
              </Button>
            </div>
          </Card>

          {/* Stats */}
          <StatBar stats={data.stats} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-text-secondary">
              Everything you need to compete at the highest level
            </p>
          </div>

          <FeatureGrid columns={3} items={features} />
        </div>
      </section>

      {/* How to Compete */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              How to Compete
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Create Account',
                description: 'Sign up and verify your gaming credentials',
              },
              {
                step: '2',
                title: 'Select Tournament',
                description: 'Choose your skill bracket and entry fee',
              },
              {
                step: '3',
                title: 'Play Matches',
                description: 'Compete against other players in your bracket',
              },
              {
                step: '4',
                title: 'Win Prizes',
                description: 'Earn rewards from the prize pool and tokens',
              },
            ].map((item) => (
              <Card key={item.step} border="subtle" className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-teal flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4 text-white">
            Ready to Compete?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Register for the {data.tournament} tournament and prove you&apos;re the best {data.title} player.
          </p>
          <Button variant="primary" size="lg" glow={data.glowColor}>
            Register for Tournament
          </Button>
        </div>
      </section>
    </Layout>
  )
}
