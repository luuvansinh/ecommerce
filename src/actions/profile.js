import {USER} from './type'


const fetchProducts = () => ({
  type: FETCH_PRODUCTS
})

const fetchSucess = user => ({
  type: FETCH_SUCCEEDED,
  user
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


const fetchUsers = () => ({
  type: USER
})