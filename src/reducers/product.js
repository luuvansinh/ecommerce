
const products = (products = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCEEDED':
      return action.products
    default:
      return products
  }
}

const product = (product = null, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL':
      return action.product
    case 'CLEAR_PRODUCT':
      return null
    default:
      return product
  }
}

export {
  products,
  product,
}
