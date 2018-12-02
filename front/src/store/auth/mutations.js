import i18n from '@/assets/js/i18n'

const mutations = {
  setAuthenticated (state) {
    state.auth.authenticated = true
  },
  setNotAuthenticated (state) {
    state.auth.authenticated = false
  },
  setToken (state, token) {
    state.auth.token = token
    localStorage.setItem('jwt-token', token)
  },
  removeToken (state) {
    state.auth.token = null
    localStorage.removeItem('jwt-token')
  },
  saveUser (state, user) {
    console.warn('save user', user)
    state.auth.user = user
    i18n.locale = user.lang
  },
  removeUser (state) {
    state.auth.user = null
  }
}

export default mutations
