import React from 'react'
import s from './style/ItemNameAndSize.module.scss'
import { getAsteroidName } from '@/helpers/getAsteroidName'

interface IProps {
  size: number
  name: string
}

const ItemNameAndSize = ({ size, name }: IProps) => {
  return (
    <div>
      <div className={s.nameStyle}>{getAsteroidName(name)}</div>
      <div>
        &Oslash;
        {Number.parseInt(String(size), 10)}
      </div>
    </div>
  )
}

export default ItemNameAndSize
