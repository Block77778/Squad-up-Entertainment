'use client'


import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/hooks/use-auth'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  const { user, isLoggedIn, signOut } = useAuth()
  const username = user?.username || 'Player'
  const tier = user?.membershipTier || 'free'

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/squad-stream', label: 'Stream' },
    { href: '/squad-tracks', label: 'Music' },
    { href: '/contests', label: 'Contests' },
    { href: '/crypto-squad', label: 'Crypto' },
    { href: '/partnerships', label: 'Partners' },
    { href: '/membership', label: 'Membership' },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/contact', label: 'Contact' },
  ]

  const games = [
    { href: '/games/madden', label: 'Madden' },
    { href: '/games/cod', label: 'Call of Duty' },
    { href: '/games/nba-2k', label: 'NBA 2K' },
    { href: '/games/fifa', label: 'FIFA' },
  ]

  const username = 'Player'
  const tier = 'free'

  const tierColors: Record<string, string> = {
    free: '#9ca3af',
    starter: '#34d399',
    pro: '#a78bfa',
    elite: '#FFD700',
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphic-premium border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <Image src="/squad-up-logo.png" alt="Squad Up Gaming Logo" width={50} height={50} className="w-12 h-12 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="nav-label text-xs text-white/70 hover:text-white transition-all duration-300 relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)' }} />
              </Link>
            ))}

            {/* Games dropdown */}
            <div className="relative group">
              <button className="nav-label text-xs text-white/70 hover:text-white transition-all duration-300 flex items-center gap-1">
                Games <span className="group-hover:rotate-180 transition-transform duration-300 inline-block">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-3 animate-fade-in">
                <div className="glassmorphic-premium rounded-lg border border-white/15 py-3 min-w-[180px] shadow-2xl">
                  {games.map((game) => (
                    <Link key={game.href} href={game.href}
                      className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 hover:pl-6">
                      {game.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side — auth */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsUserDropdownOpen(false), 150)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  {/* Avatar circle */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)' }}>
                    {username[0].toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-mono text-white font-semibold leading-none">{username}</div>
                    <div className="text-xs font-mono leading-none mt-0.5 capitalize" style={{ color: tierColors[tier] }}>{tier}</div>
                  </div>
                  <span className={cn('text-white/40 text-xs transition-transform', isUserDropdownOpen && 'rotate-180')}>▼</span>
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 glassmorphic-premium rounded-lg border border-white/15 py-2 min-w-[180px] shadow-2xl animate-fade-in">
                    <Link href="/membership" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">
                      🏆 Membership
                    </Link>
                    <Link href="/contests" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">
                      🎮 My Contests
                    </Link>
                    <div className="border-t border-white/10 mt-1 pt-1">
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 transition-all"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/sign-in"
                  className="nav-label text-xs text-white/60 hover:text-white transition-colors px-3 py-2">
                  Sign In
                </Link>
                <Link href="/sign-up"
                  className="inline-block font-mono uppercase tracking-widest text-white text-xs px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}>
                  Join Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            {/* User status on mobile */}
            {isLoggedIn && (
              <div className="px-4 py-3 border-b border-white/10 mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black text-white"
                  style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)' }}>
                  {username[0].toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-mono text-white font-semibold">{username}</div>
                  <div className="text-xs font-mono capitalize" style={{ color: tierColors[tier] }}>{tier} member</div>
                </div>
              </div>
            )}

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="block px-4 py-3 nav-label text-xs text-white/70 hover:text-white transition-colors relative group"
                onClick={() => setIsOpen(false)}>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-4 group-hover:w-0.5 transition-all duration-300 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #8B5CF6, #10B981)' }} />
                {link.label}
              </Link>
            ))}

            <div className="px-4 py-3">
              <button onClick={() => setIsGameDropdownOpen(!isGameDropdownOpen)}
                className="nav-label text-xs text-white/70 hover:text-white transition-colors w-full text-left flex items-center justify-between">
                <span>Games</span>
                <span className={cn('transition-transform', isGameDropdownOpen && 'rotate-180')}>▼</span>
              </button>
              {isGameDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {games.map((game) => (
                    <Link key={game.href} href={game.href}
                      className="block py-2 text-sm text-white/70 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}>
                      {game.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 pt-2 pb-2 border-t border-white/10 mt-2">
              {isLoggedIn ? (
                <button
                  onClick={() => { signOut(); setIsOpen(false) }}
                  className="w-full font-mono uppercase tracking-widest text-red-400 text-xs py-3 rounded-lg font-bold border border-red-500/20 hover:bg-red-500/5 transition-all"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link href="/sign-in" onClick={() => setIsOpen(false)}
                    className="block text-center font-mono uppercase tracking-widest text-white/60 text-xs py-2.5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                    Sign In
                  </Link>
                  <Link href="/sign-up" onClick={() => setIsOpen(false)}
                    className="block text-center font-mono uppercase tracking-widest text-white text-xs py-3 rounded-lg font-bold transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}>
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
