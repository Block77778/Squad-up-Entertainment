'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './button'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGameDropdownOpen, setIsGameDropdownOpen] = useState(false)
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/squad-stream', label: 'Stream' },
    { href: '/squad-tracks', label: 'Music' },
    { href: '/contests', label: 'Contests' },
    { href: '/crypto-squad', label: 'Crypto' },
    { href: '/partnerships', label: 'Partners' },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/contact', label: 'Contact' },
  ]
  
  const games = [
    { href: '/games/madden', label: 'Madden' },
    { href: '/games/cod', label: 'Call of Duty' },
    { href: '/games/nba-2k', label: 'NBA 2K' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphic-premium border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover-scale">
            <Image 
              src="/squad-up-logo.png" 
              alt="Squad Up Gaming Logo" 
              width={50} 
              height={50}
              className="w-12 h-12 object-contain hover:drop-shadow-lg transition-all duration-300"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-label text-xs text-white/70 hover:text-white transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: 'linear-gradient(to right, #8B5CF6, #10B981)' }} />
              </Link>
            ))}
            
            {/* Game of the Week Dropdown */}
            <div className="relative group">
              <button className="nav-label text-xs text-white/70 hover:text-teal hover:text-glow-teal transition-all duration-300 flex items-center space-x-1">
                <span>Games</span>
                <span className="inline-block ml-1 group-hover:rotate-180 transition-transform duration-300">▼</span>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block pt-3 animate-fade-in">
                <div className="glassmorphic-premium rounded-lg border border-white/15 py-3 min-w-[180px] shadow-2xl">
                  {games.map((game) => (
                    <Link
                      key={game.href}
                      href={game.href}
                      className="block px-4 py-3 text-sm text-white/70 hover:text-teal hover:bg-teal/10 transition-all duration-200 hover:pl-6"
                    >
                      {game.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="primary" size="sm" glow="purple">
                Join Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 nav-label text-xs text-white/70 hover:text-gray-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Games Dropdown */}
            <div className="px-4 py-3">
              <button
                onClick={() => setIsGameDropdownOpen(!isGameDropdownOpen)}
                className="nav-label text-xs text-white/70 hover:text-teal transition-colors w-full text-left flex items-center justify-between"
              >
                <span>Games</span>
                <span className={cn('transition-transform', isGameDropdownOpen && 'rotate-180')}>▼</span>
              </button>
              {isGameDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {games.map((game) => (
                    <Link
                      key={game.href}
                      href={game.href}
                      className="block py-2 text-sm text-white/70 hover:text-teal transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {game.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="px-4 py-3">
              <Link href="/contact">
                <Button variant="primary" size="sm" glow="purple" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
