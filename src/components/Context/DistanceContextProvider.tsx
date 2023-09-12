'use client'
import React, { useState } from 'react'
import { Distance, DistanceDisplayContext } from '@/src/components/Context/DistanceDisplayContext'

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
