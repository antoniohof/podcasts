import http from '@/axios/http'
import qs from 'qs'

const fetch = () => {
  const _headers = {
    'Content-Type': 'application/json'
  }
  var url = 'tracks'
  var page = 1
  var genre = 'house'
  var query = {
    linked_partitioning: page,
    limit: 80,
    offset: 80 * (page - 1),
    tags: genre
  }

  var queryStrings = qs.stringify({
    ...query,
    client_id: 'a281614d7f34dc30b665dfcaa3ed7505'
  })

  console.log('QUERY:', queryStrings)
  var requestURL = `https://api.soundcloud.com/${url}?${queryStrings}`

  return http
    .get(
      requestURL,
      { headers: _headers }
    )
    .then(response => response.data)
}

export default fetch
