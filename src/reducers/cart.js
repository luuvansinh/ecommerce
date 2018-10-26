const cart = (cart = [], action) => {
  switch (action.type) {
    case 'FETCH_CART_SUCCEEDED': 
      return action.cart
    default:
      return cart
  }
}

export default cart