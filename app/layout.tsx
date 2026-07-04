import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Greylink Construction Nigeria Limited | Building Nigeria\'s Future',
  description:
    'Greylink Construction is a premier Nigerian construction company delivering engineering excellence across commercial, industrial, civil and residential projects. 20+ years of trusted expertise.',
  keywords: [
    'construction Nigeria',
    'civil engineering',
    'road construction',
    'industrial projects',
    'Greylink Construction',
    'building contractor Nigeria',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
