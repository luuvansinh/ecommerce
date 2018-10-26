const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH'
}

export default {
  endPoint: 'https://my-json-server.typicode.com/luuvansinh/mock-data',
  // endPoint: 'https://greengrocer.herokuapp.com/api',
  methods: METHODS,

  common: {
    login: () => ({}),
    register: () => ({}),
  },

  product: {
    all: () => ({
      url: '/products',
      method: METHODS.get
    }),
    show: (id) => ({
      url: `/products/${id}`,
      method: METHODS.get
    })
  },

  category: {
    all: () => ({
      url: '/categories',
      method: METHODS.get
    }),
    show: (id) => ({
      url: `/categories/${id}`,
      method: METHODS.get, 
    }),
  },

  promotion: {
    all: () => ({
      url: '/promotions',
      method: METHODS.get
    }),
    show: (id) => ({
      url: `/promotions/${id}`,
      method: METHODS.get,
    })
  }
}