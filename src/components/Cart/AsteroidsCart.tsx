'use client'
import { useCartContext } from '@/components/CartContext/CartContext'
import { getAsteroidsCartSize } from '@/helpers/getAsteroidsCartSize'
import { getCartSIze } from '@/helpers/getCartSIze'
import cn from 'clsx'
import Link from 'next/link'
import React from 'react'
import s from './style/AsteroidsCart.module.scss'

export const AsteroidsCart = () => {
  const { cart } = useCartContext()

  const cartLength = getCartSIze(cart)

  return (
    <div className={cn(s.container, cartLength ? null : s.empty)}>
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
