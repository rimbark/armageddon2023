import asteroid from '@/public/images/asteroid.svg'
import Image from 'next/image'
import React from 'react'
import s from './style/Spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={s.container}>
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
    </div>
  )
}
