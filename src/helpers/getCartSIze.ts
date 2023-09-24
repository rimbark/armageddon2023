export const getCartSIze = cart => {
  let cartSize = 0
  Object.keys(cart).forEach(date => (cartSize += cart[date].length))
  return cartSize
}
