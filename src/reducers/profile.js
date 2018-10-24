const userReducers = (user = [], action) => {
  console.log('ACTION', action)
  switch (action.type) {
    case 'FETCH_USER_SUCCEEDED': 
      return action.user
    default:
      return user
  }
}

export default userReducers