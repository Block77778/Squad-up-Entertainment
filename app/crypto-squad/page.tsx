'use client'

import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import { Tabs } from '@/components/tabs'
import { FeatureGrid } from '@/components/feature-grid'

export default function CryptoSquad() {
  const tiers = [
    {
      name: 'Bronze Squad',
      color: 'purple',
      minTokens: '0',
      benefits: [
        'Access to tournaments',
        'Basic rewards',
        'Community access',
      ],
    },
    {
      name: 'Silver Squad',
      color: 'teal',
      minTokens: '1,000+',
      benefits: [
        'All Bronze benefits',
        'Premium tournaments',
        'Exclusive rewards',
        '2x earnings multiplier',
      ],
    },
    {
      name: 'Gold Squad',
      color: 'gold',
      minTokens: '10,000+',
      benefits: [
        'All Silver benefits',
        'VIP tournaments',
        'Limited NFTs',
        '5x earnings multiplier',
        'Governance voting',
      ],
    },
  ]

  const earnOpportunities = [
    {
      title: 'Compete',
      description: 'Earn tokens by competing in tournaments and placing on leaderboards.',
      icon: '🏆',
      color: 'purple',
    },
    {
      title: 'Stream',
      description: 'Monetize your streams with token rewards based on viewership.',
      icon: '🎬',
      color: 'teal',
    },
    {
      title: 'Create',
      description: 'Share music and content on Squad Tracks and earn token royalties.',
      icon: '🎵',
      color: 'gold',
    },
    {
      title: 'Stake',
      description: 'Stake your tokens to earn passive APY rewards.',
      icon: '💰',
      color: 'purple',
    },
  ]

  const rewards = [
    { activity: 'Tournament Win', tokens: '500 - 5,000' },
    { activity: 'Daily Login', tokens: '10' },
    { activity: 'Stream Hour', tokens: '50' },
    { activity: 'Music Upload', tokens: '100' },
    { activity: 'Community Vote', tokens: '5' },
    { activity: 'Content Share', tokens: '25' },
  ]

  const tabContent = [
    {
      id: 'howitworks',
      label: 'How It Works',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              The Squad Up Cryptocurrency Ecosystem
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Squad Token (SQUAD) is the native cryptocurrency of our platform. It powers our reward system, governance, and community incentives. Every action you take—competing, streaming, creating—earns you SQUAD tokens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Utility',
                  description: 'Use tokens to enter premium tournaments, mint NFTs, or purchase exclusive content.',
                },
                {
                  title: 'Rewards',
                  description: 'Earn tokens through competition, streaming, and community participation.',
                },
                {
                  title: 'Governance',
                  description: 'Vote on platform updates and feature suggestions with your tokens.',
                },
                {
                  title: 'Trading',
                  description: 'Trade tokens on decentralized exchanges and stake for passive APY.',
                },
              ].map((item, index) => (
                <Card key={index} border="subtle" className="p-6">
                  <h4 className="text-lg font-serif font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tiers',
      label: 'Membership Tiers',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => {
            const colorMap = {
              purple: 'border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-transparent text-gray-300',
              teal: 'border-teal/30 bg-gradient-to-br from-teal/10 to-transparent text-teal-light',
              gold: 'border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold-light',
            }
            return (
              <Card
                key={index}
                border={tier.color as 'purple' | 'teal' | 'gold'}
                className={`p-8 ${colorMap[tier.color as keyof typeof colorMap]} relative overflow-hidden`}
              >
                {index === 2 && (
                  <Badge variant={tier.color as any} className="mb-4 absolute -top-2 -right-2 transform rotate-12">
                    MOST POPULAR
                  </Badge>
                )}
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold mb-6">
                  {tier.minTokens} SQUAD
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-text-secondary">
                      <span className="text-lg mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="md" className="w-full">
                  Join Tier
                </Button>
              </Card>
            )
          })}
        </div>
      ),
    },
    {
      id: 'rewards',
      label: 'Earn Rewards',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Multiple Ways to Earn
            </h3>
            <FeatureGrid columns={2} items={earnOpportunities} />
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-serif font-bold text-white mb-6">
              Reward Structure
            </h4>
            <div className="space-y-3">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card border border-white/5 rounded-lg"
                >
                  <span className="text-white font-semibold">{reward.activity}</span>
                  <span className="text-gold-light font-bold">{reward.tokens}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Crypto Squad"
        subtitle="Earn SQUAD Tokens and Shape Our Future"
        glowColor="gold"
        height="md"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs tabs={tabContent} defaultTab="howitworks" />
        </div>
      </section>

      {/* Staking Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <Card border="gold" className="p-8 md:p-12 border-gold/30 text-center">
            <Badge variant="gold" className="mb-4">PASSIVE INCOME</Badge>
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">
              Stake SQUAD & Earn APY
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              Stake your tokens and earn passive rewards. Higher tier members receive better APY.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div>
                <p className="text-text-muted text-sm mb-2">Bronze Tier</p>
                <p className="text-3xl font-bold text-gray-300">12%</p>
                <p className="text-text-muted text-sm">APY</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-2">Silver Tier</p>
                <p className="text-3xl font-bold text-teal-light">18%</p>
                <p className="text-text-muted text-sm">APY</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-2">Gold Tier</p>
                <p className="text-3xl font-bold text-gold-light">25%</p>
                <p className="text-text-muted text-sm">APY</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" glow="teal">
              Start Staking
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-4 text-white">
            Ready to Join Crypto Squad?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Start earning SQUAD tokens today through competition, streaming, and community participation.
          </p>
          <Button variant="primary" size="lg" glow="purple">
            Get Started
          </Button>
        </div>
      </section>
    </Layout>
  )
}
