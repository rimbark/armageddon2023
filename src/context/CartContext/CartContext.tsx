'use client'

import { IAsteroidInfo, INearEarthObjects } from '@/types/types'
import { createContext, useContext } from 'react'

interface ICartContext {
  cart: INearEarthObjects
  addAsteroidInCart: (date: string, orderedAsteroid: IAsteroidInfo) => void
}

export const CartContext = createContext<ICartContext>({
  cart: {},
  addAsteroidInCart() {},
})

export const useCartContext = () => useContext(CartContext)
