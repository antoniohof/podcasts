import http from '@/axios/http'
import { isAuthenticated } from '@/axios/isAuthenticated'

const fetch = () => {
  const _headers = {
    'Content-Type': 'application/json',
    ...isAuthenticated()
  }
  const url = '/me'

  return http
    .get(
      url,
      { headers: _headers }
    )
    .then(response => response.data)
}

export default fetch
