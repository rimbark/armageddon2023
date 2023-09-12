export const changeDateFormat = originalDate => {
  const dateObject = new Date(originalDate)
  const day = dateObject.getDate()
  const monthIndex = dateObject.getMonth()
  const monthNames = [
    'янв',
    'фев',
    'март',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сент',
    'окт',
    'ноя',
    'дек',
  ]
  const month = monthNames[monthIndex]
  const year = dateObject.getFullYear()

  return `${day} ${month} ${year}`
}
