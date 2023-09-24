'use client'
import { CartContext } from '@/context/CartContext/CartContext'
import { IAsteroidInfo, INearEarthObjects } from '@/types/types'
import React, { useState } from 'react'

interface IProps {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<INearEarthObjects>({})

  const addAsteroidInCart = (date: string, orderedAsteroid: IAsteroidInfo) => {
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
