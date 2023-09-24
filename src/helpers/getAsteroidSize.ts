export const getAsteroidSize = (asteroidSize: number) => {
  return asteroidSize >= 1000 ? 'huge' : asteroidSize >= 500 ? 'big' : 'small'
}
