import { List } from '@/components/List/List'
import { IAsteroidInfo, INearEarthObjects } from '@/types/types'
import React from 'react'

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
