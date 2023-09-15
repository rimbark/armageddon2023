'use client'

import React, { createContext, useContext } from 'react'

export enum Distance {
  KILOMETERS,
  LUNAR_ORBITS,
}

interface IDistanceContext {
  distanceIn: Distance
  changeDistanceDisplay: (distanceView: Distance) => void
}

export const DistanceDisplayContext = createContext<IDistanceContext>({
  distanceIn: Distance.KILOMETERS,
  changeDistanceDisplay() {},
})

export const useDistanceDisplayContext = () => useContext(DistanceDisplayContext)
