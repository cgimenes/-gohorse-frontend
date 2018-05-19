<template>
  <v-layout row="row" wrap="wrap" id="address-form">
    <v-flex col xs12 sm6>
      <v-text-field name="zipcode" mask="#####-###" v-model="address.postalCode.code" label="CEP" id="address"></v-text-field>
    </v-flex>
    <v-flex col xs12 sm6>
    <v-select :items="addressTypes" v-model="address.postalCode.streetType" label="Tipo" single-line></v-select>
    </v-flex>
    <v-flex col xs12 sm6>
      <v-text-field name="address" v-model="address.postalCode.streetName" label="Endereço" id="address"></v-text-field>
    </v-flex>
    <v-flex col xs12 sm2>
      <v-text-field name="number" v-model="address.number" label="Número" id="number"></v-text-field>
    </v-flex>
    <v-flex col xs12 sm4>
      <v-text-field name="complement" v-model="address.complement" label="Complemento" id="complement"></v-text-field>
    </v-flex>
    <v-flex col xs12 sm6>
      <v-text-field name="neighbourhood" v-model="address.postalCode.neighbourhood" label="Bairro" id="neighbourhood"></v-text-field>
    </v-flex>
    <v-flex col xs8 sm4>
      <v-text-field name="city" disabled v-model="address.postalCode.city" label="Cidade" id="city"></v-text-field>
    </v-flex>
    <v-flex col xs4 sm2>
      <v-text-field name="state" disabled v-model="address.postalCode.state" label="Estado" id="state"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import AddressService from './AddressService'

export default {
  props: {
    address: {
      type: Object,
      default () {
        return {
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
  computed: {
    addressTypes () {
      return AddressService.getAddressTypes()
    }
  },
  methods: {
    invalidZipcode() {
      this.$toasted.error('CEP não existe.', {
        icon: 'warning'
      })
    },
    setZipcode (zipcode, address, invalidZipcode) {
      AddressService.getZipcode(zipcode, function (postalCode) {

        if (postalCode.erro) {
          invalidZipcode()
        }

        address.postalCode.fromViacep = true
        address.postalCode.streetName = postalCode.logradouro
        address.postalCode.city = postalCode.localidade
        address.postalCode.state = postalCode.uf
        address.postalCode.neighbourhood = postalCode.bairro
      })
    }
  },
  watch: {
    'address.postalCode.code': function (zipcode) {
      if (zipcode.length === 8) {
        this.setZipcode(zipcode, this.address, this.invalidZipcode)
      }
    }
  }
}
</script>
