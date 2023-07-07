import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishant Aanjaney Jalan | Portfolio',
  description: 'I\'m Nishant Aanjaney Jalan. An aspiring Full Stack Developer and experienced Android Developer based in India and UK',
  keywords: 'nishant aanjaney jalan, Nishant Jalan, portfolio, personal website, android, full stack, imperial college london',
  authors: [
    {
      name: 'Nishant Aanjaney Jalan',
      url: 'https://github.com/cybercoder-naj'
    }
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Nishant Aanjaney Jalan | Portfolio',
    siteName: 'Nishant Aanjaney Jalan | Portfolio',
    description: 'I\'m Nishant Aanjaney Jalan. An aspiring Full Stack Developer and experienced Android Developer based in India and UK',
    images: [{ url: 'https://cybercoder-naj.github.io/assets/nishant.png'}],
    url: 'https://cybercoder-naj.github.io',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-nero text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
