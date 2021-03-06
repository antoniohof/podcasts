import http from '@/axios/http'

const post = ({ _headers, email, password }) => {
  const headers = {
    ..._headers,
    'Content-Type': 'application/json'
  }

  const credentials = {
    email: email,
    password: password
  }

  const url = `/login`

  return http
    .post(
      url,
      credentials,
      { headers }
    )
    .then(response => response.data)
}

export default post
