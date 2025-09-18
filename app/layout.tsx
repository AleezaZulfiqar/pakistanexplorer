import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trektips',
  description: 'Discover the best travel and adventure tips with Trektips!',
  icons: {
    icon: '/images/logo.png.png',   // 👈 public/logo.png me tumhara logo hona chahiye
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
