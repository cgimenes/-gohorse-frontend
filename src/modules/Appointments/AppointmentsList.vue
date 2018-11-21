<template>
<v-container grid-list-lg fluid>
  <v-layout row wrap>
    <v-flex xs6>
      <v-date-picker
        ref="picker"
        v-model="date"
        :events="monthDaysWithAppointments"
        :picker-date.sync="pickerDate"
        full-width
        @input="pickerDay"
        locale="pt-br"
        event-color="green lighten-1"></v-date-picker>
    </v-flex>
    <v-flex xs6>
      <v-card>
        <v-btn absolute dark fab top right small color='red' to='/appointments/create'>
          <v-icon>add</v-icon>
        </v-btn>
        <v-list two-line v-if="dayAppointments.length > 0">
          <v-list-tile avatar v-for="appointment in dayAppointments" :key="appointment.id">
              <v-btn icon ripple @click="show(appointment)">
                <v-list-tile-avatar>
                  <list-initial-letter :word="appointment.animal.name"></list-initial-letter>
                </v-list-tile-avatar>
              </v-btn>
            <v-list-tile-content>
              <v-list-tile-title>{{ appointment.animal.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ appointment.dateTime | hour }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-checkbox :disabled="!isScheduled(appointment)" v-model="selected" v-bind:value="appointment"></v-checkbox>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <p class='grey--text pa-5' v-if="dayAppointments.length == 0">Nenhuma consulta encontrada para o dia selecionado</p>
        <v-flex xs6>
          <v-btn color="success" :disabled="hasSelectedScheduled()" @click="finish()">Finalizar Consultas Selecionadas</v-btn>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AppointmentsService from './AppointmentsService'
import ListInitialLetter from '@core/components/ListInitialLetter'
import moment from 'moment'

export default {
  components: {
    ListInitialLetter
  },
  data () {
    return {
      date: moment().format().substr(0, 10),
      monthDaysWithAppointments: [],
      dayAppointments: [],
      pickerDate: null,
      selected: []
    }
  },
  mounted () {
    this.pickerDay()
  },
  watch: {
    pickerDate (month) {
      AppointmentsService.getMonthDaysWithAppointments(month, (days) => {
        this.monthDaysWithAppointments = days
      })
    }
  },
  methods: {
    checkScheduledAppointments () {
      this.dayAppointments.forEach(appointment => {
        if (!this.isScheduled(appointment)) {
          this.selected.push(appointment)
        }
      })
    },
    isScheduled (appointment) {
      return appointment.status === 'SCHEDULED'
    },
    hasSelectedScheduled () {
      return this.selected.filter(appointment => this.isScheduled(appointment)).length === 0
    },
    show (appointment) {
      this.$router.push('/appointments/' + appointment.id)
    },
    finish () {
      AppointmentsService.finishAppointment(this.selected.filter(this.isScheduled), (res) => {
        for(let appointment of this.selected.filter(this.isScheduled)){
          appointment.status = 'FINISHED'
        }
      })
    },
    pickerDay () {
      AppointmentsService.getDayAppointments(this.date, (appointments) => {
        this.dayAppointments = appointments
        this.selected.splice(0, this.selected.length)
        this.checkScheduledAppointments()
      })
    }
  }
}
</script>
