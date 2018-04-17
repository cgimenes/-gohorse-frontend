<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/veterinaries/create'>
            <v-icon>add</v-icon>
          </v-btn>
          <v-list two-line v-if="veterinaries.length > 0">
            <v-list-tile avatar v-for="veterinary in veterinaries" :key="veterinary.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="veterinary.name"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ veterinary.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ veterinary.crmv }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(veterinary)">
                  <v-icon color='grey lighten-1'>info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider inset />
          </v-list>
          <p class='grey--text pa-5' v-if="veterinaries.length == 0">Nenhum veterinário encontrado</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import VeterinariesService from './VeterinariesService'
import ListInitialLetter from '@core/components/ListInitialLetter'

export default {
  components: {ListInitialLetter},
  data () {
    return {
      veterinaries: []
    }
  },
  mounted () {
    VeterinariesService.getVeterinaries((veterinaries) => {
      this.veterinaries = veterinaries
    })
  },
  methods: {
    show (veterinary) {
      this
        .$router
        .push('/veterinaries/' + veterinary.id)
    }
  }
}
</script>
