'use client'
import React from 'react'
import s from './style/AsteroidsCart.module.scss'
import { getAsteroidsCartSize } from '@/src/helpers/getAsteroidsCartSize'
import Link from 'next/link'
import { useCartContext } from '@/src/components/CartContext/CartContext'

export const AsteroidsCart = () => {
  const { cart } = useCartContext()

  const cartLength = cart.length

  return (
    <div className={s.container}>
      <div>
        <h4>Корзина</h4>
        <span>{getAsteroidsCartSize(cartLength)}</span>
      </div>
      <Link className={s.sentOrder} href={'cart'}>
        Отправить
      </Link>
    </div>
  )
}
