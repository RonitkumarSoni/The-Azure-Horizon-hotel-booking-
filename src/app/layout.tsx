import type { Metadata } from 'next'
import './globals.css'
import SiteShell from '@/components/layout/SiteShell'
import ChatWidget from '@/components/chat/ChatWidget'

export const metadata: Metadata = {
  title: 'The Azure Horizon — Custom Windows & Doors, Orlando',
  description:
    "The Azure Horizon — Orlando's premier custom window and door installation. Third-generation craftsmanship for residential and commercial projects across Central Florida.",
  metadataBase: new URL('https://www.azurehorizon.com'),
  openGraph: {
    title: 'The Azure Horizon',
    description: 'Custom windows and doors, installed with conviction. Orlando, FL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <ChatWidget />
      </body>
    </html>
  )
}
