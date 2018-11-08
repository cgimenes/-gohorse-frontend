<template>
  <v-navigation-drawer app overflow persistent
    :mobile-break-point="0"
    :enable-resize-watcher="true"
    :mini-variant="$store.getters.miniVariant"
    v-if="show">
  <div class="logo">
    <router-link to="/"><img src="/static/logo.png" alt="logo" /></router-link>
  </div>
  <slot name="menu">
    <v-list>
      <v-list-tile router="router" :key="key" :to="item.to" v-for="(item, key) in menuPrincipal">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.stop="toggle('miniVariant')">
        <v-list-tile-action>
          <v-icon v-html="$store.getters.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Recolher Menu</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </slot>
  </v-navigation-drawer>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        show: this.$store.getters.showSidebar,
        menuPrincipal: [
          {icon: 'home', title: 'Dashboard', to: '/'},
          {icon: 'book', title: 'Consultas', to: '/appointments'},
          {icon: 'location_city', title: 'Laboratórios', to: '/laboratories'},
          {icon: 'pets', title: 'Pacientes', to: '/animals'},
          {icon: 'face', title: 'Proprietários', to: '/owners'},
          {icon: 'local_shipping', title: 'Fornecedores', to: '/suppliers'},
          {icon: 'add_shopping_cart', title: 'Produtos', to: '/products'},
          {icon: 'local_hospital', title: 'Veterinários', to: '/veterinaries'},
          {icon: 'hotel', title: 'Internamentos', to: '/internments'},
          {icon: 'extension', title: 'Cadastros complementares', to: '/enumerators'},
          {icon: 'security', title: 'Logout', to: '/login'}
        ]
      }
    },
    watch: {
      '$store.getters.showSidebar' () {
        this.show = this.$store.getters.showSidebar
      }
    },
    methods: mapActions([
      'toggle'
    ])
  }
</script>

<style>
  .logo {
    text-align: center;
    padding-top: 10px;
  }
  .logo img {
    max-width: 50%;
  }
  @media screen and (max-height: 600px) {
    aside {
      overflow: scroll !important;
    }
  }
</style>
