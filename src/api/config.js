import axios from 'axios'
import qs from 'qs'

const host = `${location.protocol}//${location.host}`
console.log(host)

export const axiosPost = (url, params) => {
  console.log('called axiospost', params)
  return axios.post(host + url, qs.stringify(params))
}

export const axiosGet = (url, params) => {
  return axios.get(host + url, qs.stringify(params))
}
