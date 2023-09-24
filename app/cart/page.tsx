'use client'
import { useCartContext } from '@/components/../../src/context/CartContext/CartContext'
import AsteroidsLists from '@/components/AsteroidsLists/AsteroidsLists'
import React from 'react'
import s from './style/Cart.module.scss'

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
