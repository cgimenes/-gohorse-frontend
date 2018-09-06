<template>
  <v-container grid-list-lg fluid>

    <v-layout id="produto-container" row="row" wrap="wrap">
      <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition"        >
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
      <v-flex xs12 sm4 lg2>
        <v-card>
          <v-card-media src="/static/img_1_chihuahua_0_600.jpg" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline">Catiorro tremedeira</h3>
            </div>

            <h4 class="grey--text mt-3 mb-3">Dados do produto</h4>
            <p>
              <b>Marca: </b> Raivoso
            </p>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 lg10>
        <v-layout row="row" wrap="wrap" class="mb-2">
          <v-flex xs12 sm6>
            <v-card class="teal white--text">
              <v-card-title primary-title>
                <p class="mb-0">Preço de venda</p>
                <h2>R$ 4.568,55</h2>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-card class="blue white--text">
              <v-card-title primary-title>
                <p class="mb-0">Quantidade em Estoque</p>
                <h2>30</h2>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

        <v-card>
          <v-container grid-list-lg fluid>
            <h4 class="grey--text mb-3">Fornecedores</h4>
            <v-data-table
              :headers="headers"
              :items="suppliers"
              hide-actions
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.price }}</td>
              </template>
            </v-data-table>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      headers: [
        { text: 'Fornecedor', value: 'name' },
        { text: 'Valor', value: 'price' }
      ],
      suppliers: [
        {
          name: 'Tremedeira 123',
          price: 159.00,
        }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="stylus">
#produto-container
  position relative !important
</style>
