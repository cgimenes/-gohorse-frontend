<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex sm12="sm12" md8="md8" lg8="lg8">
      <v-layout row="row" wrap="wrap">
        <v-flex sm12="sm12" md6="md6" lg6="lg6">
          <indicador title="Consultas Finalizadas" :value="finishedppointments" color="deep-purple darken-1" icon="assignment">
          </indicador>
        </v-flex>
        <v-flex sm12="sm12" md6="md6" lg6="lg6">
          <indicador title="Consultas Hoje" :value="appointmentsToday" color="pink darken-1" icon="today">
          </indicador>
        </v-flex>
        <v-flex sm12="sm12">
          <v-card>
            <v-card-text>
              <grafico-barras :items="graphItems" :names="months"></grafico-barras>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex sm12="sm12" md4="md4" lg4="lg4">
      <v-card id="timeline">
        <Timeline :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems" />
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Indicador from './Indicador'
import Timeline from './Timeline'
import GraficoBarras from './GraficoBarras'
import AppointmentsService from '../Appointments/AppointmentsService'
import InternmentsService from '../Internments/InternmentsService'
import moment from 'moment'

export default {
  components: {
    Indicador,
    Timeline,
    GraficoBarras
  },
  data () {
    return {
      finishedppointments: '0',
      appointmentsToday: '0',
      graphItems: [],
      appointments: [],
      internments: [],
      months: [],
      messageWhenNoItems: 'Nenhum registro encontrado',
      monthsNamed: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsAux: [],
      timelineItems: [],
      msg: 'Bem vindo ao GoHorse'
    }
  },
  methods: {
    // ONLY GOD CAN JUDGE ME
    orderMonths (callback) {
      var monthsInOrder = []
      var lastMonth = moment(moment().format().substr(0, 10), 'AAAA-MM-DD').format('MM')
      var currentMonth

      for (var x = 1; x < 13; x++) {
        currentMonth = parseInt(lastMonth) + x
        if (currentMonth > 12) {
          currentMonth = currentMonth - 12
        }
        monthsInOrder.push(this.monthsNamed[currentMonth - 1])
        this.monthsAux.push(currentMonth - 1)
      }
      this.months = monthsInOrder
    }
  },
  mounted () {
    this.orderMonths()
    this.timelineItems.push({
      year: {
        from: '2017',
        to: '2018'
      },
      items: []
    })
    AppointmentsService.getFinishedAppointments((finishedppointments) => {
      this.finishedppointments = 'Nenhuma este mês'
      finishedppointments = finishedppointments.filter(a => moment(a.dateTime).format('YYYY/MM') === moment().format('YYYY/MM'))
      if (finishedppointments.length > 0) {
        let diff = moment(finishedppointments[finishedppointments.length - 1].dateTime).diff(moment(), 'days')
        if (diff >= 0) {
          this.finishedppointments = finishedppointments.length.toString() + ' consulta' + (finishedppointments.length > 1 ? 's' : '') + ' esse mês'
        }
      }
    })
    AppointmentsService.getDayAppointments(moment().format().substr(0, 10), (appointmentsToday) => {
      this.appointmentsToday = 'Nenhuma'
      let appointmentsDone = appointmentsToday.filter(a => a.status === 'SCHEDULED')
      if (appointmentsDone.length > 0) {
        this.appointmentsToday = appointmentsDone.length.toString() + ' agendada' + (appointmentsDone.length > 1 ? 's' : '')
      }
    })
    AppointmentsService.getLastAppointments((graphItems) => {
      this.appointments = graphItems
      this.graphItems
        .push({
          label: 'Consultas',
          backgroundColor: '#F44336',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        })
      var currentMonth
      var date
      var appointmentTimeline
      var appointment
      for (var x = this.appointments.length - 1; x >= 0; x--) {
        appointment = this.appointments[x]
        currentMonth = moment(appointment.dateTime.substr(0, 10), 'AAAA-MM-DD').format('MM')
        date = moment(appointment.dateTime).format('DD/MM')
        appointmentTimeline = {
          title: moment(appointment.dateTime).format('HH:mm'),
          description: 'Consulta do animal ' + appointment.animal.name + ' com o veterinário ' + appointment.veterinary.name,
          nameMonth: date
        }

        if (!(this.timelineItems[0].items && this.timelineItems[0].items.find(x => x.nameMonth === date))) {
          appointmentTimeline.first = true
        }

        this.timelineItems[0].items.push(appointmentTimeline)
        this.graphItems[0].data[this.monthsAux.indexOf(currentMonth - 1)]++
      }
      InternmentsService.getLastInternments((graphItems) => {
        this.internments = graphItems
        this.graphItems
          .push({
            label: 'Internamentos',
            backgroundColor: '#2196F3',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          })
        var internmentTimeline
        var internment
        for (var x = this.internments.length; x > 0; x--) {
          internment = this.internments[x - 1]
          currentMonth = moment(internment.busyAt.substr(0, 10), 'AAAA-MM-DD').format('MM')
          date = moment(internment.busyAt).format('DD/MM')
          internmentTimeline = {
            title: moment(internment.busyAt).format('HH:mm'),
            description: 'Internamento do animal ' + internment.animal.name + ' no leito ' + internment.bed.name,
            nameMonth: date
          }
          if (!(this.timelineItems[0].items && this.timelineItems[0].items.find(x => x.nameMonth === date))) {
            internmentTimeline.first = true
          }
          this.timelineItems[0].items.push(internmentTimeline)
          this.graphItems[1].data[this.monthsAux.indexOf(currentMonth - 1)]++
        }
      })
    })
  }
}
</script>

<style>
#timeline {
  height: 554px !important;
  overflow-y: auto;
}
</style>
