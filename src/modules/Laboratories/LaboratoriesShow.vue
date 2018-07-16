<template>
  <v-container grid-list-lg fluid>

    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
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
          <v-container grid-list-lg fluid>
            <v-layout row wrap>
              <v-flex col xs12>
                <h1>{{ laboratory.companyName }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do Laboratório</h4>
                <p>
                  <b>Nome: </b> {{ laboratory.companyName }}
                </p>
                <p>
                  <b>Telefone: </b> {{ laboratory.phone | phone}}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Endereço</h4>
                <p>
                  <b>Endereço: </b> {{laboratory.address.postalCode.streetName}}, {{laboratory.address.number}}  {{laboratory.address.complement}}, {{laboratory.address.postalCode.city}} {{laboratory.address.postalCode.state}}
                </p>
                <p>
                  <b>CEP: </b> {{laboratory.address.postalCode.code | cep}}
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

import LaboratoriesService from './LaboratoriesService'

export default {
  data () {
    return {
      fab: false,
      laboratory: {
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
  },
  mounted () {
    LaboratoriesService.getLaboratoryDetails(this.$route.params.id, (laboratory) => {
      this.laboratory = laboratory
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('/laboratories/' + this.laboratory.id + '/edit')
    },
    destroy () {
      this.$swal({
        title: 'Você deseja deletar este laboratório?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          LaboratoriesService.removeLaboratory(this.laboratory.id, (res) => {
            this
              .$router
              .push('/laboratories/')
          })
        }
      })
    }
  }
}
</script>
