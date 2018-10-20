const endPoint = 'https://my-json-server.typicode.com/luuvansinh/json-data/'

const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

// get product
const url = 'https://my-json-server.typicode.com/luuvansinh/json-data/products'

function* getProducts() {
  const response = yield fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  const products = JSON.parse(response._bodyInit)
  console.log('PRODUCT saga', products)
  return products
}

// get user profile
// const url = 'https://my-json-server.typicode.com/luuvansinh/json-data/products'

function* getUser() {
  const response = yield fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  const user = JSON.parse(response._bodyInit)
  console.log("user")
  console.log('User saga', user)
  return user
}

export default {
  getProducts,
  getUser
}
