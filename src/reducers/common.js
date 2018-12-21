const app = (userInfo = { user: null, isLoggedIn: false }, { payload, type }) => {
  switch (type) {
    case 'LOGIN_SUCCEEDED':
      return {
        ...userInfo,
        ...payload,
      }
    default:
      return userInfo
  }
}

// export const logout

export default app
