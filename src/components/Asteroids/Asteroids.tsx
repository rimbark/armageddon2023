'use client'
import { getAsteroidsNextDay, getNextDayDate } from '@/actions/getAsteroids'
import AsteroidsLists from '@/components/AsteroidsLists/AsteroidsLists'
import { Spinner } from '@/components/Spinner/Spinner'
import { INearEarthObjects } from '@/types/types'
import React, { useEffect, useState } from 'react'
import s from './style/Asteroids.module.scss'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import { ChoseDistanceDisplay } from '@/components/ChoseDistanceDisplay/ChoseDistanceDisplay'
import _ from 'lodash'

interface IProps {
  asteroids: INearEarthObjects
}

export default function Asteroids({ asteroids }: IProps) {
  const [currentDate, setCurrentDate] = useState(
    getNextDayDate(new Date().toISOString().split('T')[0]),
  )

  const [asteroidsArr, setAsteroidsArr] = useState<INearEarthObjects[]>([asteroids])
  const [isLoading, setIsLoading] = useState(false)

  let handleScroll = () => {
    console.log('СРАБОТКА ХЕНДЛ')
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !isLoading) {
      fetchData()
    }
  }

  handleScroll = _.throttle(handleScroll, 500)

  const fetchData = async () => {
    console.log('СРАБОТКА ФЕТЧ')
    try {
      console.log('СРАБОТКА ВНУТРИ ФЕТЧ')

      setIsLoading(true)
      const asteroidsNextDay = await getAsteroidsNextDay(currentDate)

      setAsteroidsArr(prevState => [...prevState, asteroidsNextDay.near_earth_objects])

      const nextDate = getNextDayDate(currentDate)

      setCurrentDate(nextDate)

      setIsLoading(false)
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log('СРАБОТКА ЭФФЕКТ')
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('ВЫХОД ИЗ ЭФФЕКТ')
    }
  }, [handleScroll])

  return (
    <div className={s.container}>
      {!asteroids ? (
        <ErrorMessage />
      ) : (
        <div>
          <ChoseDistanceDisplay />
          {asteroidsArr.map(date => (
            <AsteroidsLists
              key={Object.keys(date).toString()}
              date={Object.keys(date).toString()}
              asteroidsInDate={date}
              isCartPage={false}
            />
          ))}
          {isLoading && <Spinner />}
        </div>
      )}
    </div>
  )
}
