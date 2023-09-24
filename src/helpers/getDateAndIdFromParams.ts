export const getDateAndIdFromParams = inputParams => {
  const date = inputParams.slice(0, 10)
  const id = Number(inputParams.slice(11))

  return { date, id }
}
