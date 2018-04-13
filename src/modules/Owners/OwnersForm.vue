<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Proprietário</h4>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <v-text-field name="name" label="Nome do Proprietário" id="name" v-model="owner.name" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <cpf-input label="CPF do Proprietário" :model.sync="owner.cpf"></cpf-input>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <v-text-field name="name" label="Data de nascimento" id="birthdate" v-model="owner.birthDate" :key="owner.id"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <phone-input label="Telefone do Proprietário" :model.sync="owner.phone" :key="owner.id"></phone-input>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component :address="owner.address"></address-component>
              </v-flex>
              <v-flex col xs12>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveOwner()">Salvar</v-btn>
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
  import AddressComponent from '../Form/Address/AddressComponent'
  import PhoneInput from '../Form/Field/PhoneInput'
  import CpfInput from '../Form/Field/CpfInput'

  export default {
    components: {
      AddressComponent,
      PhoneInput,
      CpfInput
    },
    data () {
      return {
        owner: {
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
      saveOwner () {
        OwnersService.saveOwner(this.owner, (res) => {
          this
            .$router
            .push('/owners/')
        })
      },
      getDataForEdit () {
        OwnersService.getOwnerDetails(this.$route.params.id, (owner) => {
          this.owner = owner
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
