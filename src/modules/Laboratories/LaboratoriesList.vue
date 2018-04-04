<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-btn(absolute dark fab top right small color='red' to='/laboratories/create')
            v-icon add
          v-list(two-line v-if="laboratories.length > 0")
            v-list-tile(avatar @click="" v-for="laboratory in laboratories" :key="laboratory.id")
              v-list-tile-avatar(color="red")
                b(class="white--text") T
              v-list-tile-content
                v-list-tile-title {{ laboratory.companyName }} - {{ $store.getters.getEndereco }}
                v-list-tile-sub-title {{ laboratory.phone }}
              v-list-tile-action
                v-btn(icon ripple)
                  v-icon(color='grey lighten-1') info
            v-divider(inset)
          p.grey--text.pa-5(v-if="laboratories.length == 0") Nenhum laboratório encontrado
</template>

<script>

import LaboratoriesService from './LaboratoriesService'

export default {
  data () {
    return {
      laboratories: []
    }
  },
  mounted () {
    LaboratoriesService.getLaboratories((laboratorios) => {
      this.laboratories = laboratorios
    })
  }
}
</script>
