
const promotions = (promotions = [], action) => {
  switch (action.type) {
    case 'FETCH_PROMOTIONS_SUCCEEDED': 
      return action.promotions
    case 'FETCH_FAILED': 
      return []
    default:
      return promotions
  }
}

export default promotions