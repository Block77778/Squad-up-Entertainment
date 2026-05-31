'use client'

import React, { useState } from 'react'
import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import { Accordion } from '@/components/accordion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const faqItems = [
    {
      id: '1',
      title: 'How do I register for tournaments?',
      content: 'To register for tournaments, first create an account on Squad Up. Then browse available tournaments in the Contests section, select one that fits your skill level, and click Register. Pay any applicable entry fees and you\'re ready to compete!',
    },
    {
      id: '2',
      title: 'How do I earn Squad tokens?',
      content: 'You can earn Squad tokens through multiple activities: competing in tournaments, streaming on Squad Stream, uploading music to Squad Tracks, staking existing tokens, daily login bonuses, and community participation. Each activity has different reward tiers.',
    },
    {
      id: '3',
      title: 'Can I withdraw my winnings?',
      content: 'Yes! Prize pool winnings can be withdrawn directly to your connected wallet or bank account. Withdrawal times vary depending on your location and payment method, typically ranging from 2-7 business days.',
    },
    {
      id: '4',
      title: 'What games are supported?',
      content: 'Currently, Squad Up supports Madden 25, Call of Duty, and NBA 2K. We&apos;re constantly adding new games based on community feedback. Check back regularly for announcements about new supported titles.',
    },
    {
      id: '5',
      title: 'Is Squad Up available on mobile?',
      content: 'Squad Up is fully mobile-responsive and works great on smartphones and tablets. We&apos;re also developing dedicated mobile apps for both iOS and Android, coming soon!',
    },
    {
      id: '6',
      title: 'How do I become a creator or streamer?',
      content: 'Apply through our Creator Program by submitting an application in your account settings. Include links to your streaming channel, gaming channel, or music portfolio. Our team reviews applications and responds within 7 business days.',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Questions? We&apos;d love to hear from you"
        glowColor="purple"
        height="md"
      />

      {/* Contact Cards */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card
              border="purple"
              className="p-8 text-center border-gray-400/30 hover:border-gray-400/50 transition-all"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Email
              </h3>
              <p className="text-text-secondary mb-4">
                info@squadup-ent.com
              </p>
              <Button variant="ghost" size="sm">
                Send Email
              </Button>
            </Card>

            <Card
              border="teal"
              className="p-8 text-center border-teal/30 hover:border-teal/50 transition-all"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Discord
              </h3>
              <p className="text-text-secondary mb-4">
                Join our community server
              </p>
              <Button variant="ghost" size="sm">
                Join Discord
              </Button>
            </Card>

            <Card
              border="gold"
              className="p-8 text-center border-gold/30 hover:border-gold/50 transition-all"
            >
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-lg font-serif font-bold text-white mb-2">
                Social Media
              </h3>
              <p className="text-text-secondary mb-4">
                Follow for updates
              </p>
              <Button variant="ghost" size="sm">
                Follow Now
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-4">CONTACT FORM</Badge>
            <h2 className="text-4xl font-serif font-bold text-white">
              Send us a Message
            </h2>
          </div>

          <Card border="subtle" className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gray-400/50 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gray-400/50 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gray-400/50 transition-colors"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-gray-400/50 transition-colors resize-none"
                  placeholder="Tell us more..."
                  rows={6}
                  required
                />
              </div>

              <Button variant="primary" size="lg" className="w-full" glow="purple">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="teal" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>
    </Layout>
  )
}
