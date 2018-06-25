<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/laboratories/create'>
            <v-icon>add</v-icon>
          </v-btn>
          <v-list two-line v-if="laboratories.length > 0">
            <v-list-tile avatar v-for="laboratory in laboratories" :key="laboratory.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="laboratory.companyName"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ laboratory.companyName }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ laboratory.phone | phone}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(laboratory)">
                  <v-icon color='grey lighten-1'>info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>            
          </v-list>
          <p class='grey--text pa-5' v-if="laboratories.length == 0">Nenhum laboratório encontrado</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import LaboratoriesService from './LaboratoriesService'
import ListInitialLetter from '@core/components/ListInitialLetter'

export default {
  components: {ListInitialLetter},
  data () {
    return {
      laboratories: []
    }
  },
  mounted () {
    LaboratoriesService.getLaboratories((laboratorios) => {
      this.laboratories = laboratorios
    })
  },
  methods: {
    show (laboratory) {
      this
        .$router
        .push('/laboratories/' + laboratory.id)
    }
  }
}
</script>
