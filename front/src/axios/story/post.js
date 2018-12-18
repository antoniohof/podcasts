import { services } from '@/axios/http'

const post = ({ url, params, _headers, data }) => {
  const headers = {
    ..._headers,
    'Content-Type': 'application/json'
  }

  return services(url)
    .post(
      params,
      data,
      { headers }
    )
    .then(response => response.data)
}

export default post
