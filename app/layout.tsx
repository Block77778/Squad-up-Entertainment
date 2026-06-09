import type { Metadata } from 'next'
import { Barlow, Exo_2, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MusicPlayer } from '@/components/music-player'
import './globals.css'

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow"
});

const exo2 = Exo_2({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-exo2"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: 'Squad Up Entertainment - Gaming Platform',
  description: 'Join the ultimate gaming community. Stream live, compete in tournaments, discover music, and earn with Squad Up.',
  generator: 'v0.app',
  icons: {
    icon: '/squad-up-logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${barlow.variable} ${exo2.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          {children}
          <MusicPlayer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
