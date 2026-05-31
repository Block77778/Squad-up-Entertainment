'use client'

import React, { useState } from 'react'
import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Button } from '@/components/button'

export default function SquadTracks() {
  const [selectedGenre, setSelectedGenre] = useState('all')

  const genres = [
    { id: 'all', label: 'All Genres' },
    { id: 'electronic', label: 'Electronic' },
    { id: 'hiphop', label: 'Hip-Hop' },
    { id: 'rock', label: 'Rock' },
    { id: 'ambient', label: 'Ambient' },
  ]

  const tracks = [
    {
      title: 'Victory Pulse',
      artist: 'Synth Master',
      genre: 'electronic',
      plays: '12.4K',
      featured: true,
    },
    {
      title: 'Championship Anthem',
      artist: 'Beat Wizard',
      genre: 'hiphop',
      plays: '8.9K',
      featured: true,
    },
    {
      title: 'Electric Dreams',
      artist: 'Neon Collective',
      genre: 'electronic',
      plays: '15.2K',
      featured: false,
    },
    {
      title: 'Gamer\'s Paradise',
      artist: 'Pixel Sound',
      genre: 'rock',
      plays: '6.7K',
      featured: false,
    },
    {
      title: 'Deep Focus',
      artist: 'Ambient Vibes',
      genre: 'ambient',
      plays: '9.1K',
      featured: false,
    },
    {
      title: 'Compete & Rise',
      artist: 'Hip Hop Kings',
      genre: 'hiphop',
      plays: '11.3K',
      featured: false,
    },
    {
      title: 'Neon Nights',
      artist: 'Synthwave Studio',
      genre: 'electronic',
      plays: '7.8K',
      featured: false,
    },
    {
      title: 'Thunder Road',
      artist: 'Rock Alliance',
      genre: 'rock',
      plays: '5.4K',
      featured: false,
    },
  ]

  const filteredTracks = selectedGenre === 'all'
    ? tracks
    : tracks.filter(t => t.genre === selectedGenre)

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Squad Tracks"
        subtitle="Discover Music from Gaming&apos;s Best Artists"
        glowColor="teal"
        height="md"
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Genre Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${
                  selectedGenre === genre.id
                    ? 'bg-gray-500 text-white'
                    : 'bg-card border border-white/10 text-white/70 hover:border-gray-400/50'
                }`}
              >
                {genre.label}
              </button>
            ))}
          </div>

          {/* Featured Tracks */}
          {selectedGenre === 'all' && (
            <div className="mb-12">
              <Badge variant="gold" className="mb-4">FEATURED</Badge>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">
                Trending Now
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tracks
                  .filter(t => t.featured)
                  .map((track, index) => (
                    <Card
                      key={index}
                      border="gold"
                      className="p-6 border-gold/30 bg-gradient-to-br from-gold/10 to-transparent hover:border-gold/50 transition-all group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gold to-teal rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                          ♫
                        </div>
                        <Badge variant="gold" size="sm">
                          FEATURED
                        </Badge>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white mb-2">
                        {track.title}
                      </h4>
                      <p className="text-text-secondary mb-4">
                        {track.artist}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted text-sm">{track.plays} plays</span>
                        <Button variant="secondary" size="sm">
                          Listen
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* All Tracks Grid */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">
              {selectedGenre === 'all' ? 'All Tracks' : 'Tracks'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTracks
                .filter(t => !t.featured || selectedGenre !== 'all')
                .map((track, index) => (
                  <Card
                    key={index}
                    border="subtle"
                    className="p-6 hover:border-white/10 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-teal rounded-lg flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform">
                        ♪
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white mb-1">
                      {track.title}
                    </h4>
                    <p className="text-text-secondary text-sm mb-4">
                      {track.artist}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-xs">{track.plays} plays</span>
                      <Button variant="ghost" size="sm">
                        ▶
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Track Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <Card
            border="teal"
            className="p-8 md:p-12 border-teal/30 text-center"
          >
            <Badge variant="teal" className="mb-4">SUBMIT MUSIC</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Share Your Sound
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Are you a music producer or artist? Submit your tracks to Squad Tracks and reach millions of gamers worldwide. Get featured, earn streams, and monetize your music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" glow="teal">
                Submit Track
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
