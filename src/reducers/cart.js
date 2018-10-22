const cart = (cart = [], action) => {
  switch (action.type) {
    case 'FETCH_CART_SUCCEEDED': 
      return action.cart
    case 'FETCH_FAILED': 
      return []
    default:
      return cart
  }
}

export default cart