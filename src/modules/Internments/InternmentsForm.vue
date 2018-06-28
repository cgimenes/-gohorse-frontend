<template>
  <v-container grid-list-lg='grid-list-lg' fluid='fluid'>
    <v-layout row='row' wrap='wrap'>
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg='grid-list-lg' fluid='fluid'>
            <v-layout row='row' wrap='wrap'>
              <v-flex col xs12>
                <h4 class='grey--text'>Dados do Internamento</h4>
              </v-flex>

              <v-flex col xs12 sm6='sm6'>
                <v-text-field
                  :rules='rules.animal'
                  required
                  name='name'
                  label='Paciente'
                  id='name'
                  v-model='internment.animalId'
                  key='name'
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12 sm3='sm3'>
                <v-menu
                  ref='menuBusyAt'
                  :close-on-content-click='false'
                  v-model='menuBusyAt'
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
                    :rules='rules.busyAtDate'
                    :mask='dateMask'
                    slot='activator'
                    v-model='internment.busyAt.date'
                    label='Data de entrada'
                    prepend-icon='event'
                    @blur='dateBusyAt = parseDate(internment.busyAt.date)'
                  ></v-text-field>
                  <v-date-picker
                    v-model='dateBusyAt'
                    no-title
                    locale='pt-br'
                    @input='menuBusyAt=false'
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex col xs12 sm3='sm3'>
                <v-text-field
                  required
                  :rules='rules.busyAtHour'
                  :mask='hourMask'
                  name='name'
                  label='Horário de entrada'
                  id='hour'
                  prepend-icon='access_time'
                  v-model='internment.busyAt.hour'
                  key='name'
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12 sm6='sm6'>
                <v-text-field
                  :rules='rules.bed'
                  required
                  name='name'
                  label='Leito'
                  id='name'
                  v-model='internment.bedId'
                  key='name'
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12 sm3='sm3'>
                <v-menu
                  ref='menuBusyUntil'
                  :close-on-content-click='false'
                  v-model='menuBusyUntil'
                  :nudge-right='40'
                  lazy
                  transition='scale-transition'
                  offset-y
                  full-width
                  max-width='290px'
                  min-width='290px'
                >
                  <v-text-field
                    :mask='dateMask'
                    slot='activator'
                    v-model='internment.busyUntil.date'
                    label='Data de saída'
                    prepend-icon='event'
                    @blur='dateBusyUntil = parseDate(internment.busyUntil.date)'
                  ></v-text-field>
                  <v-date-picker
                    v-model='dateBusyUntil'
                    no-title
                    locale='pt-br'
                    @input='menuBusyUntil=false'
                    >
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex col xs12 sm3='sm3'>
                <v-text-field
                  :mask='hourMask'
                  name='name'
                  label='Horário de saída'
                  id='hour'
                  prepend-icon='access_time'
                  v-model='internment.busyUntil.hour'
                  key='name'
                  >
                </v-text-field>
              </v-flex>

              <v-flex col xs12>
                <v-btn
                  color='primary'
                  :disabled='!formIsValid'
                  @click='saveInternment()'
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
import InternmentsService from './InternmentsService'
import Moment from 'moment'

export default {
  components: {},
  data () {
    return {
      internment: {
        animalId: null,
        bedId: null,
        busyAt: {
          date: null,
          hour: null
        },
        busyUntil: {
          date: null,
          hour: null
        }
      },
      menuBusyAt: false,
      menuBusyUntil: false,
      dateBusyAt: null,
      dateBusyUntil: null,
      hourMask: 'time',
      dateMask: 'date',

      rules: {
        animal: [val => (val || '').length > 0 || 'Preenchimento obrigatório!'],
        bed: [val => (val || '').length > 0 || 'Preenchimento obrigatório!'],
        busyAtDate: [
          val => (val || '').length > 0 || 'Preenchimento obrigatório!'
        ],
        busyAtHour: [
          val => (val || '').length > 0 || 'Preenchimento obrigatório!'
        ]
      }
    }
  },
  watch: {
    dateBusyAt (val) {
      this.internment.busyAt.date = this.formatDate(this.dateBusyAt)
    },
    dateBusyUntil (val) {
      this.internment.busyUntil.date = this.formatDate(this.dateBusyUntil)
    }
  },
  computed: {
    formIsValid () {
      return (
        this.internment.animalId &&
        this.internment.bedId &&
        this.internment.busyAt.date &&
        this.internment.busyAt.hour
      )
    }
  },
  methods: {
    saveInternment () {
      const internmentFinal = { ...this.internment }

      internmentFinal.busyAt = moment.utc(
        `${this.internment.busyAt.date} ${this.internment.busyAt.hour}`,
        'DD/MM/YYYY HH:mm'
      )
      internmentFinal.busyUntil = moment.utc(
        `${this.internment.busyUntil.date} ${this.internment.busyUntil.hour}`,
        'DD/MM/YYYY HH:mm'
      )

      InternmentsService.saveInternment(internmentFinal, res => {
        this.$toasted.success('Internamento criado com sucesso!', {
          icon: 'check'
        })
        this.$router.push('/internments/')
      })
    },
    getDataForEdit () {
      InternmentsService.getInternmentDetails(
        this.$route.params.id,
        internment => {
          this.internment.id = internment.id
          this.internment.animalId = internment.animal.id
          this.internment.bedId = internment.bed.id
          this.internment.busyAt.date =
            moment(internment.busyAt)
            .format('DD/MM/YYYY')
          this.internment.busyAt.hour =
            moment(internment.busyAt)
            .format('HH:mm')

          if (internment.busyUntil) {
            this.internment.busyUntil.date =
              moment(internment.busyUntil)
              .format('DD/MM/YYYY')
            this.internment.busyUntil.hour =
              moment(internment.busyUntil)
              .format('HH:mm')
          }
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
  }
}
</script>
