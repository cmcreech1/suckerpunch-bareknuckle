import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SuckerPunch Entertainment | BareKnuckle Fighting Division',
  description: 'Elite athletes competing at the highest level of bare-knuckle combat. SuckerPunch Entertainment - Athlete First Management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
