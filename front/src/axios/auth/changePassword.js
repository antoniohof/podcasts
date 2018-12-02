import http from '@/axios/http'
import { isAuthenticated } from '@/axios/isAuthenticated'

const post = ({ _headers, passwordConfirmation, password }) => {
  const headers = {
    ..._headers,
    'Content-Type': 'application/json',
    ...isAuthenticated()
  }

  const credentials = {
    password: password,
    password_confirmation: passwordConfirmation
  }

  const url = `/users/changePassword`

  return http
    .post(
      url,
      credentials,
      { headers }
    )
    .then(response => response.data)
}

export default post
