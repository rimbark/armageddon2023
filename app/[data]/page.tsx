import React from 'react'
import s from './style/AsteroidInfo.module.scss'
import Image from 'next/image'
import asteroid from '@/src/public/images/asteroid.svg'
import { getDateAndIdFromParams } from '@/src/helpers/getDateAndIdFromParams'
import { getAsteroidById } from '@/src/actions/getAsteroids'
import { getAsteroidName } from '@/src/helpers/getAsteroidName'
import { passionOne } from '@/app/layout'
import cn from 'clsx'
import { IsDangerous } from '@/src/components/IsDangerous/IsDangerous'
import { ListOfApproaches } from '@/src/components/LIstOfApproaches/ListOfApproaches'
import { getAsteroidSize } from '@/src/helpers/getAsteroidSize'

interface IProps {
  params: {
    data: string
  }
}

export default async function AsteroidInfo({ params: { data } }: IProps) {
  const asteroidInfo = await getAsteroidById(getDateAndIdFromParams(data))
  const asteroidSize = parseInt(
    String(asteroidInfo.estimated_diameter.meters.estimated_diameter_max),
  )
  return (
    <div className={cn(s.container, passionOne.className)}>
      <h2>
        Asteroid name - <span>{getAsteroidName(asteroidInfo.name)}</span>
      </h2>
      <ul className={s.mainListBlock}>
        <li>
          <h3>Size -</h3>
          {asteroidSize} m
        </li>
        <li>
          <h3>Danger -</h3>
          <IsDangerous
            isDangerous={asteroidInfo.is_potentially_hazardous_asteroid}
            isAbout={true}
          />
        </li>
      </ul>
      <ul className={s.mainListBlock}>
        <h2>List of approaches:</h2>
        {asteroidInfo.close_approach_data.map(approachData => (
          <ListOfApproaches approachData={approachData} key={approachData.close_approach_date} />
        ))}
      </ul>
      <Image
        src={asteroid}
        alt={'asteroid'}
        className={cn(s.incomingAsteroid, s[getAsteroidSize(asteroidSize)])}
        priority
      />
    </div>
  )
}
