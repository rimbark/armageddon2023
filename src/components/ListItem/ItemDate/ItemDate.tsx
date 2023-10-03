import React from 'react'
import { changeDateFormat } from '@/helpers/changeDateFormat'

interface IProps {
  date: string
  isConvert: boolean
}

export const ItemDate = ({ isConvert, date }: IProps) => {
  return (
    <div>
      <h2>{isConvert ? date : changeDateFormat(date)}</h2>
    </div>
  )
}
