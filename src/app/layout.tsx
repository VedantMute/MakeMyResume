import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const dmSans = Courier_Prime({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Make My Resume',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
