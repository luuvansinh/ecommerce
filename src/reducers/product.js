
const products = (products = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCEEDED': 
      return action.products
    case 'FETCH_FAILED': 
      return []
    default:
      return products
  }
}

export default products