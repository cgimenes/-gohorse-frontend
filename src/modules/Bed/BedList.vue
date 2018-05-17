<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/bed/create'>
            <v-icon>add</v-icon>
          </v-btn>
          <v-list two-line v-if="beds.length > 0">
            <v-list-tile avatar v-for="bed in beds" :key="bed.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="getBusy(bed)" :color="getColor(bed)"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ bed.code }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ getBusy(bed) }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(bed)">
                  <v-icon color='grey lighten-1'>info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider inset />
          </v-list>
          <p class='grey--text pa-5' v-if="beds.length == 0">Nenhum veterinário encontrado</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import BedService from './BedService'
import ListInitialLetter from '@core/components/ListInitialLetter'

export default {
  components: {ListInitialLetter},
  data () {
    return {
      colors: [
        '#009688',
        '#F44336'
      ],
      beds: []
    }
  },
  mounted () {
    BedService.getBed((bed) => {
      this.beds = bed
    })
  },
  methods: {
    getBusy(bed){
      if(bed.busy){
        return 'Ocupado'
      }
      return 'Livre'
    },
    getColor (bed){
      if(bed.busy){
        return '#F44336'
      }
      return '#009688'
    },
    show (bed) {
      this
        .$router
        .push('/bed/' + bed.id)
    }
  }
}
</script>
