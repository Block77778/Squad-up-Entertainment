'use client'

import { useState, useEffect, useCallback } from 'react'

export interface AuthUser {
  username: string
  email: string
  firstName: string
  lastName: string
  membershipTier: string
}

interface StoredAccount {
  username: string
  email: string
  firstName: string
  lastName: string
  passwordHash: string
  membershipTier: string
  createdAt: string
}

const AUTH_KEY = 'squadup_user'
const ACCOUNTS_KEY = 'squadup_accounts'

// Hash password using Web Crypto API (works in browser + Vercel Edge)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + 'squadup_salt_2025')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function registerAccount(data: {
  username: string
  email: string
  firstName: string
  lastName: string
  password: string
}): Promise<{ success: boolean; error?: string }> {
  const stored = localStorage.getItem(ACCOUNTS_KEY)
  const accounts: StoredAccount[] = stored ? JSON.parse(stored) : []

  // Check duplicates
  if (accounts.find(a => a.email.toLowerCase() === data.email.toLowerCase())) {
    return { success: false, error: 'An account with this email already exists.' }
  }
  if (accounts.find(a => a.username.toLowerCase() === data.username.toLowerCase())) {
    return { success: false, error: 'This gamertag is already taken.' }
  }

  const passwordHash = await hashPassword(data.password)

  accounts.push({
    username: data.username,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    passwordHash,
    membershipTier: 'free',
    createdAt: new Date().toISOString(),
  })

  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
  return { success: true }
}

export async function loginAccount(
  email: string,
  password: string
): Promise<{ success: boolean; user?: AuthUser; error?: string }> {
  const stored = localStorage.getItem(ACCOUNTS_KEY)
  const accounts: StoredAccount[] = stored ? JSON.parse(stored) : []

  const account = accounts.find(a => a.email.toLowerCase() === email.toLowerCase())

  if (!account) {
    return { success: false, error: 'No account found with this email.' }
  }

  const passwordHash = await hashPassword(password)

  if (passwordHash !== account.passwordHash) {
    return { success: false, error: 'Incorrect password. Please try again.' }
  }

  return {
    success: true,
    user: {
      username: account.username,
      email: account.email,
      firstName: account.firstName,
      lastName: account.lastName,
      membershipTier: account.membershipTier,
    },
  }
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_KEY)
      if (stored) setUser(JSON.parse(stored))
    } catch {}
    setLoading(false)
  }, [])

  const signIn = useCallback((userData: AuthUser) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData))
    setUser(userData)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_KEY)
    setUser(null)
    window.location.href = '/'
  }, [])

  return { user, loading, signIn, signOut, isLoggedIn: !!user }
}
