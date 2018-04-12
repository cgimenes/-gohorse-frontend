import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import EnvPlugin from '../../util/env-plugin'
import VueSweetalert2 from 'vue-sweetalert2'
import Toasted from 'vue-toasted'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(EnvPlugin)
Vue.use(VueResource)
Vue.use(VueSweetalert2)
Vue.use(Toasted, {
  duration: 3000,
  iconPack: 'material'
})

Vue.config.productionTip = false

export default Vue
