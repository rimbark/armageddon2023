'use client'
import React, { useEffect, useState } from 'react'
import s from './style/Asteroids.module.scss'
import { useDistanceDisplayContext } from '@/src/components/Context/DistanceDisplayContext'
import { INearEarthObjects } from '@/src/types/types'
import AsteroidsLists from '@/src/components/AsteroidsLists/AsteroidsLists'
import { getAsteroidsNextDay, getNextDayDate } from '@/src/actions/getAsteroids'
import { Spinner } from '@/src/components/Spinner/Spinner'
import { AsteroidsCart } from '@/src/components/Cart/AsteroidsCart'

export default function Asteroids({ asteroids }: INearEarthObjects) {
  const { distanceIn } = useDistanceDisplayContext()
  const [currentDate, setCurrentDate] = useState(
    getNextDayDate(new Date().toISOString().split('T')[0]),
  )

  const [asteroidsArr, setAsteroidsArr] = useState<INearEarthObjects[]>([asteroids])
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState<any[]>([])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
      fetchData()
    }
  }

  const fetchData = async () => {
    console.log('fetchData')
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
  }, [currentDate])

  return (
    <div className={s.container}>
      <div>
        {asteroidsArr.map(date => (
          <AsteroidsLists
            key={Object.keys(date).toString()}
            date={Object.keys(date).toString()}
            asteroidsInDate={date}
            distanceIn={distanceIn}
            setCart={setCart}
          />
        ))}
        {isLoading && <Spinner />}
      </div>
      <AsteroidsCart cart={cart} />
    </div>
  )
}
