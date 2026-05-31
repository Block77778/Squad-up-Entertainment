'use client'

import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import { Tabs } from '@/components/tabs'

export default function SquadStream() {
  const scheduleItems = [
    {
      time: '2:00 PM',
      game: 'Madden 25 - NFL Championship Qualifier',
      streamer: 'ProGamer_Alex',
      viewers: '5.2K',
    },
    {
      time: '4:30 PM',
      game: 'Call of Duty - Global Clash Round 3',
      streamer: 'CompetitorJen',
      viewers: '8.4K',
    },
    {
      time: '7:00 PM',
      game: 'NBA 2K - Pro Circuit Finals',
      streamer: 'EsportsChamp',
      viewers: '12.1K',
    },
    {
      time: '9:30 PM',
      game: 'Multi-Game Showdown',
      streamer: 'CommunityHost',
      viewers: '3.8K',
    },
  ]

  const videos = [
    {
      title: 'Madden 25 Pro League Finals',
      streamer: 'ProGamer_Alex',
      views: '24.5K',
      duration: '2:15:30',
    },
    {
      title: 'NBA 2K Tournament Highlights',
      streamer: 'EsportsChamp',
      views: '18.2K',
      duration: '1:45:00',
    },
    {
      title: 'Call of Duty Championship Replay',
      streamer: 'CompetitorJen',
      views: '31.8K',
      duration: '3:22:15',
    },
    {
      title: 'Weekly Community Showcase',
      streamer: 'CommunityHost',
      views: '12.3K',
      duration: '1:30:45',
    },
    {
      title: 'Beginner Tutorial Series',
      streamer: 'Coach_Mike',
      views: '9.7K',
      duration: '45:20',
    },
    {
      title: 'Advanced Strategy Deep Dive',
      streamer: 'StrategyGuru',
      views: '15.4K',
      duration: '2:05:30',
    },
  ]

  const tabContent = [
    {
      id: 'schedule',
      label: 'Today\'s Schedule',
      content: (
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <Card
              key={index}
              border="subtle"
              className="p-6 flex items-center justify-between hover:bg-card/60 transition-all"
            >
              <div className="flex-1">
                <p className="font-mono text-sm text-teal-light mb-2">{item.time}</p>
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {item.game}
                </h4>
                <p className="text-text-muted text-sm">
                  Hosted by <span className="text-gray-300">{item.streamer}</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-text-secondary text-sm mb-3">{item.viewers} viewers</p>
                <Button variant="secondary" size="sm">
                  Watch Live
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'replays',
      label: 'Replays',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card
              key={index}
              border="subtle"
              className="overflow-hidden hover:border-white/10 transition-all group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-400/20 to-teal/20 h-40 flex items-center justify-center group-hover:from-gray-400/30 group-hover:to-teal/30 transition-all">
                <div className="text-4xl">▶</div>
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-white mb-2 line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-text-muted text-sm mb-3">
                  {video.streamer}
                </p>
                <div className="flex justify-between text-xs text-text-muted">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      id: 'podcast',
      label: 'Podcast',
      content: (
        <div className="space-y-4">
          {[
            {
              title: 'Episode 42: State of Competitive Gaming',
              guests: 'ProGamer_Alex & StrategyGuru',
              duration: '1:15:30',
              date: 'Dec 15',
            },
            {
              title: 'Episode 41: Creator Economy Roundtable',
              guests: 'ContentCreator_Sam & MusicArtist_Lee',
              duration: '1:45:00',
              date: 'Dec 8',
            },
            {
              title: 'Episode 40: Crypto Rewards Deep Dive',
              guests: 'BlockchainExpert_Tom',
              duration: '58:45',
              date: 'Dec 1',
            },
          ].map((episode, index) => (
            <Card
              key={index}
              border="subtle"
              className="p-6 flex items-center justify-between hover:bg-card/60 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400/30 to-teal/30 rounded-lg flex items-center justify-center mr-6 group-hover:from-gray-400/40 group-hover:to-teal/40 transition-all flex-shrink-0">
                <span className="text-2xl">🎙️</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {episode.title}
                </h4>
                <p className="text-text-muted text-sm">
                  {episode.guests}
                </p>
              </div>
              <div className="text-right">
                <p className="text-text-secondary text-sm mb-1">{episode.date}</p>
                <p className="text-text-muted text-xs">{episode.duration}</p>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Squad Stream"
        subtitle="24/7 Live Gaming, Tournaments, and Community Content"
        glowColor="purple"
        height="md"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Stream */}
          <Card
            border="purple"
            className="mb-12 p-8 border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-transparent"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-400/20 to-teal/20 rounded-lg flex items-center justify-center mb-6">
              <span className="text-6xl opacity-50">▶</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-6 md:mb-0">
                <Badge variant="purple" className="mb-4">NOW LIVE</Badge>
                <h3 className="text-3xl font-serif font-bold text-white mb-2">
                  Madden 25 - NFL Championship Finals
                </h3>
                <p className="text-text-secondary mb-2">
                  Hosted by <span className="text-gray-300 font-semibold">ProGamer_Alex</span>
                </p>
                <p className="text-lg font-bold text-teal-light">
                  15.3K viewers right now
                </p>
              </div>
              <Button variant="secondary" size="lg" glow="teal">
                Watch Now
              </Button>
            </div>
          </Card>

          {/* Tabs */}
          <Tabs tabs={tabContent} defaultTab="schedule" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="teal" className="mb-4">START STREAMING</Badge>
          <h2 className="text-4xl font-serif font-bold mb-4 text-white">
            Ready to Stream?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Join our creator community and start streaming your gameplay to thousands of viewers.
          </p>
          <Button variant="primary" size="lg" glow="purple">
            Apply as Creator
          </Button>
        </div>
      </section>
    </Layout>
  )
}
