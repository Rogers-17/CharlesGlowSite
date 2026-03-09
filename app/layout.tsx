import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'CharlesGLow | Professional Makeup Artist Services',
  description: 'Professional makeup artist specializing in bridal, editorial, and special occasion makeup. Transform your look for weddings, birthdays, photoshoots, and more. Book your appointment today.',
  keywords: ['makeup artist', 'bridal makeup', 'wedding makeup', 'professional makeup', 'birthday makeup', 'photoshoot makeup', 'CharlesGLow', 'New York makeup artist', 'occasion makeup', 'editorial makeup'],
  authors: [{ name: 'CharlesGLow' }],
  creator: 'CharlesGLow',
  publisher: 'CharlesGLow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://charlesglow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CharlesGLow | Professional Makeup Artist Services',
    description: 'Professional makeup artist specializing in bridal, editorial, and special occasion makeup. Book your appointment today.',
    url: 'https://charlesglow.com',
    siteName: 'CharlesGLow',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'CharlesGLow Professional Makeup Artist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CharlesGLow | Professional Makeup Artist Services',
    description: 'Professional makeup artist specializing in bridal, editorial, and special occasion makeup.',
    images: ['/images/hero-bg.jpg'],
    creator: '@charlesglow',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a1614' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1614' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
