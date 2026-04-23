import Footer from '@/components/Footer'
import './globals.css'
import {Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'
import { Metadata } from 'next'

const inter = Montserrat({ subsets: ['latin'], style: "normal", weight: ["300"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-ochre-phi-60.vercel.app/'),
  title: {
    default: 'Tomás Ballesty | Full Stack Developer',
    template: '%s | Tomás Ballesty',
  },
  description: 'Soy Tomás Ballesty, Full Stack Developer especializado en React, Next.js, Node.js y TypeScript. Tengo experiencia en desarrollo web full stack y aplicaciones dinámicas. Contáctame para tu próximo proyecto.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio', 'Desarrollador Web', 'Tomás Ballesty'],
  authors: [{ name: 'Tomás Ballesty' }],
  creator: 'Tomás Ballesty',
  publisher: 'Tomás Ballesty',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://portfolio-ochre-phi-60.vercel.app/',
    siteName: 'Tomás Ballesty',
    title: 'Tomás Ballesty | Full Stack Developer',
    description: 'Soy Tomás Ballesty, Full Stack Developer especializado en React, Next.js, TypeScript y más.',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tomás Ballesty - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomás Ballesty | Full Stack Developer',
    description: 'Full Stack Developer especializado en React, Next.js, TypeScript.',
    creator: '@tomasballesty',
    images: ['/og-image.jpeg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>

      <body className={`${inter.className} bg-white dark:bg-black`}>
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}