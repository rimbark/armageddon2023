import React from 'react'
import s from './style/Spinner.module.scss'
import Image from 'next/image'
import asteroid from '@/src/public/images/asteroid.svg'

export const Spinner = () => {
  return (
    <div className={s.container}>
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
      <Image src={asteroid} alt={'Loading...'} className={s.asteroid} />
    </div>
  )
}
