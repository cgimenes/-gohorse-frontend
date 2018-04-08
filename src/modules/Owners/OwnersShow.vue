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
                <h1>{{ owner.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do Proprietário</h4>
                <p>
                  <b>Nome: </b> {{ owner.name }}
                </p>
                <p>
                  <b>Telefone: </b> {{ owner.phone }}
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

import OwnersService from './OwnersService'

export default {
  data () {
    return {
      fab: false,
      owner: {}
    }
  },
  mounted () {
    OwnersService.getOwnerDetails(this.$route.params.id, (owner) => {
      this.owner = owner
    })
    this.owner = {
      "name": "André",
      "phone": "044999999999",
      "cpf": "10628413955",
      "id": "d84c73d2-5bc2-4115-90a3-79c72d7da766"
  }
  },
  methods: {
    edit () {
      console.log('owners/' + this.owner.id + '/edit');
      this
        .$router
        .push('owners/' + this.owner.id + '/edit')
    },
    destroy () {
          this.$swal({
            title: 'Você deseja deletar este proprietário?',
            text: 'Esta operação não pode ser desfeita',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, eu quero deletar!',
            cancelButtonText: 'Não'
          }).then((result) => {
            if (result.value) {
              OwnersService.removeOwner(this.owner.id, (res) => {
                this
                  .$router
                  .push('/owners/')
              })
            }
          })
        }
  }
}
</script>
