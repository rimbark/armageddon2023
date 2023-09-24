import React from 'react'
import s from './style/List.module.scss'
import { changeDateFormat } from '@/src/helpers/changeDateFormat'
import { IAsteroidInfo, ICloseApproachDaum } from '@/src/types/types'
import { formattedText } from '@/src/helpers/formattedText'
import Image from 'next/image'
import arrow from '@/src/public/images/arrow.svg'
import asteroid from '@/src/public/images/asteroid.svg'
import cn from 'clsx'
import { getAsteroidName } from '@/src/helpers/getAsteroidName'
import { OrderButton } from '@/src/components/OrderButton/OrderButton'
import { useDistanceDisplayContext } from '@/src/components/DistanceContext/DistanceDisplayContext'
import Link from 'next/link'
import { IsDangerous } from '@/src/components/IsDangerous/IsDangerous'
import { changeDateFormatBack } from '@/src/helpers/changeDateFormatBack'

interface IProps {
  asteroidInfo: IAsteroidInfo
  isCartPage: boolean
  date?: string
}

export const List = ({ asteroidInfo, isCartPage, date }: IProps) => {
  const { distanceIn } = useDistanceDisplayContext()

  const formattedDate = isCartPage ? changeDateFormatBack(date) : date

  return (
    <Link href={`${formattedDate}-${asteroidInfo.id}`} className={s.linkBlock}>
      <div className={s.container} tabIndex={0}>
        <div>
          <h2>{isCartPage ? date : changeDateFormat(date)}</h2>
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
          {!isCartPage && <OrderButton asteroidInfo={asteroidInfo} date={changeDateFormat(date)} />}
          <IsDangerous
            isDangerous={asteroidInfo.is_potentially_hazardous_asteroid}
            isAbout={false}
          />
        </div>
      </div>
    </Link>
  )
}
