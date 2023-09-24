'use client'

import React, { createContext, useContext } from 'react'
import { INearEarthObjects } from '@/src/types/types'

interface ICartContext {
  cart: INearEarthObjects
  addAsteroidInCart: (date, orderedAsteroid) => void
}

export const CartContext = createContext<ICartContext>({
  cart: {},
  addAsteroidInCart() {},
})

export const useCartContext = () => useContext(CartContext)
