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
        template(v-for="item in menuPrincipal")
          v-list-group(
              v-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
          )
            v-list-tile(slot="activator")
              v-list-tile-content
                v-list-tile-title(v-text="item.text")
            v-list-tile(
                router
                v-for="(child, i) in item.children"
                :key="i"
                :to="child.to"
            )
              v-list-tile-action(v-if="child.icon")
                v-icon(v-text="child.icon")
              v-list-tile-content
                v-list-tile-title(v-text="child.text")
          v-list-tile(
              router
              v-else
              :to="item.to"
              :key="item.text"
          )
            v-list-tile-action
              v-icon(v-text="item.icon")
            v-list-tile-content
              v-list-tile-title(v-text="item.text")

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
          {icon: 'home', text: 'Dashboard', to: '/'},
          {icon: 'assignment', text: 'Consultas', to: '/appointments'},
          {icon: 'location_city', text: 'Laboratórios', to: '/laboratories'},
          {icon: 'pets', text: 'Pacientes', to: '/animals'},
          {icon: 'face', text: 'Proprietários', to: '/owners'},
          {icon: 'local_shipping', text: 'Fornecedores', to: '/suppliers'},
          {icon: 'add_shopping_cart', text: 'Produtos', to: '/products'},
          {icon: 'local_hospital', text: 'Veterinários', to: '/veterinaries'},
          {icon: 'hotel', text: 'Internamentos', to: '/internments'},
          {icon: 'keyboard_arrow_up', 'icon-alt': 'book', text: 'Relatórios', to: '/reports', children: [
              {icon: 'account_balance_wallet', text: 'Fluxo de caixa', to: '/cashflow'}
            ]},
          {icon: 'extension', text: 'Cadastros complementares', to: '/enumerators'},
          {icon: 'security', text: 'Login', to: '/login'}
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
