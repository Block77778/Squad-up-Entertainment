import { Layout } from '@/components/layout'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'

export const metadata = {
  title: 'Sponsorships - Squad Up Gaming',
  description: 'Partner with Squad Up Entertainment for sponsorship opportunities',
}

export default function Sponsorship() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">SPONSORSHIPS</Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #a78bfa, #34d399)" }}>
            Become a Sponsor
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Partner with the leading competitive gaming platform and reach thousands of hardcore gamers.
          </p>
        </div>
      </div>

      {/* Content Placeholder */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Card border="subtle" className="p-12 text-center min-h-[400px] flex items-center justify-center">
            <div>
              <p className="text-text-secondary text-lg">
                Sponsorship opportunities page coming soon. Contact us for partnership inquiries.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
