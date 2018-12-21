const user = (user = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCEEDED': 
      return action.user
    default:
      return user
  }
}

const orders = (state = {
  orders: [],
  filter: {
    total: 0,
    perpage: 5,
    page: 1
  }
}, { type, payload }) => {
  switch (type) {
    case 'FETCH_ORDERS_SUCCEEDED':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

export {
  user,
  orders,
}
