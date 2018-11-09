import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import EnvPlugin from '../../util/env-plugin'
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted'
import {PhoneFilter, CEPFilter, DocumentFilter, DateFilter, HourFilter, CurrencyFilter} from './filters.js'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(EnvPlugin)
Vue.use(VueResource)
Vue.use(VueSweetalert2)
Vue.use(Toasted, {
  duration: 3000,
  iconPack: 'material'
})
Vue.filter('phone', PhoneFilter)
Vue.filter('cep', CEPFilter)
Vue.filter('document', DocumentFilter)
Vue.filter('date', DateFilter)
Vue.filter('hour', HourFilter)
Vue.filter('currency', CurrencyFilter)

Vue.config.productionTip = false

export default Vue
