<template>
<v-container grid-list-lg fluid>

  <v-layout row="row" wrap="wrap">
    <v-flex xs12>
      <v-card>
        <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition">
          <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
            <v-icon>more_vert</v-icon>
            <v-icon>close</v-icon>
          </v-btn>
          <v-btn fab dark small color="blue" @click="edit()">
            <v-icon>mode_edit</v-icon>
          </v-btn>
          <v-btn fab dark small color="red" @click="destroy()">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-speed-dial>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex col xs12>
              <h1>{{ product.name }}</h1>
            </v-flex>
            <v-flex col xs12 sm6>
              <h4 class="grey--text mb-3">Dados do Produtos</h4>
              <p>
                <b>Nome: </b> {{ product.name }}
              </p>
              <p>
                <b>Marca: </b> {{ product.brand }}
              </p>
              <p>
                <b>Quantidade: </b> {{ product.amount }}
              </p>
              <p>
                <b>Preço: </b> R${{ product.price }}
              </p>
            </v-flex>
            <v-flex col xs12 sm6>
              <h4 class="grey--text mb-3">Proprietário</h4>
              <p>
                <b>Nome: </b> {{product.supplier.name}}
              </p>
              <p>
                <b>Telefone: </b>{{ product.supplier.phone }}
              </p>
              <p>
                <b>Cidade: </b>{{ product.supplier.address.postalCode.city }} - {{ product.supplier.address.postalCode.state}}
              </p>
              <p>
                <b>CEP: </b>{{ product.supplier.address.postalCode.code }}
              </p>
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

export default {
  data () {
    return {
      fab: false,
      product: {
        supplier: {
          address: {
            number: null,
            complement: null,
            postalCode: {
              code: null,
              streetType: 'Rua',
              streetName: '',
              neighbourhood: '',
              city: '',
              state: '',
              country: 'Brasil'
            }
          }
        }
      }
    }
  },
  mounted () {
    ProductsService.getProductDetails(this.$route.params.id, (product) => {
      this.product = product
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('/products/' + this.product.id + '/edit')
    },
    destroy () {
      this.$swal({
        title: 'Você deseja deletar este product?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          ProductsService.removeProduct(this.product.id, (res) => {
            this
              .$router
              .push('/products/')
          })
        }
      })
    }
  }
}
</script>
