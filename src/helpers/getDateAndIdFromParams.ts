export const getDateAndIdFromParams = (inputParams: string) => {
  const date = inputParams.slice(0, 10)
  const id = Number(inputParams.slice(11))

  return { date, id }
}
