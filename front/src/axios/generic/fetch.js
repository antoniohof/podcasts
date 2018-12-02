import { services } from '@/axios/http'

const fetch = url =>
  services(url)
    .get()
    .then(response => response.data)

export default fetch
