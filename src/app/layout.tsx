import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeLLiiX',
  description: 'TeLLiiX Portfolio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#F97316',
  robots: 'index, follow',
  copyright: 'TeLLiiX 2025 — All Rights reserved',
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
        <link rel="preload" as="script" fetchPriority="low" href="https://fakecrime.bio/_next/static/chunks/webpack-fe9cde42bdfb734f.js" />
        <script src="https://fakecrime.bio/_next/static/chunks/fd9d1056-7576fb3d227909e3.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/2117-dbf5c27ac025a4d9.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/main-app-5294d1645fe5526e.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/4438-1f11f69e57b8ccf9.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/app/layout-c74eed1f67892b1c.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/2972-802eba246924dcaa.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/8669-5beb074b35a9f60a.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/app/error-e6dc681b8b1a40b2.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/app/not-found-099039a3d6da7483.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/aaea2bcf-b350f97bed25f4e3.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/4123-5829a6358d86a6cf.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/3145-63277cd0aade1d55.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/2312-5aea16d403ae9d73.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/9290-7a66817a11cb5b56.js" async type="text/javascript"></script>
        <script src="https://fakecrime.bio/_next/static/chunks/app/%5Bslug%5D/page-3d30367fe658c06a.js" async type="text/javascript"></script>
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
        <link rel="canonical" href="https://telliix.vercel.app" />
        <script src="https://fakecrime.bio/_next/static/chunks/polyfills-42372ed130431b0a.js" noModule type="text/javascript"></script>
      </head>
      <body className={inter.className}>
        <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
        {children}
      </body>
    </html>
  )
}
