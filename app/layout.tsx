import { Header } from '@/components/Header/Header'
import { CartContextProvider } from '@/context/CartContext/CartContextProvider'
import { DistanceContextProvider } from '@/context/DistanceContext/DistanceContextProvider'
import '@/styles/index.scss'
import type { Metadata } from 'next'
import React from 'react'
import { passionOne } from '@/app/passionOne.constants'
import { Footer } from '@/components/Footer/Footer'

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
