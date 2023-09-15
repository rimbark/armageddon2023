import { Distance } from '@/src/components/DistanceContext/DistanceDisplayContext'
import { IMissDistance } from '@/src/types/types'

interface IProps {
  distance: IMissDistance
  distanceIn: Distance
}

export const formattedText = ({ distance, distanceIn }: IProps) => {
  let isLunarOrbits = true
  let incomeDistance = parseInt(distance.lunar)

  if (distanceIn === Distance.KILOMETERS) {
    isLunarOrbits = false
    incomeDistance = parseInt(distance.kilometers)
  }

  const formattedDistance = incomeDistance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  const variant1 = isLunarOrbits ? ' лунная орбита' : ' километр'
  const variant2 = isLunarOrbits ? ' лунные орбиты' : ' километра'
  const variant3 = isLunarOrbits ? ' лунных орбит' : ' километров'

  if (incomeDistance % 10 === 1 && incomeDistance % 100 !== 11) {
    return formattedDistance + variant1
  } else if (
    [2, 3, 4].includes(incomeDistance % 10) &&
    ![12, 13, 14].includes(incomeDistance % 100)
  ) {
    return formattedDistance + variant2
  } else {
    return formattedDistance + variant3
  }
}
