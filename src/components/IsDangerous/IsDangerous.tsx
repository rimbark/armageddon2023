import dangerous from '@/public/images/dangerous.svg'
import Image from 'next/image'
import React from 'react'
import s from './style/IsDangerous.module.scss'

interface IProps {
  isDangerous: boolean
  isAbout: boolean
}

export const IsDangerous = ({ isDangerous, isAbout }: IProps) => {
  return (
    <>
      {isDangerous && (
        <div className={s.container}>
          <Image src={dangerous} alt={'dangerous asteroid'} className={s.blinkingImage} />
        </div>
      )}
      {isAbout ? (isDangerous ? null : 'Not dangerous') : null}
    </>
  )
}
