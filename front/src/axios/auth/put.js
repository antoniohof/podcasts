import http from '@/axios/http'
import { isAuthenticated } from '@/axios/isAuthenticated'

const put = ({
  name, avatar, email, lang, tour, interestArea, id
}) => {
  const _headers = {
    'Content-Type': 'application/json',
    ...isAuthenticated()
  }

  id = id
    ? `/${id}`
    : ''

  const url = `/users${id}`

  const payload = {
    avatar: avatar,
    name: name,
    email: email,
    lang: lang,
    interest_area: interestArea,
    tour: tour
  }

  return http
    .put(
      url,
      payload,
      { headers: _headers }
    )
    .then(response => response.data)
}

export default put
