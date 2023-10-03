import React from 'react'
import Image from 'next/image'
import asteroid from '@/public/images/asteroid.svg'
import cn from 'clsx'
import s from './style/ItemImage.module.scss'

interface IProps {
  sizeInMeters: number
}

const ItemImage = ({ sizeInMeters }: IProps) => {
  return (
    <>
      <Image
        src={asteroid}
        alt={'asteroid display size'}
        className={cn(sizeInMeters < 500 ? s.bigAsteroid : s.hugeAsteroid)}
      />
    </>
  )
}

export default ItemImage;