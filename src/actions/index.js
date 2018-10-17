import { FETCH_PRODUCTS, FETCH_SUCCEEDED, FETCH_FAILED } from './type'

const fetchProducts = () => ({
  type: FETCH_PRODUCTS
})

const fetchSucess = products => ({
  type: FETCH_SUCCEEDED,
  products
})

const fetchFailed = error => ({
  type: FETCH_FAILED,
  error
})

export {
  fetchProducts,
  fetchSucess,
  fetchFailed,
}