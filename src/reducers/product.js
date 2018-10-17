import { FETCH_FAILED, FETCH_SUCCEEDED } from '../actions/type'

const productReducers = (products = [], action) => {
  console.log('ACTION', action)
  switch (action.type) {
    case FETCH_SUCCEEDED: 
      return action.products
    case FETCH_FAILED: 
      return []
    default:
      return products
  }
}

export default productReducers