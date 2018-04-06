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
                <phone-input label="Telefone do Laboratório" :model.sync="laboratory.phone"></phone-input>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              {{veterinary}}
              <v-flex col xs12>
                <address-component :address="laboratory.address"></address-component>
              </v-flex>
              <v-flex col xs12>
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

import LaboratoriesService from './LaboratoriesService'
import AddressComponent from '../Form/Address/AddressComponent'
import PhoneInput from '../Form/Field/PhoneInput'

export default {
  components: {AddressComponent, PhoneInput},
  data () {
    return {
      laboratory: {
        address: {
          street: 'rua dos bobo',
          number: 'zero'
        }
      }
    }
  },
  methods: {
    saveLaboratory() {
      console.log(this.laboratory);
      LaboratoriesService.createLaboratory(this.laboratory, (res) => {
        console.log(res)
      })
    }
  }
}
</script>
