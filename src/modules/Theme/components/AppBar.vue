<template lang="pug">
  v-card#app-bar.primary-gradient(flat height='200px' tile)
    v-toolbar.primary-gradient.elevation-0(prominent extended app fixed dark)
      v-toolbar-title(class="white--text" slot="extension") Dashboard
      v-toolbar-side-icon(@click.stop="toggle('miniVariant')")
      v-text-field#buscar.elevation-0(solo='', dark='', name='input-1', label='Buscar')
      v-spacer
      v-btn(icon='')
        v-icon more_vert
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
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
