import { ListItem } from '@/components/ListItem/ListItem'
import { IAsteroidInfo, INearEarthObjects } from '@/types/types'
import React from 'react'

interface IProps {
  date: string
  asteroidsInDate: INearEarthObjects
  isCartPage: boolean
}

export default function AsteroidsLists({ date, asteroidsInDate, isCartPage }: IProps) {
  return (
    <>
      {asteroidsInDate[date].map((asteroidInfo: IAsteroidInfo, index) => (
        <ListItem asteroidInfo={asteroidInfo} key={index} isCartPage={isCartPage} date={date} />
      ))}
    </>
  )
}
