'use client'

import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import { Tabs } from '@/components/tabs'

export default function Contests() {
  const activeContests = [
    {
      game: 'Madden 25',
      name: 'NFL Championship Qualifier',
      prize: '$25,000',
      participants: '256/512',
      progress: 50,
      status: 'Round 3 of 8',
    },
    {
      game: 'Call of Duty',
      name: 'Global Clash Tournament',
      prize: '$50,000',
      participants: '512/1024',
      progress: 65,
      status: 'Finals',
    },
    {
      game: 'NBA 2K',
      name: 'Pro Circuit Season 3',
      prize: '$75,000',
      participants: '1024/2048',
      progress: 80,
      status: 'Grand Finals',
    },
  ]

  const pastWinners = [
    {
      tournament: 'Madden 25 Championship',
      winner: 'ProGamer_Alex',
      prize: '$15,000',
      date: 'Dec 10',
    },
    {
      tournament: 'Call of Duty Global Clash',
      winner: 'Team_Legends',
      prize: '$35,000',
      date: 'Dec 3',
    },
    {
      tournament: 'NBA 2K Pro Circuit',
      winner: 'EsportsChamp',
      prize: '$50,000',
      date: 'Nov 26',
    },
  ]

  const tabContent = [
    {
      id: 'active',
      label: 'Active Tournaments',
      content: (
        <div className="space-y-6">
          {activeContests.map((contest, index) => (
            <Card
              key={index}
              border="purple"
              className="p-6 border-gray-400/30"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <Badge variant="purple" className="mb-2">LIVE</Badge>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {contest.name}
                  </h3>
                  <p className="text-text-secondary">
                    {contest.game} • {contest.status}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-2xl font-bold text-gold-light mb-2">
                    {contest.prize}
                  </p>
                  <p className="text-text-muted text-sm">
                    {contest.participants} registered
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-muted text-sm">Progress</span>
                  <span className="text-text-secondary text-sm">{contest.progress}%</span>
                </div>
                <div className="w-full bg-card rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-gray-400 to-teal h-full rounded-full transition-all"
                    style={{ width: `${contest.progress}%` }}
                  />
                </div>
              </div>

              <Button variant="secondary" size="md" className="w-full md:w-auto">
                Register Now
              </Button>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'past',
      label: 'Past Winners',
      content: (
        <div className="space-y-4">
          {pastWinners.map((winner, index) => (
            <Card
              key={index}
              border="gold"
              className="p-6 border-gold/30 flex items-center justify-between hover:bg-gold/5 transition-all"
            >
              <div>
                <h4 className="text-lg font-serif font-bold text-white mb-1">
                  {winner.tournament}
                </h4>
                <p className="text-text-secondary text-sm">
                  Champion: <span className="text-gold-light font-semibold">{winner.winner}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-gold-light font-bold mb-1">{winner.prize}</p>
                <p className="text-text-muted text-xs">{winner.date}</p>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'howto',
      label: 'How to Enter',
      content: (
        <div className="space-y-6">
          {[
            {
              step: '1',
              title: 'Create Your Account',
              description: 'Sign up on Squad Up with your gaming credentials and complete your profile.',
            },
            {
              step: '2',
              title: 'Choose a Tournament',
              description: 'Browse active tournaments and select the one that matches your skill level.',
            },
            {
              step: '3',
              title: 'Register & Compete',
              description: 'Register for the tournament and pay any entry fee. You&apos;re now competing!',
            },
            {
              step: '4',
              title: 'Win & Earn Rewards',
              description: 'Climb the leaderboard, win your matches, and claim your prize pool rewards.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-teal flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contests & Tournaments"
        subtitle="Compete with the Best, Win Real Prizes"
        glowColor="gold"
        height="md"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs tabs={tabContent} defaultTab="active" />
        </div>
      </section>

      {/* Prize Pool Info */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card border="purple" className="p-8 text-center border-gray-400/30">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                $500K
              </h3>
              <p className="text-text-secondary">
                Total Prize Pool This Season
              </p>
            </Card>
            <Card border="teal" className="p-8 text-center border-teal/30">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                50+
              </h3>
              <p className="text-text-secondary">
                Active Tournaments & Events
              </p>
            </Card>
            <Card border="gold" className="p-8 text-center border-gold/30">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">
                3 Games
              </h3>
              <p className="text-text-secondary">
                Madden, Call of Duty, NBA 2K
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="gold" className="mb-4">READY TO COMPETE</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-white">
            Join the Competition
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Register now for upcoming tournaments and start your path to championship glory.
          </p>
          <Button variant="primary" size="lg" glow="purple">
            Register for Tournament
          </Button>
        </div>
      </section>
    </Layout>
  )
}
