import { getAsteroidById } from '@/actions/getAsteroids'
import { IsDangerous } from '@/components/IsDangerous/IsDangerous'
import { ListOfApproaches } from '@/components/LIstOfApproaches/ListOfApproaches'
import { getAsteroidName } from '@/helpers/getAsteroidName'
import { getAsteroidSize } from '@/helpers/getAsteroidSize'
import { getDateAndIdFromParams } from '@/helpers/getDateAndIdFromParams'
import asteroid from '@/public/images/asteroid.svg'
import cn from 'clsx'
import Image from 'next/image'
import React from 'react'
import s from './style/AsteroidInfo.module.scss'
import { passionOne } from '@/app/passionOne.constants'
import { ICloseApproachDaum } from '@/types/types'

export const dynamic = 'force-dynamic'

interface IProps {
  params: {
    data: string
  }
}

export default async function AsteroidInfo({ params: { data } }: IProps) {
  const asteroidInfo = await getAsteroidById(getDateAndIdFromParams(data))
  const asteroidSize = !asteroidInfo
    ? 0
    : Number.parseInt(String(asteroidInfo.estimated_diameter.meters.estimated_diameter_max), 10)

  return (
    <div className={cn(s.container, passionOne.className)}>
      {!asteroidInfo ? (
        <div>Не удалось загрузить данные об астероиде!</div>
      ) : (
        <>
          <h2>Asteroid name - {getAsteroidName(asteroidInfo.name)}</h2>
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
            {asteroidInfo.close_approach_data.map((approachData: ICloseApproachDaum) => (
              <ListOfApproaches
                approachData={approachData}
                key={approachData.close_approach_date}
              />
            ))}
          </ul>
          <Image
            src={asteroid}
            alt={'asteroid'}
            className={cn(s.incomingAsteroid, s[getAsteroidSize(asteroidSize)])}
            priority
          />
        </>
      )}
    </div>
  )
}
