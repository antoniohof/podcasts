const getters = {
  isAuthenticated: state => state.auth.authenticated,
  userInfo: state => state.auth.user
}

export default getters
