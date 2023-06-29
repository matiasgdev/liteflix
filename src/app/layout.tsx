import type {Metadata} from 'next'
import {BebasNeue} from '@/styles/fonts/bebas-neue'
import './globals.css'
import {MovieProvider} from '@/context/MoviesContext'

export const metadata: Metadata = {
  title: 'Liteflix',
  description: 'A great UI challengue of Litebox based on Netflix',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`relative ${BebasNeue.className} bg-black`}>
        <MovieProvider>{children}</MovieProvider>
      </body>
    </html>
  )
}
