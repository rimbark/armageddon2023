import { CartContextProvider } from '@/components/CartContext/CartContextProvider'
import { DistanceContextProvider } from '@/components/DistanceContext/DistanceContextProvider'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import '@/styles/index.scss'
import type { Metadata } from 'next'
import { Passion_One } from 'next/font/google'
import React from 'react'

export const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-passion',
})

export const metadata: Metadata = {
  title: 'Armageddon2023',
  description: 'Created by rimBark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={passionOne.variable}>
      <body>
        <Header />
        <main>
          <DistanceContextProvider>
            <CartContextProvider>{children}</CartContextProvider>
          </DistanceContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
