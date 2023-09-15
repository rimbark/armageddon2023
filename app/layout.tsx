import '@/src/styles/index.scss'
import type { Metadata } from 'next'
import { Passion_One } from 'next/font/google'
import { Header } from '@/src/components/Header/Header'
import React from 'react'
import { CartContextProvider } from '@/src/components/CartContext/CartContextProvider'
import { DistanceContextProvider } from '@/src/components/DistanceContext/DistanceContextProvider'

export const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-passion',
})

export const metadata: Metadata = {
  title: 'Armageddon2023',
  description: 'Created by rimBark',
}
// TODO: вынести по ссылкам заголовки списка и корзины
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <DistanceContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </DistanceContextProvider>
      </body>
    </html>
  )
}
