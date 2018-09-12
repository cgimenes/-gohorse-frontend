<template lang="pug">
  v-navigation-drawer(
    app
    persistent
    enable-resize-watcher
    :mini-variant="$store.getters.miniVariant"
  )
    .logo
      router-link(to="/")
        img(src="/static/logo.png" alt="logo")

    slot(name="menu")
      v-list
        v-list-tile(
          router
          :key="key"
          :to="item.to"
          v-for="(item, key) in menuPrincipal"
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
        v-list-tile(@click.stop="toggle('miniVariant')")
          v-list-tile-action
            v-icon(v-html="$store.getters.miniVariant ? 'chevron_right' : 'chevron_left'")
          v-list-tile-content
            v-list-tile-title Recolher Menu
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        show: this.showSidebar,
        menuPrincipal: [
          {icon: 'home', title: 'Dashboard', to: '/'},
          {icon: 'book', title: 'Consultas', to: '/appointments'},
          {icon: 'location_city', title: 'Laboratórios', to: '/laboratories'},
          {icon: 'pets', title: 'Pacientes', to: '/pacientes'},
          {icon: 'face', title: 'Proprietários', to: '/owners'},
          {icon: 'local_shipping', title: 'Fornecedores', to: '/suppliers'},
          {icon: 'local_hospital', title: 'Veterinários', to: '/veterinaries'},
          {icon: 'hotel', title: 'Internamentos', to: '/internments'},
          {icon: 'security', title: 'Login', to: '/login'}
        ]
      }
    },
    watch: {
      '$store.getters.showSidebar' () {
        this.show = this.$store.getters.showSidebar
      },
      '$store.getters.miniVariant' () {
        this.show = this.$store.getters.miniVariant
      }
    },
    methods: mapActions([
      'toggle'
    ])
  }
</script>

<style lang="stylus">
.logo
  text-align center
  padding-top 10px

  img
    max-width 50%
</style>
