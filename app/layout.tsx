import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Omar Elhelaly - Backend Developer',
  description: 'Building Powerful Backend Systems That Scale. Node.js, NestJS, and modern system architecture.',
  icons: {
    icon: '/omar-profile.jpg',
    apple: '/omar-profile.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/omar-profile.jpg" type="image/jpeg" />
      </head>
      <body className={sora.className} style={{ background: '#07070F', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}