<template>
  <v-card class="primary-gradient" id="app-bar" flat="flat" height="200px" tile="tile">
    <v-toolbar class="primary-gradient elevation-0" prominent="prominent" extended="extended" app="app" fixed="fixed" dark="dark">
      <v-toolbar-title class="white--text" slot="extension">
        <title-from-route></title-from-route>
      </v-toolbar-title>
      <v-toolbar-side-icon @click.stop="toggle('showSidebar')"></v-toolbar-side-icon>
      <v-text-field class="elevation-0" id="buscar" solo="" dark="" name="input-1" label="Buscar"></v-text-field>
    </v-toolbar>
  </v-card>
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

<style>
  #app-bar .input-group {
    background: rgba(0,0,0,0.2);
  }
</style>
