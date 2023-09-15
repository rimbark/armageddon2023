'use client'

import React, { createContext, useContext } from 'react'
import { IAsteroidInfo } from '@/src/types/types'

interface ICartContext {
  cart: IAsteroidInfo[]
  addAsteroidInCart: (orderedAsteroid) => void
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addAsteroidInCart() {},
})

export const useCartContext = () => useContext(CartContext)
