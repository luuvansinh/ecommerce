import { FETCH_FAILED, FETCH_SUCCEEDED } from '../actions/type'

const userReducers = (user = [], action) => {
  console.log('profile')
  console.log('ACTION', action)
  switch (action.type) {
    case FETCH_SUCCEEDED: 
      return action.user
    case FETCH_FAILED: 
      return []
    default:
      return user
  }
}

export default userReducers