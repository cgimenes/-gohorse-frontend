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
                <h1>{{ internment.animal.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do Internamento</h4>
                <p>
                  <b>Paciente: </b> {{ internment.animal.name }}
                </p>
                <p>
                  <b>Leito: </b> {{ internment.bed.name }}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Permanência</h4>
                <p>
                  <b>Entrada: </b> {{internment.busyAt}}</p>
                <p>
                  <b>Saída: </b> {{internment.busyUntil}}</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import InternmentsService from './InternmentsService'
import Moment from 'moment'

export default {
  data () {
    return {
      fab: false,
      internment: {
        id: null,
        bed: {
          id: null,
          name: null,
          busy: null
        },
        animal: {
          id: null,
          name: null,
          owner: {
            id: null,
            name: null,
            phone: null,
            cpf: null,
            birthDate: null,
            address: {
              postalCode: {
                code: null,
                streetType: null,
                streetName: null,
                neighbourhood: null,
                city: null,
                state: null,
                country: null
              },
              number: null,
              complement: null
            }
          },
          breed: {
            id: null,
            name: null
          },
          specie: {
            id: null,
            name: null
          },
          sex: null,
          birthDate: null,
          castrated: null,
          weight: null
        },
        busyAt: null,
        busyUntil: null
      }
    }
  },
  mounted () {
    InternmentsService.getInternmentDetails(this.$route.params.id, (internment) => {
      this.internment = internment
      this.internment.busyAt = new Moment(internment.busyAt).format('DD/MM/YYYY HH:mm')
      this.internment.busyUntil = new Moment(internment.busyUntil).format('DD/MM/YYYY HH:mm')
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('/internments/' + this.internment.id + '/edit')
    },
    destroy () {
      this.$swal({
        title: 'Você deseja deletar este internamento?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          InternmentsService.removeInternment(this.internment.id, (res) => {
            this
              .$router
              .push('/internments/')
          })
        }
      })
    }
  }
}
</script>
