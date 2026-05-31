'use client'

import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { FeatureGrid } from '@/components/feature-grid'
import { Card } from '@/components/card'

export default function About() {
  const team = [
    { name: 'Alex Rivera', role: 'CEO & Founder', bio: 'Gaming entrepreneur with 10+ years in esports' },
    { name: 'Jordan Chen', role: 'CTO', bio: 'Tech lead scaling platforms for millions of players' },
    { name: 'Sam Williams', role: 'Head of Community', bio: 'Building vibrant gaming communities worldwide' },
    { name: 'Casey Park', role: 'VP Marketing', bio: 'Brand strategist in gaming and entertainment' },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="About Squad Up"
        subtitle="Building the future of competitive gaming"
        glowColor="teal"
        height="md"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Badge variant="teal" className="mb-4">OUR STORY</Badge>
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">
              From a Discord to a Global Movement
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Squad Up started in 2020 when a group of passionate gamers realized there wasn&apos;t a unified platform for competitive gaming, streaming, and community building. What began as a Discord server has evolved into a global platform connecting over 10,000 gamers.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              We&apos;ve hosted over 50 tournaments with $500K in prize pools, created opportunities for music creators, and built a cryptocurrency token that rewards participation. Squad Up isn&apos;t just a platform—it&apos;s a movement.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Today, we&apos;re committed to democratizing competitive gaming, making it accessible to anyone with a passion for competition and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: 'Our Mission',
                description: 'Empower gamers globally with tools to compete, create, and connect in a thriving ecosystem.',
                color: 'purple',
              },
              {
                title: 'Our Vision',
                description: 'A world where competitive gaming is mainstream, inclusive, and rewarding for everyone.',
                color: 'teal',
              },
              {
                title: 'Our Values',
                description: 'Community-first, transparency, innovation, and celebrating the passion that drives us all.',
                color: 'gold',
              },
            ]}
          />
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-4">WHAT WE OFFER</Badge>
            <h2 className="text-4xl font-serif font-bold text-white">
              Complete Gaming Ecosystem
            </h2>
          </div>

          <FeatureGrid
            columns={2}
            items={[
              {
                title: 'Tournaments & Competitions',
                description: 'Daily tournaments across Madden, Call of Duty, NBA 2K, and more with real prize pools and leaderboards.',
                color: 'purple',
              },
              {
                title: 'Streaming Platform',
                description: 'Integrated streaming tools and 24/7 content featuring pro players, newcomers, and community moments.',
                color: 'teal',
              },
              {
                title: 'Music Discovery',
                description: 'Curated gaming soundtracks and indie artists creating the soundtrack for competitive play.',
                color: 'gold',
              },
              {
                title: 'Crypto Rewards',
                description: 'Earn tokens for participation, streaming, and community building—the future of gaming rewards.',
                color: 'purple',
              },
            ]}
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">LEADERSHIP</Badge>
            <h2 className="text-4xl font-serif font-bold text-white">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                border="subtle"
                className="p-6 text-center hover:border-white/10 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-teal flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-light font-mono text-xs mb-3">
                  {member.role}
                </p>
                <p className="text-text-muted text-sm">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">10K+</div>
              <p className="text-text-muted text-sm">Global Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-light mb-2">$500K</div>
              <p className="text-text-muted text-sm">Prize Money</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-light mb-2">50+</div>
              <p className="text-text-muted text-sm">Tournaments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">24/7</div>
              <p className="text-text-muted text-sm">Live Streaming</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
