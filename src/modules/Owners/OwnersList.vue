<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-btn(absolute dark fab top right small color='red' to='/owners/create')
            v-icon add
          v-list(two-line v-if="owners.length > 0")
            v-list-tile(avatar @click="" v-for="owner in owners" :key="owner.id")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                // v-list-tile-title {{ owner.companyName }} - {{ $store.getters.getEndereco }}
                // v-list-tile-sub-title {{ owner.phone }}
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          p.grey--text.pa-5(v-if="owners.length == 0") Nenhum proprietário encontrado
</template>

<script>

import OwnersService from './OwnersService'

export default {
  data () {
    return {
      owners: []
    }
  },
  mounted () {
    OwnersService.getOwners((owners) => {
      this.owners = owners
    })
  }
}
</script>
