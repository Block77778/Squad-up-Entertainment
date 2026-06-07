'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const inputClass = (hasError: boolean) =>
    `w-full bg-white/5 border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
      hasError ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:border-violet-500/60 focus:ring-violet-500/30'
    }`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setLoading(false)
    // Auth backend coming soon - redirecting to home
    setError('Sign in is being set up. Please check back soon.')
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md">

          <div className="text-center mb-8">
            <Link href="/">
              <Image src="/squad-up-logo.png" alt="Squad Up" width={70} height={70} className="mx-auto mb-4 hover:opacity-80 transition-opacity" />
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif font-black bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
              Welcome Back
            </h1>
            <p className="text-text-muted text-sm mt-2">Sign in to your Squad Up account</p>
          </div>

          <Card border="subtle" className="p-8">
            {error && (
              <div className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Email Address</label>
                <input
                  className={inputClass(false)}
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Password</label>
                <input
                  className={inputClass(false)}
                  type="password"
                  placeholder="Your password"
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  required
                />
              </div>

              <div className="flex justify-end">
                <Link href="/contact" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full font-mono uppercase tracking-widest text-white text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <p className="text-center text-xs text-text-muted mt-6">
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
                Create one free
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
