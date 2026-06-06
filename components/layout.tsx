import React from 'react'
import { Nav } from './nav'
import { Footer } from './footer'
import { MusicPlayer } from './music-player'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  )
}
