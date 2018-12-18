import { services } from '@/axios/http'

const put = ({ url, params, _headers, data }) => {
  const headers = {
    ..._headers,
    'Content-Type': 'application/json'
  }

  return services(url)
    .put(
      params,
      data,
      { headers }
    )
    .then(response => response.data)
}

export default put
