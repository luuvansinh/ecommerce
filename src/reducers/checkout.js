
const orderInfo = (state = null, { payload, type }) => {
  switch (type) {
    case 'ORDER':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

export {
  orderInfo,
}
