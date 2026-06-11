'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth, registerAccount } from '@/hooks/use-auth'
import { Layout } from '@/components/layout'
import { Card } from '@/components/card'

const GRADIENT = 'linear-gradient(to right, #8B5CF6, #10B981)'
const GRADIENT_BG = 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,185,129,0.10) 100%)'
const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
const games = ['Madden 25', 'Call of Duty', 'NBA 2K', 'FIFA', 'Fortnite', 'Valorant', 'Other']

export default function SignUp() {
  const router = useRouter()
  const { signIn } = useAuth()
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '',
    username: '', dob: '', platform: '', games: [] as string[],
    agreeTerms: false, agreeAge: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const update = (field: string, value: string | boolean | string[]) =>
    setForm((p) => ({ ...p, [field]: value }))

  const toggleGame = (game: string) =>
    update('games', form.games.includes(game)
      ? form.games.filter((g) => g !== game)
      : [...form.games, game])

  const validateStep1 = () => {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (form.password.length < 8) e.password = 'Min 8 characters'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match'
    if (!form.username.trim()) e.username = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e: Record<string, string> = {}
    if (!form.dob) e.dob = 'Required'
    if (!form.platform) e.platform = 'Select a platform'
    if (!form.agreeTerms) e.agreeTerms = 'You must agree to continue'
    if (!form.agreeAge) e.agreeAge = 'You must confirm your age'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => { if (validateStep1()) { setErrors({}); setStep(2) } }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep2()) return
    setLoading(true)

    // Register with hashed password — checks for duplicate email/username
    const result = await registerAccount({
      username: form.username,
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      password: form.password,
    })

    if (!result.success) {
      setErrors({ form: result.error || 'Registration failed.' })
      setLoading(false)
      return
    }

    // Auto sign-in after successful registration
    signIn({
      username: form.username,
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      membershipTier: 'free',
    })

    setNewUsername(form.username)
    setSubmitted(true)
    setLoading(false)
  }

  const inputClass = (field: string) =>
    `w-full bg-white/5 border rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
      errors[field] ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:border-violet-500/60 focus:ring-violet-500/30'
    }`

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-lg mx-auto animate-scale-in">
            <div className="text-7xl mb-6">🎮</div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
              Welcome to the Squad!
            </h1>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Your account is live, <strong className="text-white">{newUsername}</strong>. You're now part of the Squad Up community. Want to unlock more perks? Grab a membership tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all hover:opacity-90" style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
                View Membership Tiers
              </Link>
              <Link href="/contests" className="inline-block font-mono uppercase tracking-widest text-white text-sm px-8 py-3 rounded-lg font-bold transition-all hover:opacity-90 border border-white/20" style={{ background: GRADIENT_BG }}>
                Browse Contests
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <Link href="/"><Image src="/squad-up-logo.png" alt="Squad Up" width={70} height={70} className="mx-auto mb-4 hover:opacity-80 transition-opacity" /></Link>
            <h1 className="text-3xl md:text-4xl font-serif font-black bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>Create Your Account</h1>
            <p className="text-text-muted text-sm mt-2">Join thousands of competitive gamers</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2].map((s) => (
              <React.Fragment key={s}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all"
                  style={{ background: step >= s ? GRADIENT : 'rgba(255,255,255,0.05)', color: 'white', boxShadow: step >= s ? '0 2px 12px rgba(139,92,246,0.4)' : 'none' }}>
                  {s}
                </div>
                {s < 2 && <div className="w-16 h-0.5 rounded-full transition-all" style={{ background: step > s ? GRADIENT : 'rgba(255,255,255,0.1)' }} />}
              </React.Fragment>
            ))}
          </div>

          <Card border="subtle" className="p-8">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Step 1 — Account Details</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">First Name</label>
                      <input className={inputClass('firstName')} placeholder="John" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
                      {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Last Name</label>
                      <input className={inputClass('lastName')} placeholder="Doe" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
                      {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Gamertag / Username</label>
                    <input className={inputClass('username')} placeholder="xX_SquadUp_Xx" value={form.username} onChange={(e) => update('username', e.target.value)} />
                    {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Email Address</label>
                    <input className={inputClass('email')} type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Password</label>
                    <input className={inputClass('password')} type="password" placeholder="Min 8 characters" value={form.password} onChange={(e) => update('password', e.target.value)} />
                    {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Confirm Password</label>
                    <input className={inputClass('confirmPassword')} type="password" placeholder="Repeat password" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} />
                    {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
                  </div>
                  <button type="button" onClick={handleNext} className="w-full font-mono uppercase tracking-widest text-white text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 mt-2" style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
                    Next →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">Step 2 — Gaming Profile</p>
                  {errors.form && (
                    <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center">
                      {errors.form}
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-1 block">Date of Birth</label>
                    <input className={inputClass('dob')} type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} />
                    {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2 block">Primary Platform</label>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((p) => (
                        <button key={p} type="button" onClick={() => update('platform', p)}
                          className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-widest border transition-all"
                          style={form.platform === p ? { background: GRADIENT, borderColor: 'transparent', color: 'white' } : { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
                          {p}
                        </button>
                      ))}
                    </div>
                    {errors.platform && <p className="text-red-400 text-xs mt-1">{errors.platform}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2 block">Favourite Games <span className="normal-case text-white/30">(pick any)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {games.map((g) => (
                        <button key={g} type="button" onClick={() => toggleGame(g)}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono border transition-all"
                          style={form.games.includes(g) ? { background: GRADIENT_BG, borderColor: 'rgba(139,92,246,0.5)', color: 'white' } : { background: 'transparent', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 pt-2 border-t border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" checked={form.agreeAge} onChange={(e) => update('agreeAge', e.target.checked)} className="mt-0.5 accent-violet-500" />
                      <span className="text-xs text-text-muted group-hover:text-white/70 transition-colors">I confirm I am 13 years of age or older</span>
                    </label>
                    {errors.agreeAge && <p className="text-red-400 text-xs -mt-2 pl-6">{errors.agreeAge}</p>}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" checked={form.agreeTerms} onChange={(e) => update('agreeTerms', e.target.checked)} className="mt-0.5 accent-violet-500" />
                      <span className="text-xs text-text-muted group-hover:text-white/70 transition-colors">
                        I agree to the{' '}
                        <Link href="/terms-of-service" className="text-violet-400 hover:text-violet-300 underline">Terms of Service</Link>
                        {' '}and{' '}
                        <Link href="/privacy-policy" className="text-violet-400 hover:text-violet-300 underline">Privacy Policy</Link>
                      </span>
                    </label>
                    {errors.agreeTerms && <p className="text-red-400 text-xs -mt-2 pl-6">{errors.agreeTerms}</p>}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 font-mono uppercase tracking-widest text-white/60 text-sm py-3 rounded-lg font-bold border border-white/10 hover:border-white/20 transition-all">
                      ← Back
                    </button>
                    <button type="submit" disabled={loading}
                      className="flex-[2] font-mono uppercase tracking-widest text-white text-sm py-3 rounded-lg font-bold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: GRADIENT, boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}>
                      {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                  </div>
                </div>
              )}
            </form>

            <p className="text-center text-xs text-text-muted mt-6">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-violet-400 hover:text-violet-300 transition-colors">Sign in</Link>
            </p>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-xs text-text-muted mb-2">Want more perks?</p>
            <Link href="/membership" className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-violet-500/50 transition-all" style={{ background: GRADIENT_BG }}>
              View Membership Tiers →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
