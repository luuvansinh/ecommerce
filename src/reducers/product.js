
const initProducts = {
  products: [],
  filter: {
    number_products: 10,
    page: 0,
    total: 1,
  },
  refreshing: false,
}

const products = (products = initProducts, { type, payload }) => {
  switch (type) {
    case 'FETCH_PRODUCTS_SUCCEEDED':
      return {
        ...products,
        ...payload,
      }
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
