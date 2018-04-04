import Vue from './bootstrap'
import axios from 'axios'

axios.defaults.baseURL = Vue.prototype.$env.api_url

export default axios
