const METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH'
}

export default {
  endPoint: 'https://greengrocer.herokuapp.com/api',
  host: 'https://greengrocer.herokuapp.com',
  methods: METHODS,

  common: {
    login: () => ({
      url: '/login',
      method: METHODS.post,
    }),
    register: () => ({
      url: '/register',
      method: METHODS.post,
    }),
    me: () => ({
      url: '/userInfor',
      method: METHODS.get,
    }),
  },

  product: {
    all: () => ({
      url: '/products',
      method: METHODS.get
    }),
    show: (id) => ({
      url: `/products/${id}`,
      method: METHODS.get
    }),
    comment: () => ({
      url: '/comments',
      method: METHODS.post,
    }),
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
  },

  user: {
    detail: () => ({
      url: '/users',
      method: METHODS.get,
    })
  },

  order_product: {
    all: () => ({
      url: '/orders',
      method: METHODS.get,
    }),
    create: () => ({
      url: '/orders',
      method: METHODS.post,
    }),
    cancel: id => ({
      url: `/orders/${id}/cancel`,
      method: METHODS.put,
    }),
    orderNoLogin: () => ({
      url: '/ordersNologin',
      method: METHODS.post,
    }),
  }
}
