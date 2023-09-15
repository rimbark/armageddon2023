'use client'
import React from 'react'
import s from './style/Cart.module.scss'
import { List } from '@/src/components/List/List'
import { useCartContext } from '@/src/components/CartContext/CartContext'
import { IAsteroidInfo } from '@/src/types/types'

export default function Cart() {
  const { cart } = useCartContext()
  return (
    <div className={s.container}>
      <h2 className={s.header}>Заказ отправлен!</h2>
      {cart.map((asteroidInfo: IAsteroidInfo, index) => (
        <List asteroidInfo={asteroidInfo} key={index} isCartPage={true} />
      ))}
    </div>
  )
}
