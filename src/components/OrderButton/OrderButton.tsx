import React from 'react'
import s from './style/OrderButton.module.scss'
import { IAsteroidInfo } from '@/src/types/types'
import { useCartContext } from '@/src/components/CartContext/CartContext'

interface IProps {
  asteroidInfo: IAsteroidInfo
}

export const OrderButton = ({ asteroidInfo }: IProps) => {
  const { cart, addAsteroidInCart } = useCartContext()

  return (
    <div className={s.container}>
      {cart.some(asteroid => asteroid.id === asteroidInfo.id) ? (
        <button disabled>В КОРЗИНЕ</button>
      ) : (
        <button onClick={() => addAsteroidInCart(asteroidInfo)}>ЗАКАЗАТЬ</button>
      )}
    </div>
  )
}