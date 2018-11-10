<template>
  <div class="main-layout">
    <sidebar></sidebar>
    <app-bar></app-bar>
    <v-content id="app-container">
      <v-fade-transition mode="out-in">
        <div class="app-container__padding">
          <router-view></router-view>
        </div>
      </v-fade-transition>
    </v-content>
    <app-footer></app-footer>
  </div>
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

<style lang="stylus">
  #app-container
    margin-top -80px
    padding-top 0 !important
</style>
