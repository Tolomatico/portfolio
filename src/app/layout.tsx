

import Footer from '@/components/Footer'
import './globals.css'
import {Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'

const inter = Montserrat({ subsets: ['latin'], style: "normal", weight: ["300"] })

export const metadata = {
  title: 'Tomás Ballesty',
  description: 'Bienvenidos a mi portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-white dark:bg-black`}>
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  )
}
