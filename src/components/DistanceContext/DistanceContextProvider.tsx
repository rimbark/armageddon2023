'use client'
import {
  Distance,
  DistanceDisplayContext,
} from '@/components/DistanceContext/DistanceDisplayContext'
import React, { useState } from 'react'

interface IProps {
  children: React.ReactNode
}

export const DistanceContextProvider = ({ children }: IProps) => {
  const [distanceIn, setDistanceIn] = useState<Distance>(Distance.KILOMETERS)
  const changeDistanceDisplay = (distance: Distance) => {
    setDistanceIn(prevDistance => (prevDistance === distance ? prevDistance : distance))
  }

  return (
    <DistanceDisplayContext.Provider
      value={{
        distanceIn,
        changeDistanceDisplay,
      }}
    >
      {children}
    </DistanceDisplayContext.Provider>
  )
}
