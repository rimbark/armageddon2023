import React from 'react'
import s from './style/AsteroidsCart.module.scss'
import { getAsteroidsCartSize } from '@/src/helpers/getAsteroidsCartSize'

interface IProps {
  cart: any[]
}

export const AsteroidsCart = ({ cart }: IProps) => {
  const cartLength = cart.length
  return (
    <div className={s.container}>
      <div>
        <h4>Корзина</h4>
        <span>{getAsteroidsCartSize(cartLength)}</span>
      </div>
      <button>Отправить</button>
    </div>
  )
}
