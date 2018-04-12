<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Laboratório</h4>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="name" label="Nome do Laboratório" id="name" v-model="laboratory.companyName" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <phone-input label="Telefone do Laboratório" :model.sync="laboratory.phone" :key="laboratory.id"></phone-input>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component :address="laboratory.address"></address-component>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveLaboratory()">Salvar</v-btn>
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
import PhoneInput from '../Form/Field/PhoneInput'
import AddressComponent from '../Form/Address/AddressComponent'

export default {
  components: {PhoneInput, AddressComponent},
  data () {
    return {
      laboratory: {
        companyName: '',
        phone: '',
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
    saveLaboratory () {
      LaboratoriesService.saveLaboratory(this.laboratory, (res) => {
        this.$toasted.success('Laboratório criado com sucesso!', {icon: 'check'})
        this
          .$router
          .push('/laboratories/')
      })
    },
    getDataForEdit () {
      LaboratoriesService.getLaboratoryDetails(this.$route.params.id, (laboratory) => {
        this.laboratory = laboratory
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
