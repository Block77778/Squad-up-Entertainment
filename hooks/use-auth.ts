'use client'

import { useState, useEffect, useCallback } from 'react'

export interface AuthUser {
  username: string
  email: string
  firstName: string
  lastName: string
  membershipTier: string
}

const AUTH_KEY = 'squadup_user'

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
