import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'values.tech — What Tech Actually Stands For',
  description: 'Holding tech companies, VCs, and executives accountable by surfacing what they actually stand for — based on public record.',
  openGraph: {
    title: 'values.tech — What Tech Actually Stands For',
    description: 'Holding tech companies, VCs, and executives accountable by surfacing what they actually stand for — based on public record.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'values.tech — What Tech Actually Stands For',
    description: 'Holding tech companies, VCs, and executives accountable by surfacing what they actually stand for.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-gray-900`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
