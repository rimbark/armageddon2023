'use client'

import { INearEarthObjects } from '@/types/types'
import React, { createContext, useContext } from 'react'

interface ICartContext {
  cart: INearEarthObjects
  addAsteroidInCart: (date, orderedAsteroid) => void
}

export const CartContext = createContext<ICartContext>({
  cart: {},
  addAsteroidInCart() {},
})

export const useCartContext = () => useContext(CartContext)
