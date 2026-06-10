import { NextRequest, NextResponse } from 'next/server'

// Full auth-gated membership API coming once next-auth + DB is set up
export async function POST(req: NextRequest) {
  return NextResponse.json({ error: 'Membership upgrades coming soon' }, { status: 503 })
}

export async function GET() {
  return NextResponse.json({ membership: { tier: 'free' } }, { status: 200 })
}
