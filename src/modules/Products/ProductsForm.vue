<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex xs12>
      <v-card >
        <v-container grid-list-lg="grid-list-lg" fluid="fluid">
          <v-layout row="row" wrap="wrap">
            <v-flex col xs12>
              <h4 class="grey--text">Dados do produto</h4>
            </v-flex>
            <v-flex col xs12>
              <v-text-field
                id="name"
                :key="product.id"
                name="name"
                :rules="[rules.empty]"
                v-model="product.name"
                label="Nome do Produto"
                placeholder="ex: Ração"
                >
              </v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <v-text-field
                id="brand"
                :key="product.id"
                name="brand"
                :rules="[rules.empty]"
                v-model="product.brand"
                label="Marca do produto"
                placeholder="ex: Special Dog"
                >
              </v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <autocomplete
                label="Fornecedor" :supplier="product.supplier.id" :model.sync="product.supplier" :key="product.id"
                >
              </autocomplete>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <v-text-field name="price"
                id="price"
                prefix="R$"
                :key="product.id"
                placeholder="500,00"
                :rules="[rules.empty]"
                v-model="product.price"
                label="Preço do produto"
                >
              </v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <v-text-field
                min="0"
                id="amount"
                :key="product.id"
                type="number"
                mask="######"
                name="amount"
                label="Quantidade"
                :rules="[rules.empty]"
                v-model="product.amount"
                >
              </v-text-field>
            </v-flex>
            <v-flex col xs12>
              <v-btn
                color="primary"
                @click="saveProduct()"
                >Salvar
              </v-btn>
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
import Autocomplete from '../Suppliers/Autocomplete'

export default {
  components: {
    Autocomplete
  },
  data () {
    return {
      product: {
        supplier: { // fornecedor esta dentro de produtos
        }
      },
      rules: {
        empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!'
      }
    }
  },
  methods: {
    saveProduct () {
      this.product.supplierId = this.product.supplier
      ProductsService.saveProduct(this.product, (res) => {
        this
          .$router
          .push('/products/')
      })
    },
    getDataForEdit () {
      ProductsService.getProductDetails(this.$route.params.id, (product) => {
        this.product = product
        this.product.supplier = this.product.supplier.id
      })
    }
  },
  created () {
    if (this.$route.params.id) {
      this.getDataForEdit()
    }
  }
}
</script>
