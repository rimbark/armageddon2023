import cn from 'clsx'
import React from 'react'
import styles from './style/Header.module.scss'
import { passionOne } from '@/app/layout'

export const Header = () => {
  const { container } = styles
  return (
    <header className={cn(container, passionOne.variable)}>
      <h1>ARMAGEDDON 2023</h1>
      <p>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
    </header>
  )
}
