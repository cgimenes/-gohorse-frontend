<template lang="pug">
  v-card#app-bar.primary-gradient(flat height='200px' tile)
    v-toolbar.primary-gradient.elevation-0(prominent extended app fixed dark)
      v-toolbar-title(class="white--text" slot="extension")
        title-from-route
      v-toolbar-side-icon(@click.stop="toggle('miniVariant')")
      v-text-field#buscar.elevation-0(solo='', dark='', name='input-1', label='Buscar')
      v-spacer
      v-menu
        v-btn(dark slot='activator' icon)
          v-icon more_vert
        v-list
          v-list-tile(@click="")
            v-list-tile-title Teste 1
          v-list-tile(@click="")
            v-list-tile-title Teste 2
          v-list-tile(@click="")
            v-list-tile-title Teste 3
          v-list-tile(@click="")
            v-list-tile-title Teste 4
          v-divider
          v-list-tile(@click="")
            v-list-tile-title Teste 5

</template>

<script>
  import { mapActions } from 'vuex'
  import TitleFromRoute from './TitleFromRoute'

  export default {
    components: {TitleFromRoute},
    methods: mapActions([
      'toggle'
    ])
  }
</script>

<style lang="stylus">
  #app-bar
    .input-group
      background rgba(0,0,0, .2)
</style>
