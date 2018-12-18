import { services } from '@/axios/http'

const remove = url =>
  services(url)
    .delete()
    .then(response => response.data)

export default remove
