import React from 'react'
import s from './style/IsDangerous.module.scss'
import Image from 'next/image'
import dangerous from '@/src/public/images/dangerous.svg'

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
