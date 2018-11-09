
const app = (userInfo = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return action.userInfo
    default:
      return userInfo
  }
}

export default app
