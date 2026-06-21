import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Strudl',
  description: 'Join the Strudl loyalty network. Grow your café with digital stamp cards, real-time analytics, and customer insights.',
  icons: { icon: '/Logo_Strudl_no_Background.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
