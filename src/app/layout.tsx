import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'],style:"normal",weight:["300"] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
