'use client'
import {
  Distance,
  useDistanceDisplayContext,
} from '@/context/DistanceContext/DistanceDisplayContext'
import React from 'react'

export const ChoseDistanceDisplay = () => {
  const { changeDistanceDisplay } = useDistanceDisplayContext()

  const swapDistanceDisplay: React.MouseEventHandler<HTMLInputElement> = (
    e: React.MouseEvent<HTMLInputElement>,
  ) => {
    e.currentTarget.id === 'km'
      ? changeDistanceDisplay(Distance.KILOMETERS)
      : changeDistanceDisplay(Distance.LUNAR_ORBITS)
  }

  return (
    <div>
      <input
        onClick={swapDistanceDisplay}
        type='radio'
        name='distance'
        id='km'
        defaultChecked={true}
      />
      <label htmlFor='km'>в километрах</label> |{' '}
      <input onClick={swapDistanceDisplay} type='radio' name='distance' id='lunar_orbit' />
      <label htmlFor='lunar_orbit'>в лунных орбитах</label>
    </div>
  )
}
