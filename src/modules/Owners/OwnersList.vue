<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/f/create' >
            <v-icon> add </v-icon>
          </v-btn>
          <v-list two-line v-if="owners.length > 0">
            <v-list-tile avatar @click="" v-for="owner in owners" :key="owner.id">
              <v-list-tile-avatar color="red">
                <b class="white--text"> T </b>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{owner.name}} </v-list-tile-title>
                <v-list-tile-sub-title> {{owner.phone}} </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color='grey lighten-1'> info </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-divider inset ></v-divider>
          <p class="grey--text pa-5" v-if="owners.length == 0"> Nenhum proprietário encontrado </p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
