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

              <v-flex col xs12 >
                <v-text-field
                  required
                  :rules= '[rules.empty]'
                  name="name"
                  label="Nome"
                  id="name"
                  v-model="veterinary.name"
                  key="name"
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12 sm6="sm6">
                <v-text-field
                  required
                  :rules='[rules.empty]'
                  name="crmv"
                  label="CRMV"
                  id="crmv"
                  v-model="veterinary.crmv"
                  key="crmv"
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12 sm6='sm6'>
                <v-menu
                ref='menuBusyUntil'
                :close-on-content-click='false'
                v-model='menuDateBirth'
                :nudge-right='40'
                lazy
                transition='scale-transition'
                offset-y
                full-width
                max-width='290px'
                min-width='290px'
              >
                  <v-text-field
                    required
                    :rules='[rules.empty]'
                    :mask='dateMask'
                    slot='activator'
                    v-model='veterinary.birthDate'
                    label='Data de nascimento'
                    prepend-icon='event'
                  >
                  </v-text-field>
                  <v-date-picker
                    v-model='dateBirth'
                    no-title
                    locale='pt-br'
                    @input='menuDateBirth=false'
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Dados de contato</h4>
              </v-flex>
              <v-flex col xs12 sm8>
                <v-text-field
                  required
                  :rules='[rules.empty, rules.validMail]'
                  :mask='mailMask'
                  name="email"
                  label="E-mail"
                  id="email"
                  v-model="veterinary.email"
                  key="email"
                  >
                 </v-text-field>
              </v-flex>
              <v-flex col xs12 sm4>
                <phone-input
                  label="Telefone"
                  :model.sync="veterinary.phone"
                  :key="veterinary.id"
                  >
                </phone-input>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component :address="veterinary.address"></address-component>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
              </v-flex>
              <v-flex col xs12>
                <v-btn
                  color="primary"
                  :disabled='!formIsValid'
                  @click="saveVeterinary()"
                  >Salvar
                </v-btn>
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
import moment from 'moment'

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
      },
      menuDateBirth: false,
      dateMask: 'date',
      dateBirth: null,
      mailMask: '',

      rules: {
        empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!',
        validMail: value => {
          const mail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi
          return mail.test(value) || 'E-mail inválido'
        }
      }
    }
  },
  watch: {
    dateBirth (val) {
      this.veterinary.birthDate = this.formatDate(this.dateBirth)
    }
  },
  computed: {
    formIsValid () {
      return (
        this.veterinary.name &&
        this.veterinary.crmv &&
        this.veterinary.birthDate &&
        this.veterinary.email &&
        this.veterinary.phone &&
        this.veterinary.address.postalCode.code &&
        this.veterinary.address.number &&
        this.veterinary.address.postalCode.neighbourhood &&
        this.veterinary.address.postalCode.streetName &&
        this.veterinary.address.postalCode.city &&
        this.veterinary.address.postalCode.state
      )
    }
  },
  methods: {
    saveVeterinary () {

      const veterinaryFinal = { ...this.veterinary }

      veterinaryFinal.birthDate = moment.utc(
        this.veterinary.birthDate, 'DD/MM/YYYY'


      ).format('YYYY-MM-DD')

      VeterinariesService.saveVeterinary(veterinaryFinal, (res) => {
        this.$toasted.success('Veterinário salvo com sucesso!', {icon: 'check'})
        this
          .$router
          .push('/veterinaries/')
      })
    },
    getDataForEdit () {
      VeterinariesService.getVeterinaryDetails(this.$route.params.id, (veterinary) => {
        this.veterinary = veterinary
        this.veterinary.birthDate = moment(veterinary.birthDate).format('DD/MM/YYYY')
      })
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  created () {
    if (this.$route.params.id) {
      this.getDataForEdit()
    }
  }
}

</script>
