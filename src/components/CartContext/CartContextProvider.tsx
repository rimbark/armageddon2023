'use client'
import React, { useState } from 'react'
import { CartContext } from '@/src/components/CartContext/CartContext'
import { IAsteroidInfo } from '@/src/types/types'

interface IProps {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<IAsteroidInfo[]>([])
  const addAsteroidInCart = orderedAsteroid => {
    setCart(prevState => [...prevState, orderedAsteroid])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addAsteroidInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
