import { useDistanceDisplayContext } from '@/components/DistanceContext/DistanceDisplayContext'
import { IsDangerous } from '@/components/IsDangerous/IsDangerous'
import { OrderButton } from '@/components/OrderButton/OrderButton'
import { changeDateFormat } from '@/helpers/changeDateFormat'
import { changeDateFormatBack } from '@/helpers/changeDateFormatBack'
import { formattedText } from '@/helpers/formattedText'
import { getAsteroidName } from '@/helpers/getAsteroidName'
import arrow from '@/public/images/arrow.svg'
import asteroid from '@/public/images/asteroid.svg'
import { IAsteroidInfo, ICloseApproachDaum } from '@/types/types'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from './style/List.module.scss'

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
