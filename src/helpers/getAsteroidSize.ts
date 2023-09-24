export const getAsteroidSize = asteroidSize => {
  return asteroidSize >= 1000 ? 'huge' : asteroidSize >= 500 ? 'big' : 'small'
}
