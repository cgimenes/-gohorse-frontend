<template>
<v-container grid-list-lg fluid>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-btn absolute dark fab top right small color='red' to='/products/create'>
          <v-icon> add </v-icon>
        </v-btn>
        <v-list two-line v-if="products.length > 0">
          <v-list-tile avatar @click="" v-for="product in products" :key="product.id">
            <v-list-tile-avatar>
              <list-initial-letter :word="product.name"></list-initial-letter>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> {{product.name}} </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple @click="show(product)">
                <v-icon color='grey lighten-1'> info </v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider inset></v-divider>
        <p class="grey--text pa-5" v-if="products.length == 0"> Nenhum produto encontrado </p>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import ProductsService from './ProductsService'
import ListInitialLetter from '@core/components/ListInitialLetter'

export default {
  components: {
    ListInitialLetter
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    ProductsService.getProduct((products) => {
      this.products = products
    })
  },
  methods: {
    show(product) {
      this
        .$router
        .push('/products/' + product.id)
    }
  }
}
</script>
