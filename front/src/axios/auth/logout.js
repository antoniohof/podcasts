import http from '@/axios/http'
import { isAuthenticated } from '@/axios/isAuthenticated'

const post = () => {
  const headers = {
    'Content-Type': 'application/json',
    ...isAuthenticated()
  }

  const url = `/logout`

  return http
    .post(
      url,
      '',
      { headers }
    )
    .then(response => response.data)
}

export default post
