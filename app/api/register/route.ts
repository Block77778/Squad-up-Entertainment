import { NextRequest, NextResponse } from 'next/server'

// Temporary in-memory store until DATABASE_URL is configured
// Replace this entire file with the full Prisma version once DB is set up
const registrations: Array<{ username: string; email: string; createdAt: string }> = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, username, email, password, dob, platform, games } = body

    // Basic validation
    if (!firstName || !lastName || !username || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    // Check for duplicate email or username in temp store
    const emailExists = registrations.find((r) => r.email.toLowerCase() === email.toLowerCase())
    if (emailExists) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 })
    }

    const usernameExists = registrations.find((r) => r.username.toLowerCase() === username.toLowerCase())
    if (usernameExists) {
      return NextResponse.json({ error: 'This gamertag is already taken' }, { status: 409 })
    }

    // Store registration (in-memory — lost on redeploy until DB is connected)
    registrations.push({ username, email, createdAt: new Date().toISOString() })

    return NextResponse.json({
      success: true,
      user: { email, username },
    }, { status: 201 })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
