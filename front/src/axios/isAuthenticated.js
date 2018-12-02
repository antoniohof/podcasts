export const isAuthenticated = () => ({
  'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
})
