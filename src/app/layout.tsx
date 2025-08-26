import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeLLiiX',
  description: 'TeLLiiX Portfolio',
  robots: 'index, follow',
  openGraph: {
    title: 'TeLLiiX',
    url: 'https://telliix.vercel.app',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'TeLLiiX',
  },
  icons: {
    icon: 'https://r2.fakecrime.bio/favicons/749c3444-8e1a-44af-b5aa-164234b1a6c6.webp',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#F97316',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://r2.fakecrime.bio" />
        <link rel="stylesheet" href="https://fakecrime.bio/_next/static/css/b3855a6f83ce7968.css" data-precedence="next" />
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
        <link rel="canonical" href="https://telliix.vercel.app" />
      </head>
      <body className={inter.className}>
        <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
        {children}
      </body>
    </html>
  )
}
