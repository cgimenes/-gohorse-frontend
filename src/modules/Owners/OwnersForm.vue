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
                <v-text-field
                  required
                  :rules='[rules.empty]'
                  name="name"
                  label="Nome do Proprietário"
                  id="name"
                  v-model="owner.name"
                  key="name"
                  >
                </v-text-field>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
                <cpf-input
                  label="CPF do Proprietário"
                  :model.sync="owner.cpf"
                  >
                </cpf-input>
              </v-flex>
              <v-flex col xs12 sm3="sm3">
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
                    name="name"
                    :mask='dateMask'
                    label="Data de nascimento"
                    slot='activator'
                    id="birthdate"
                    v-model="owner.birthDate"
                    :key="owner.id"
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
              <v-flex col xs12 sm3="sm3">
                <phone-input
                  label="Telefone do Proprietário"
                  :model.sync="owner.phone"
                  :key="owner.id"
                  >
                </phone-input>
              </v-flex>
              <v-flex col xs12>
                <h4 class="grey--text">Endereço</h4>
              </v-flex>
              <v-flex col xs12>
                <address-component
                  :address="owner.address"
                  >
                </address-component>
              </v-flex>
              <v-flex col xs12>
              </v-flex>
              <v-flex col xs12>
                <v-btn
                  color="primary"
                  :disabled='!formIsValid'
                  @click="saveOwner()"
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
  import OwnersService from './OwnersService'
  import AddressComponent from '../Form/Address/AddressComponent'
  import PhoneInput from '../Form/Field/PhoneInput'
  import CpfInput from '../Form/Field/CpfInput'
  import moment from 'moment'

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
        },
        menuDateBirth: false,
        dateMask: 'date',
        dateBirth: null,

        rules: {
          empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!'
        }
      }
    },
    watch: {
      dateBirth (val) {
        this.owner.birthDate = this.formatDate(this.dateBirth)
      }
    },
    computed: {
      formIsValid () {
        return (
          this.owner.name &&
          this.owner.birthDate &&
          this.owner.cpf &&
          this.owner.phone &&
          this.owner.address.postalCode.code &&
          this.owner.address.number &&
          this.owner.address.postalCode.neighbourhood &&
          this.owner.address.postalCode.streetName &&
          this.owner.address.postalCode.city &&
          this.owner.address.postalCode.state
        )
      }
    },
    methods: {
      saveOwner () {
        const ownerFinal = { ...this.owner }

        ownerFinal.birthDate = moment.utc(
          this.owner.birthDate, 'DD/MM/YYYY'

        ).format('YYYY-MM-DD')
        OwnersService.saveOwner(ownerFinal, (res) => {
          this.$toasted.success('Proprietário salvo com sucesso!', {icon: 'check'})
          this
            .$router
            .push('/owners/')
        })
      },
      getDataForEdit () {
        OwnersService.getOwnerDetails(this.$route.params.id, (owner) => {
          this.owner = owner
          this.owner.birthDate = moment(owner.birthDate).format('DD/MM/YYYY')
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
