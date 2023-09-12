import s from './page.module.scss'
import React from 'react'
import { ChoseDistanceDisplay } from '@/src/components/ChoseDistanceDisplay/ChoseDistanceDisplay'
import Asteroids from '@/src/components/Asteroids/Asteroids'
import { getAsteroids } from '@/src/actions/getAsteroids'

export default async function Home() {
  const asteroids = await getAsteroids()

  return (
    <div className={s.container}>
      <h2 className={s.header}>Ближайшие подлёты астероидов</h2>
      <ChoseDistanceDisplay />
      <Asteroids asteroids={asteroids.near_earth_objects} />
    </div>
  )
}
