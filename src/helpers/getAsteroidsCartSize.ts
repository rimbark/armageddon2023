export const getAsteroidsCartSize = (count: number) => {
  const words = ['астероид', 'астероида', 'астероидов']
  let wordIndex

  if (count % 10 === 1 && count % 100 !== 11) {
    wordIndex = 0
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    wordIndex = 1
  } else {
    wordIndex = 2
  }

  return `${count} ${words[wordIndex]}`
}
