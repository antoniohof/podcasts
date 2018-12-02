import axios from 'axios'
const nodeEnv = process.env.NODE_ENV

const http = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000000
})

export const services = url =>
  axios.create({
    baseURL: url,
    timeout: 1000000,
    trailingSlash: false
  })

export default http
