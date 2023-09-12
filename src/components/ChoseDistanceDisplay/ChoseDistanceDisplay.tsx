'use client'
import React from 'react'
import {
  Distance,
  useDistanceDisplayContext,
} from '@/src/components/Context/DistanceDisplayContext'

export const ChoseDistanceDisplay = () => {
  const { changeDistanceDisplay } = useDistanceDisplayContext()

  const swapDistanceDisplay = e => {
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
