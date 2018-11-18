
/**
 * Get total from list product
 *
 * @param {Array} cart list product
 */
const calculateTotal = (cart = []) => {
  return cart.length ? cart.map(item => item.quantity * item.price)
    .reduce((previous, current) => previous + current) : 0
}

export default {
  calculateTotal,
}
