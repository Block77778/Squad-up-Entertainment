'use client'

import React, { useState, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { useAuth, loginAccount } from '@/hooks/use-auth'

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'

function SignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const { signIn } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const inputClass = () =>
    `w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 focus:border-violet-500/60 focus:ring-violet-500/30 transition-all`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Please enter your email and password.')
      return
    }

    setLoading(true)

    // Verify credentials against stored hashed passwords
    const result = await loginAccount(form.email, form.password)

    if (!result.success || !result.user) {
      setError(result.error || 'Invalid email or password.')
      setLoading(false)
      return
    }

    signIn(result.user)
    // Full page reload so nav re-reads localStorage immediately
    window.location.href = callbackUrl
  }

  return (
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
            <input className={inputClass()} type="email" placeholder="john@example.com"
              value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Password</label>
            <input className={inputClass()} type="password" placeholder="Your password"
              value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} required />
          </div>
          <div className="flex justify-end">
            <Link href="/contact" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
              Forgot password?
            </Link>
          </div>
          <button type="submit" disabled={loading}
            className="w-full font-mono uppercase tracking-widest text-white text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
            {loading ? 'Verifying...' : 'Sign In'}
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
  )
}

export default function SignIn() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <Suspense fallback={
          <div className="w-full max-w-md text-center">
            <div className="text-text-muted text-sm font-mono">Loading...</div>
          </div>
        }>
          <SignInForm />
        </Suspense>
      </div>
    </Layout>
  )
}
