import { useCartContext } from '@/components/CartContext/CartContext'
import { IAsteroidInfo } from '@/types/types'
import React from 'react'
import s from './style/OrderButton.module.scss'

interface IProps {
  asteroidInfo: IAsteroidInfo
  date: string
}

export const OrderButton = ({ asteroidInfo, date }: IProps) => {
  const { cart, addAsteroidInCart } = useCartContext()

  const handleClick = e => {
    e.preventDefault()
    addAsteroidInCart(date, asteroidInfo)
  }

  return (
    <div className={s.container}>
      {cart[date]?.some(asteroid => asteroid.id === asteroidInfo.id) ? (
        <button disabled>В КОРЗИНЕ</button>
      ) : (
        <button onClick={handleClick}>ЗАКАЗАТЬ</button>
      )}
    </div>
  )
}
