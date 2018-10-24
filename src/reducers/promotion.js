
const promotions = (promotions = [], action) => {
  switch (action.type) {
    case 'FETCH_PROMOTIONS_SUCCEEDED': 
      return action.promotions
    default:
      return promotions
  }
}

export default promotions