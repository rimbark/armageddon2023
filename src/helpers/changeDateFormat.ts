import { monthNames } from '@/helpers/date.constants'

export const changeDateFormat = originalDate => {
  const dateObject = new Date(originalDate)
  const day = dateObject.getDate()
  const monthIndex = dateObject.getMonth()

  const month = monthNames[monthIndex]
  const year = dateObject.getFullYear()

  return `${day} ${month} ${year}`
}
