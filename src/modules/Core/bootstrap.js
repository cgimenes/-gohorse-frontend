import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import EnvPlugin from '../../util/env-plugin'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(EnvPlugin)

Vue.config.productionTip = false

export default Vue
