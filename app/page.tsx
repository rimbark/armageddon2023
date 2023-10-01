import { getAsteroids } from '@/actions/getAsteroids'
import Asteroids from '@/components/Asteroids/Asteroids'
import { AsteroidsCart } from '@/components/Cart/AsteroidsCart'
import React from 'react'
import s from './page.module.scss'

export default async function Main() {
  const asteroids = await getAsteroids()

  return (
    <div className={s.container}>
      <div>
        <h2 className={s.header}>Ближайшие подлёты астероидов</h2>
        <Asteroids asteroids={asteroids.near_earth_objects} />
      </div>
      <AsteroidsCart />
    </div>
  )
}
