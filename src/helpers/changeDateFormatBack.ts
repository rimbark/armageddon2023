export const changeDateFormatBack = inputDate => {
  const months = [
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

  const parts = inputDate.split(' ')
  let day = parts[0]
  const month = months.indexOf(parts[1]) + 1
  const year = parts[2]

  const date = new Date(`${year}-${month}-${day}` + 'UTC')
  return date.toISOString().slice(0, 10)
}
