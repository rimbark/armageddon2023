import React from 'react'
import s from './style/ItemDistance.module.scss'
import { ICloseApproachDaum } from '@/types/types'
import { formattedText } from '@/helpers/formattedText'
import Image from 'next/image'
import arrow from '@/public/images/arrow.svg'
import { Distance } from '@/context/DistanceContext/DistanceDisplayContext'

interface IProps {
  approachData: ICloseApproachDaum[]
  distanceIn: Distance
}

export const ItemDistance = ({ approachData, distanceIn }: IProps) => {
  return (
    <div className={s.distanceContainer}>
      <div>
        {approachData.map((approachData: ICloseApproachDaum) =>
          formattedText({ distance: approachData.miss_distance, distanceIn }),
        )}
      </div>
      <Image src={arrow} alt={'distance arrow'} />
    </div>
  )
}
