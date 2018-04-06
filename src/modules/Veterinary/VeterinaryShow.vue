<template>
  <v-container grid-list-lg fluid>

    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition"        >
            <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
              <v-icon>mode_edit</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn fab dark small color="danger">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-speed-dial>
          <v-container grid-list-lg fluid>
            <v-layout row wrap>
              <v-flex col xs12>
                <h1>{{ Veterinary.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do veterinário</h4>
                <p>
                  <b>Nome: </b> {{ veterinary.name }}
                </p>
                <p>
                  <b>Telefone: </b> {{ laboratory.phone }}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Endereço</h4>
                <p>
                  <b>Endereço: </b> Rua teste, 245 - casa, Maringá PR
                </p>
                <p>
                  <b>CEP: </b> 00000-000
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

import VeterinariesService from './VeterinariesService'

export default {
  data () {
    return {
      fab: false,
      veterinary: {}
    }
  },
  mounted () {
    VeterinariesService.getVeterinaryDetails(this.$route.params.id, (veterinary) => {
      this.veterinary = veterinary
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('veterinaries/' + this.veterinaries.id + '/edit')
    }
  }
}
</script>
