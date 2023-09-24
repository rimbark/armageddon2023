'use client'
import React, { useState } from 'react'
import { CartContext } from '@/src/components/CartContext/CartContext'
import { INearEarthObjects } from '@/src/types/types'

interface IProps {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<INearEarthObjects>({})
  const addAsteroidInCart = (date, orderedAsteroid) => {
    setCart((prevState: INearEarthObjects) => {
      if (date in prevState) {
        prevState[date].push(orderedAsteroid)
      } else {
        prevState[date] = [orderedAsteroid]
      }
      return { ...prevState }
    })
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
