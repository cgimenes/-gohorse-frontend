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
                <h1>{{ veterinary.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do veterinário</h4>
                <p>
                  <b>Nome: </b> {{ veterinary.name }}
                </p>
                <p>
                  <b>CRMV: </b> {{ veterinary.crmv}}
                </p>
                <p>
                  <b>Telefone: </b> {{ veterinary.phone | phone }}
                </p>
                <p>
                  <b>Data de nascimento: </b> {{ veterinary.birthDate}}
                </p>
                <p>
                  <b>E-mail: </b> {{ veterinary.email}}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Endereço</h4>
                <p>
                  <b>Endereço: </b> {{veterinary.address.postalCode.streetName}}, {{veterinary.address.number}} {{veterinary.address.complement}}, {{veterinary.address.postalCode.city}} {{veterinary.address.postalCode.state}}
                </p>
                <p>
                  <b>CEP: </b> {{veterinary.address.postalCode.code | cep }}
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
import Moment from 'moment'

export default {
  data () {
    return {
      fab: false,
      veterinary: {
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
    VeterinariesService.getVeterinaryDetails(this.$route.params.id, (veterinary) => {
      this.veterinary = veterinary
      this.veterinary.birthDate = new Moment(veterinary.birthDate).format('DD/MM/YYYY')
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('/veterinaries/' + this.veterinary.id + '/edit')
    },
    destroy () {
      this.$swal({
        title: 'Você deseja deletar este veterinário?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          VeterinariesService.removeVeterinary(this.veterinary.id, (res) => {
            this
              .$router
              .push('/veterinaries/')
          })
        }
      })
    }
  }
}
</script>
