import React from 'react'
import { IAsteroidInfo, INearEarthObjects } from '@/src/types/types'
import { List } from '@/src/components/List/List'

interface AsteroidsListsProps {
  date: string
  asteroidsInDate: INearEarthObjects
  isCartPage: boolean
}

export default function AsteroidsLists({ date, asteroidsInDate, isCartPage }: AsteroidsListsProps) {
  return (
    <>
      {asteroidsInDate[date].map((asteroidInfo: IAsteroidInfo, index) => (
        <List asteroidInfo={asteroidInfo} key={index} isCartPage={isCartPage} date={date} />
      ))}
    </>
  )
}
