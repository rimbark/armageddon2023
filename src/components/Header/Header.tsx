import cn from 'clsx'
import React from 'react'
import s from './style/Header.module.scss'
import { passionOne } from '@/app/layout'
import Link from 'next/link'

export const Header = () => {
  return (
    <Link href={'/'} className={s.headerLink}>
      <header className={cn(s.container, passionOne.variable)}>
        <h1>ARMAGEDDON 2023</h1>
        <p>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
      </header>
    </Link>
  )
}
