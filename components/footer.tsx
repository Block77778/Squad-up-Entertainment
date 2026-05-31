import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="glassmorphic-premium border-t border-white/10 py-16 md:py-24 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/squad-up-logo.png" 
                alt="Squad Up Gaming Logo" 
                width={60} 
                height={60}
                className="w-16 h-16 object-contain"
              />
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Where gamers connect, compete, and celebrate the competitive spirit.
            </p>
          </div>
          
          {/* Links - Platform */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="nav-label text-xs text-white mb-6 text-gradient-purple">Platform</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/squad-stream" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  Squad Stream
                </Link>
              </li>
              <li>
                <Link href="/squad-tracks" className="text-text-muted hover:text-teal-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal/30 group-hover:bg-teal mr-2 transition-colors" />
                  Squad Tracks
                </Link>
              </li>
              <li>
                <Link href="/contests" className="text-text-muted hover:text-gold-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold mr-2 transition-colors" />
                  Contests
                </Link>
              </li>
              <li>
                <Link href="/crypto-squad" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  Crypto Squad
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links - Company */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="nav-label text-xs text-white mb-6 text-gradient-teal">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-text-muted hover:text-teal-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal/30 group-hover:bg-teal mr-2 transition-colors" />
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-text-muted hover:text-gold-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold mr-2 transition-colors" />
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links - Legal */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="nav-label text-xs text-white mb-6 text-gradient-gold">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-teal-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal/30 group-hover:bg-teal mr-2 transition-colors" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-gold-light hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold mr-2 transition-colors" />
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-gray-300 hover:pl-2 transition-all duration-300 flex items-center group">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-500/30 group-hover:bg-gray-500 mr-2 transition-colors" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-text-muted text-sm">
            © 2025 Squad Up Entertainment. All rights reserved. | Premium Gaming Platform.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-text-muted hover:text-gray-300 hover:scale-110 transition-all duration-300 text-sm font-mono font-semibold group">
              <span className="group-hover:text-glow-purple">Twitter</span>
            </a>
            <a href="#" className="text-text-muted hover:text-teal-light hover:scale-110 transition-all duration-300 text-sm font-mono font-semibold group">
              <span className="group-hover:text-glow-teal">Discord</span>
            </a>
            <a href="#" className="text-text-muted hover:text-gold-light hover:scale-110 transition-all duration-300 text-sm font-mono font-semibold group">
              <span className="group-hover:text-glow-gold">YouTube</span>
            </a>
            <a href="#" className="text-text-muted hover:text-gray-300 hover:scale-110 transition-all duration-300 text-sm font-mono font-semibold group">
              <span className="group-hover:text-glow-purple">Twitch</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
