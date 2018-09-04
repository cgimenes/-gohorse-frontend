<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Fornecedor</h4>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <v-text-field name="name" label="Nome" id="name" v-model="supplier.name" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <document-input label="CPF/CNPJ" :model.sync="supplier.document" :key="supplier.id"></document-input>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <phone-input label="Telefone" :model.sync="supplier.phone" :key="supplier.id"></phone-input>
              </v-flex>
              <v-flex col xs12 sm3="sm2">
                <template>
                  <v-layout row>
                    <v-flex>
                      <v-select
                        :items="distributionTypes"
                        label="Tipo de distribuição"
                        item-value="text"
                      ></v-select>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn dark fab flat color='teal' to='' >
                        <v-icon> add </v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </template>

              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component :address="supplier.address"></address-component>
              </v-flex>
              <v-flex col xs12>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveSupplier()">Salvar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SuppliersService from './SuppliersService'
  import AddressComponent from '../Form/Address/AddressComponent'
  import DocumentInput from '../Form/Field/DocumentInput'
  import PhoneInput from '../Form/Field/PhoneInput'

  export default {
    components: {
      AddressComponent,
      PhoneInput,
      DocumentInput
    },
    data () {
      return {
        distributionTypes: [],
        supplier: {
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
          },
          document: '',
          distributionType: {
            value: 'A'
          }
        }
      }
    },
    methods: {
      saveSupplier () {
        SuppliersService.saveSupplier(this.supplier, (res) => {
          this
            .$router
            .push('/suppliers/')
        })
      },
      getDataForEdit () {
        SuppliersService.getSupplierDetails(this.$route.params.id, (supplier) => {
          this.supplier = supplier
          supplier.distributionType = {
            value: 'A'
          }
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
