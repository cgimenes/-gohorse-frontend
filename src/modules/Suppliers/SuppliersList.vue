<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/suppliers/create' >
            <v-icon> add </v-icon>
          </v-btn>
          <v-list two-line v-if="suppliers.length > 0">
            <v-list-tile avatar @click="" v-for="supplier in suppliers" :key="supplier.id">
              <v-list-tile-avatar>
                <list-initial-letter :word="supplier.name"></list-initial-letter>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{supplier.name}} </v-list-tile-title>
                <v-list-tile-sub-title> {{supplier.phone | phone}} </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="show(supplier)">
                  <v-icon color='grey lighten-1'> info </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <v-divider inset ></v-divider>
          <p class="grey--text pa-5" v-if="suppliers.length == 0"> Nenhum proprietário encontrado </p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SuppliersService from './SuppliersService'
  import ListInitialLetter from '@core/components/ListInitialLetter'

  export default {
    components: {ListInitialLetter},
    data () {
      return {
        suppliers: []
      }
    },
    mounted () {
      SuppliersService.getSuppliers((suppliers) => {
        this.suppliers = suppliers
      })
    },
    methods: {
      show (supplier) {
        this
          .$router
          .push('/suppliers/' + supplier.id)
      }
    }
  }
</script>
