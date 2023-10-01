import { Distance } from '@/components/../context/DistanceContext/DistanceDisplayContext'
import { IMissDistance } from '@/types/types'

interface IProps {
  distance: IMissDistance
  distanceIn: Distance
}

export const formattedText = ({ distance, distanceIn }: IProps) => {
  let isLunarOrbits = true
  let incomeDistance = Number.parseInt(distance.lunar, 10)

  if (distanceIn === Distance.KILOMETERS) {
    isLunarOrbits = false
    incomeDistance = Number.parseInt(distance.kilometers, 10)
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
  }
  return formattedDistance + variant3
}
