<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex xs12>
      <v-card>
        <v-container grid-list-lg="grid-list-lg" fluid="fluid">
          <v-layout row="row" wrap="wrap">
            <v-flex col xs12>
              <h4 class="grey--text">Dados do Produto</h4>
            </v-flex>
            <v-flex col xs12>
              <v-text-field name="name" label="Nome do Produto" id="name" v-model="product.name" key="name"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <v-text-field type="date" name="birthDate" label="Data de Nascimento" id="birthDate" v-model="product.birthDate" key="birthDate"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <autocomplete label="Proprietário do Produto" :model.sync="product.supplier" :key="product.id"></autocomplete>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="specie" label="Espécie do Produto" id="specie" v-model="product.specie" key="specie"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="breed" label="Raça do Produto" id="breed" v-model="product.breed" key="breed"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="sex" label="Sexo do Produto" id="sex" v-model="product.sex" key="sex"></v-text-field>
            </v-flex>
            <v-flex col xs12>
              <v-btn color="primary" @click="saveProduct()">Salvar</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import ProductsService from './ProductsService'
import Autocomplete from './Autocomplete'

export default {
  components: {
    Autocomplete
  },
  data() {
    return {
      product: {
        supplier: { //fornecedor esta dentro de produtos
        }
      }
    }
  },
  methods: {
    saveProduct() {
      ProductsService.saveProduct(this.product, (res) => {
        this
          .$router
          .push('/products/')
      })
    },
    getDataForEdit() {
      ProductsService.getProductDetails(this.$route.params.id, (product) => {
        this.product = product
      })
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getDataForEdit()
    }
  }
}
</script>
