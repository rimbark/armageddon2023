'use client'
import React from 'react'
import s from './style/Cart.module.scss'
import { useCartContext } from '@/src/components/CartContext/CartContext'
import AsteroidsLists from '@/src/components/AsteroidsLists/AsteroidsLists'

export default function Cart() {
  const { cart } = useCartContext()

  return (
    <div className={s.container}>
      <h2 className={s.header}>Заказ отправлен!</h2>
      {Object.keys(cart).map(date => (
        <AsteroidsLists key={date} date={date} asteroidsInDate={cart} isCartPage={true} />
      ))}
    </div>
  )
}
