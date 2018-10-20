const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH'
}

export default {
  endPoint: 'https://my-json-server.typicode.com/luuvansinh/json-data/',
  methods: METHODS,

  common: {
    login: () => ({}),
    register: () => ({}),
  },

  product: {
    all: () => ({
      url: '/products',
      method: METHODS.get
    })
  },

  category: {
    all: () => ({
      url: '/categories',
      method: METHODS.get
    })
  },

  promotion: {
    all: () => ({
      url: '/promotions',
      method: METHODS.get
    })
  }
}