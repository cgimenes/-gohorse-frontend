
<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-btn(absolute dark fab top right small color='red' to='/laboratories/create')
            v-icon add
          v-list(two-line v-if="laboratories.lenght > 0")
            v-list-tile(avatar @click="" v-for="laboratory in laboratories")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title {{ laboratory.name }}
                v-list-tile-sub-title {{ laboratory.phone }}
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Modular Vue.js App'
    }
  },
  computed: {
    laboratories () {
      return this.$store.state.laboratories.getLaboratories
    }
  },
  beforeCreate () {
    this.$store.dispatch('findLaboratories')
  }
}
</script>
