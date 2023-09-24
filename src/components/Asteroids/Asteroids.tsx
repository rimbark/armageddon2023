'use client'
import { getAsteroidsNextDay, getNextDayDate } from '@/actions/getAsteroids'
import AsteroidsLists from '@/components/AsteroidsLists/AsteroidsLists'
import { Spinner } from '@/components/Spinner/Spinner'
import { INearEarthObjects } from '@/types/types'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import s from './style/Asteroids.module.scss'

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
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !isLoading) {
      fetchData()
    }
  }
  handleScroll = _.throttle(handleScroll, 500)
  const fetchData = async () => {
    try {
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
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={s.container}>
      <div>
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
    </div>
  )
}
