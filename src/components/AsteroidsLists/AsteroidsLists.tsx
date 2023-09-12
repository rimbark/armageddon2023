import React from 'react'
import s from './style/AsteroidsLists.module.scss'
import { IAsteroidInfo, ICloseApproachDaum, INearEarthObjects } from '@/src/types/types'
import { Distance } from '@/src/components/Context/DistanceDisplayContext'
import dangerous from '@/src/public/images/dangerous.svg'
import arrow from '@/src/public/images/arrow.svg'
import asteroid from '@/src/public/images/asteroid.svg'
import Image from 'next/image'
import { changeDateFormat } from '@/src/helpers/changeDateFormat'
import { formattedText } from '@/src/helpers/formattedText'
import cn from 'clsx'
import { getAsteroidName } from '@/src/helpers/getAsteroidName'

interface AsteroidsListsProps {
  date: string
  asteroidsInDate: INearEarthObjects
  distanceIn: Distance
}

export default function AsteroidsLists({ date, asteroidsInDate, distanceIn }: AsteroidsListsProps) {
  return (
    <>
      {asteroidsInDate[date].map((asteroidInfo: IAsteroidInfo, index) => (
        <div className={s.container} key={index}>
          <div>
            <h2>{changeDateFormat(date)}</h2>
          </div>
          <div className={s.secondRow}>
            <div className={s.distanceContainer}>
              <div>
                {asteroidInfo.close_approach_data.map((approachData: ICloseApproachDaum) =>
                  formattedText({ distance: approachData.miss_distance, distanceIn }),
                )}
              </div>
              <Image src={arrow} alt={'distance arrow'} />
            </div>
            <div>
              <Image
                src={asteroid}
                alt={'asteroid display size'}
                className={cn(
                  asteroidInfo.estimated_diameter.meters.estimated_diameter_max < 500
                    ? s.bigAsteroid
                    : s.hugeAsteroid,
                )}
              />
            </div>
            <div>
              <div className={s.nameStyle}>{getAsteroidName(asteroidInfo.name)}</div>
              <div>
                &Oslash;
                {parseInt(String(asteroidInfo.estimated_diameter.meters.estimated_diameter_max))}
              </div>
            </div>
          </div>
          <div className={s.thirdRow}>
            <button>ЗАКАЗАТЬ</button>
            {asteroidInfo.is_potentially_hazardous_asteroid && (
              <div>
                <Image src={dangerous} alt={'dangerous asteroid'} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
