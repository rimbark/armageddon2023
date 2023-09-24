export const getAsteroidName = (string: string) => {
  const openingBracket = '('
  const closingBracket = ')'

  const startIndex = string.indexOf(openingBracket)
  const endIndex = string.indexOf(closingBracket)

  if (startIndex === -1 || endIndex === -1) {
    return ''
  }

  return string.substring(startIndex + 1, endIndex)
}
