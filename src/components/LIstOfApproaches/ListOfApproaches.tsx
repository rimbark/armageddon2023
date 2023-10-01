import {ICloseApproachDaum} from '@/types/types'
import s from './style/ListOfApproaches.module.scss'
import React from 'react'

interface IProps {
  approachData: ICloseApproachDaum
}

export const ListOfApproaches = ({approachData}: IProps) => {
  const missDistance = Number.parseInt(String(approachData.miss_distance.kilometers), 10)
  const relativeVelocity = Number.parseInt(
      String(approachData.relative_velocity.kilometers_per_hour),
      10,
  )

  return (
      <ul className={s.mainListBlock}>
        <li>
          <h2>Close approach time:</h2> <h2>{approachData.close_approach_date_full}</h2>
        </li>
        <li>
          <h3>Relative velocity -</h3>
          {relativeVelocity} km/h
        </li>
        <li>
          <h3>Distance to the Earth -</h3> {missDistance}
          km
        </li>
        <li>
          <h3>Orbiting body -</h3> {approachData.orbiting_body}
        </li>
      </ul>
  )
}
