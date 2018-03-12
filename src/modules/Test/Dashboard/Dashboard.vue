<template lang="pug">
  v-container#example(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex
        h3.white--text Dashboard
    v-layout(row wrap)
      v-flex(sm12 md6 lg3)
        indicador(title="Consultas Agendadas" value="1000" color="teal" icon="assignment")
      v-flex(sm12 md6 lg3)
        indicador(title="Consultas Agendadas" value="1000" color="orange")
      v-flex(sm12 md6 lg3)
        indicador(title="Consultas Agendadas" value="1000" color="purple" icon="assignment")
      v-flex(sm12 md6 lg3)
        indicador(title="Consultas Agendadas" value="1000" color="blue")
      v-flex(sm12)
        v-card
          v-card-title Olá
          v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      v-flex(sm6)
        v-card
          v-card-title Olá
          v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      v-flex(sm6)
        v-card
          v-card-title Olá
          v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      v-flex(sm4)
        v-card
          v-card-title Olá
          v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
      v-flex(sm8)
        v-card
          v-card-title Olá
          v-card-text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
import Indicador from './Indicador'

export default {
  components: {Indicador},
  data () {
    return {
      msg: 'Welcome to Your Modular Vue.js App'
    }
  }
}
</script>
