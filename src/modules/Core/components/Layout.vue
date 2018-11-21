<template lang="pug">
  .main-layout
    sidebar
    app-bar
    v-content#app-container
      v-fade-transition(mode="out-in")
        .app-container__padding
          router-view
    app-footer
</template>

<script>
  import Sidebar from './Sidebar'
  import AppBar from './AppBar'
  import AppFooter from './AppFooter'

  export default {
    components: {
      Sidebar,
      AppBar,
      AppFooter
    }
  }
</script>

<style>
  #app-container {
    margin-top: -80px;
    margin-bottom: 100px;
    padding-top: 0 !important;
  }
</style>
