import { INearEarthObjects } from '@/types/types'

export const getCartSIze = (cart: INearEarthObjects) => {
  let cartSize = 0
  Object.keys(cart).forEach(date => (cartSize += cart[date].length))
  return cartSize
}
