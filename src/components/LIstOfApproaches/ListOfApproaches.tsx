import { ICloseApproachDaum } from '@/types/types'
import React from 'react'

interface IProps {
  approachData: ICloseApproachDaum
}

export const ListOfApproaches = ({ approachData }: IProps) => {
  const missDistance = parseInt(String(approachData.miss_distance.kilometers))
  const relativeVelocity = parseInt(String(approachData.relative_velocity.kilometers_per_hour))

  return (
    <>
      <li>
        <h2>Close approach time:</h2> {approachData.close_approach_date_full}
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
    </>
  )
}
