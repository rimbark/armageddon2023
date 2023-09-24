import { getAsteroids } from '@/actions/getAsteroids'
import Asteroids from '@/components/Asteroids/Asteroids'
import { AsteroidsCart } from '@/components/Cart/AsteroidsCart'
import { ChoseDistanceDisplay } from '@/components/ChoseDistanceDisplay/ChoseDistanceDisplay'
import React from 'react'
import s from './page.module.scss'

export default async function Home() {
  const asteroids = await getAsteroids()

  return (
    <div className={s.container}>
      <div>
        <h2 className={s.header}>Ближайшие подлёты астероидов</h2>
        <ChoseDistanceDisplay />
        <Asteroids asteroids={asteroids.near_earth_objects} />
      </div>
      <AsteroidsCart />
    </div>
  )
}
