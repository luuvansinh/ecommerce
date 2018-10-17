const endPoint = 'https://my-json-server.typicode.com/luuvansinh/json-data/'

const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
}

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

export default {
  getProducts
}
