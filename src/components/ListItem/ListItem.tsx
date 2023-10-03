import { IsDangerous } from '@/components/IsDangerous/IsDangerous'
import { OrderButton } from '@/components/OrderButton/OrderButton'
import { useDistanceDisplayContext } from '@/context/DistanceContext/DistanceDisplayContext'
import { changeDateFormat } from '@/helpers/changeDateFormat'
import { IAsteroidInfo } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import s from './style/ListItem.module.scss'
import { ItemDate } from '@/components/ListItem/ItemDate/ItemDate'
import { ItemDistance } from '@/components/ListItem/ItemDistance/ItemDistance'
import ItemImage from '@/components/ListItem/ItemImage/ItemImage'
import ItemNameAndSize from '@/components/ListItem/ItemNameAndSize/ItemNameAndSize'

interface IProps {
  asteroidInfo: IAsteroidInfo
  isCartPage: boolean
  date: string
}

export const ListItem = ({ asteroidInfo, isCartPage, date }: IProps) => {
  const { distanceIn } = useDistanceDisplayContext()

  const asteroidSize = asteroidInfo.estimated_diameter.meters.estimated_diameter_max

  return (
    <Link href={`${asteroidInfo.id}`} className={s.linkBlock}>
      <div className={s.container}>
        <ItemDate date={date} isConvert={isCartPage} />
        <div className={s.nameRow}>
          <ItemDistance approachData={asteroidInfo.close_approach_data} distanceIn={distanceIn} />
          <ItemImage sizeInMeters={asteroidSize} />
          <ItemNameAndSize size={asteroidSize} name={asteroidInfo.name} />
        </div>
        <div className={s.orderRow}>
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
