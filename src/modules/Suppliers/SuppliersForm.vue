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
                        <v-flex col xs12 sm5="sm5">
                            <v-text-field name="name" label="Nome" id="name" v-model="supplier.name" key="name"></v-text-field>
                        </v-flex>
                        <v-flex col xs12 sm2="sm2">
                            <document-input label="CPF/CNPJ" :model.sync="supplier.document" :key="supplier.id"></document-input>
                        </v-flex>
                        <v-flex col xs12 sm2="sm2">
                            <phone-input label="Telefone" :model.sync="supplier.phone" :key="supplier.id"></phone-input>
                        </v-flex>
                        <v-flex col xs12 sm3="sm3">
                            <dist-complete label="Tipo de Distribuição" :distributionType="supplier.distributionType.id" :model.sync="supplier.distributionType" :key="supplier.id"></dist-complete>
                        </v-flex>
                        <v-flex col xs12>
                            <h4 class="grey--text">Endereço</h4>
                        </v-flex>
                        <v-flex col xs12>
                            <address-component :address="supplier.address" :model.sync="supplier.address" :key="supplier.id">
                            </address-component>
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
import DistComplete from '../Enumerators/AutocompleteDistType'

export default {
    components: {
        AddressComponent,
        PhoneInput,
        DocumentInput,
        DistComplete
    },
    data() {
        return {
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
                distributionType: {}
            }
        }
    },
    methods: {
        saveSupplier() {
                SuppliersService.saveSupplier(this.supplier, (res) => {
                    this.$toasted.success('Fornecedor salvo com sucesso!', {icon: 'check'})
                    this
                        .$router
                        .push('/suppliers/')
                })
            },
            getDataForEdit() {
                SuppliersService.getSupplierDetails(this.$route.params.id, (supplier) => {
                    this.supplier = supplier
                    this.supplier.distributionType = this.supplier.distributionType.id
                })
            }
    },
    created() {
        if (this.$route.params.id) {
            this.getDataForEdit()
        }
    }
}
</script>
