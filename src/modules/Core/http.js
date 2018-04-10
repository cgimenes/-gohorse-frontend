import Vue from './bootstrap'
import axios from 'axios'

axios.defaults.baseURL = Vue.prototype.$env.api_url

// TODO: abstrair cada um dos conjuntos em métodos
axios.interceptors.response.use(response => Promise.resolve(response), (error) => {
  switch (error.response.status) {
    case 404:
      Vue.toasted.error(error.response.data.message, {
        icon: 'warning'
      })
      break
    default:
      Vue.toasted.error(error.response.data.message, {
        icon: 'clear'
      })
  }
  return Promise.reject(error)
})

export default axios
