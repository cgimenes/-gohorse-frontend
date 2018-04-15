<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Veterinário</h4>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="name" label="Nome do Veterinário" id="name" v-model="veterinary.name" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <phone-input label="Telefone do veterinário" :model.sync="veterinary.phone"></phone-input>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="crmv" label="CRMV do Veterinário" id="crmv" v-model="veterinary.crmv" key="crmv"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="email" label="E-mail do Veterinário" id="email" v-model="veterinary.email" key="email"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field type="date" name="birthDate" label="Data de Nascimento" id="birthDate" v-model="veterinary.birthDate" key="email"></v-text-field>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component :address="veterinary.address"></address-component>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                {{veterinary}}
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveVeterinary()">Salvar</v-btn>
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
import PhoneInput from '../Form/Field/PhoneInput'
import AddressComponent from '../Form/Address/AddressComponent'

export default {
  components: {PhoneInput, AddressComponent},
  data () {
    return {
      veterinary: {
        name: '',
        phone: '',
        crmv: '',
        email: '',
        birthDate: '',
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
  methods: {
    saveVeterinary () {
      VeterinariesService.createVeterinary(this.veterinary, (res) => {
        this
          .$router
          .push('/veterinaries/')
      })
    },
    getDataForEdit () {
      VeterinariesService.getVeterinaryDetails(this.$route.params.id, (veterinary) => {
        this.veterinary = veterinary
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
