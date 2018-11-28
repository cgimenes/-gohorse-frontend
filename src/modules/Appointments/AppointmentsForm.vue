<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex xs12>
      <v-card>
        <v-container grid-list-lg="grid-list-lg" fluid="fluid">
          <v-layout row="row" wrap="wrap">
            <v-flex col xs12>
              <h4 class="grey--text">Dados da consulta</h4>
            </v-flex>
            <v-flex col xs12 sm3="sm3">
              <AnimalComplete
                required
                :rules='[rules.empty]'
                label="Animal"
                :animal="appointment.animal.id"
                :model.sync="appointment.animal"
                :key="appointment.id">
              </AnimalComplete>
            </v-flex>

            <v-flex col xs12 sm3="sm3">
              <VeterinaryComplete
                required
                :rules='[rules.empty]'
                label="Veterinário"
                :veterinary="appointment.veterinary.id"
                :model.sync="appointment.veterinary"
                :key="appointment.id">
              </VeterinaryComplete>
            </v-flex>

            <v-flex col xs12 sm3='sm3'>
                <v-menu
                  ref='menuDate'
                  :close-on-content-click='false'
                  v-model='menuDate'
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
                    v-model='appointment.dateTime.date'
                    label='Data da Consulta'
                    prepend-icon='event'
                    @blur='date = parseDate(appointment.dateTime.date)'
                  ></v-text-field>
                  <v-date-picker
                    v-model='date'
                    no-title
                    locale='pt-br'
                    @input='menuDate=false'
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>

            <v-flex col xs12 sm3='sm3'>
              <v-text-field required :rules='[rules.empty, rules.hour]' :mask='hourMask' name='name' label='Horário da consulta' id='hour' prepend-icon='access_time' v-model='appointment.dateTime.hour' key='name'>
              </v-text-field>
            </v-flex>

            <v-flex col xs12>
              <h4 class="grey--text">Endereço</h4>
            </v-flex>
            <v-flex col xs12>
              <address-component :address="appointment.address" :model.sync="appointment.address" :key="appointment.id">
              </address-component>
            </v-flex>

            <v-flex col xs12>
              <v-btn color="primary" :disabled='!formIsValid' @click="saveAppointment()">Salvar</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AppointmentsService from './AppointmentsService'
import AddressComponent from '../Form/Address/AddressComponent'
import AnimalComplete from '../Animals/AutocompleteAnimal'
import VeterinaryComplete from '../Veterinary/AutocompleteVeterinary'
import moment from 'moment'

export default {
  components: {
    AddressComponent, AnimalComplete, VeterinaryComplete
  },
  data () {
    return {
      appointment: {
        animal: {},
        animalId: '',
        veterinary: {},
        veterinaryId: '',
        dateTime: {
          date: null,
          hour: null
        },
        appointmentType: 'FIRST',
        place: 'OWNER',
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
      menuDate: false,
      date: false,
      hourMask: 'time',
      dateMask: 'date',
      rules: {
        empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!',
        hour: value => {
          const pattern = /([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/
          return pattern.test(moment(value, 'HH:mm').format('HH:mm')) || 'Horário inválido!'
        }
      }
    }
  },
  watch: {
    date (val) {
      this.appointment.dateTime.date = this.formatDate(this.date)
    }
  },
  computed: {
    formIsValid () {
      return (
        this.appointment.animal &&
        this.appointment.veterinary &&
        this.appointment.dateTime.date &&
        this.appointment.dateTime.hour &&
        this.appointment.address.postalCode.code &&
        this.appointment.address.number &&
        this.appointment.address.postalCode.neighbourhood &&
        this.appointment.address.postalCode.streetName &&
        this.appointment.address.postalCode.city &&
        this.appointment.address.postalCode.state
      )
    }
  },
  methods: {
    saveAppointment () {
      const appointmentFinal = { ...this.appointment
      }

      appointmentFinal.dateTime = moment.utc(
        `${this.appointment.dateTime.date} ${this.appointment.dateTime.hour}`,
        'DD/MM/YYYY HH:mm'
      )

      if (appointmentFinal.dateTime < moment()) {
        return this.$toasted.error('A consulta não pode ser agendada com data retroativa!', {
          icon: 'warning'
        })
      }

      AppointmentsService.saveAppointment(appointmentFinal, res => {
        this.$toasted.success('Consulta finalizada com sucesso!', {
          icon: 'check'
        })

        this.$router.push('/appointments/')
      })
    },
    getDataForEdit () {
      AppointmentsService.getAppointmentDetails(
        this.$route.params.id,
        (appointment) => {
          this.appointment.id = appointment.id
          this.appointment.animal = appointment.animal
          this.appointment.veterinary = appointment.veterinary.id
          this.appointment.address = appointment.address
          this.appointment.dateTime.date =
            moment(appointment.dateTime)
            .format('DD/MM/YYYY')
          this.appointment.dateTime.hour =
            moment(appointment.dateTime)
            .format('HH:mm')
        }
      )
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
    if (this.$route.params.date){
      this.appointment.dateTime.date = moment(this.$route.params.date).format('DD/MM/YYYY')
    }
  }
}
</script>
