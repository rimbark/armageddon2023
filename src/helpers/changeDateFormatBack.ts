import { monthNames } from '@/helpers/date.constants'

export const changeDateFormatBack = (inputDate: string) => {
  const parts = inputDate.split(' ')
  const day = parts[0]
  const month = monthNames.indexOf(parts[1]) + 1
  const year = parts[2]

  const date = new Date(`${year}-${month}-${day}` + 'UTC')
  return date.toISOString().slice(0, 10)
}
