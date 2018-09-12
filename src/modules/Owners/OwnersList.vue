<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/owners/create' >
            <v-icon> add </v-icon>
          </v-btn>
          <v-list two-line v-if="owners.length > 0">
            <v-list-tile avatar @click="show(owner)" v-for="owner in owners" :key="owner.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="owner.name"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{owner.name}} </v-list-tile-title>
                <v-list-tile-sub-title> {{owner.phone | phone}} </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(owner)">
                  <v-icon color='grey lighten-1'> info </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <p class="grey--text pa-5" v-if="owners.length == 0"> Nenhum proprietário encontrado </p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import OwnersService from './OwnersService'
  import ListInitialLetter from '@core/components/ListInitialLetter'

  export default {
    components: {ListInitialLetter},
    data () {
      return {
        owners: []
      }
    },
    mounted () {
      OwnersService.getOwners((owners) => {
        this.owners = owners
      })
    },
    methods: {
      show (owner) {
        this
          .$router
          .push('/owners/' + owner.id)
      }
    }
  }
</script>
