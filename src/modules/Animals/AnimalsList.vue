<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/animals/create' >
            <v-icon> add </v-icon>
          </v-btn>
          <v-list two-line v-if="animals.length > 0">
            <v-list-tile avatar @click="" v-for="animal in animals" :key="animal.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="animal.name"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{animal.name}} </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(animal)">
                  <v-icon color='grey lighten-1'> info </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-divider inset ></v-divider>
          <p class="grey--text pa-5" v-if="animals.length == 0"> Nenhum animal encontrado </p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AnimalsService from './AnimalsService'
  import ListInitialLetter from '@core/components/ListInitialLetter'

  export default {
    components: {ListInitialLetter},
    data () {
      return {
        animals: []
      }
    },
    mounted () {
      AnimalsService.getAnimals((animals) => {
        this.animals = animals
      })
    },
    methods: {
      show (animal) {
        this
          .$router
          .push('/animals/' + animal.id)
      }
    }
  }
</script>
