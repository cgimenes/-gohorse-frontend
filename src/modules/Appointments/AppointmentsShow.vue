<template>
  <v-container grid-list-lg fluid>

    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition"        >
            <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
              <v-icon>more_vert</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn fab dark small color="blue" @click="edit()">
              <v-icon>mode_edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="red" @click="destroy()">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-speed-dial>
          <v-container grid-list-lg fluid>
            <v-layout row wrap>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados da Consulta</h4>
                <p>
                  <b>Proprietário: </b> {{ appointment.animal.owner.name }}
                </p>
                <p>
                  <b>Paciente: </b> {{ appointment.animal.name }}
                </p>
                <p>
                  <b>Veterinário: </b> {{ appointment.veterinary.name }}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h3 class="grey--text mb-3">Endereço</h3>
                <p>
                  <b>Local: </b> {{ appointment.place === 'CLINIC' ? 'Clínica' : `${appointment.address.postalCode.streetName}, ${appointment.address.number}, ${appointment.address.complement}, ${appointment.address.postalCode.city}, ${appointment.address.postalCode.state}`}}
                </p>
                <p>
                  <b>Data:</b> {{ appointment.dateTime.date }}
                </p>
                <p>
                  <b>Hora:</b> {{ appointment.dateTime.hour }}
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppointmentsService from './AppointmentsService';
import Moment from 'moment';

export default {
  data() {
    return {
      fab: false,
      appointment: {
        id: '',
        animal: {
          owner: {},
        },
        veterinary: {},
        dateTime: {},
        status: '',
        appointmentType: '',
        place: '',
        address: {
          postalCode: {},
        },
      },
    };
  },
  mounted() {
    AppointmentsService.getAppointmentDetails(
      this.$route.params.id,
      appointment => {
        this.appointment = {
          ...appointment,
          dateTime: {
            date: new Moment(appointment.dateTime).format('DD/MM/YYYY'),
            hour: new Moment(appointment.dateTime).format('HH:mm'),
          },
        };
      }
    );
  },
  methods: {
    edit() {
      this.$router.push('/appointments/' + this.appointment.id + '/edit');
    },
    destroy() {
      this.$swal({
        title: 'Você deseja deletar este consulta?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não',
      }).then(result => {
        if (result.value) {
          AppointmentsService.removeAppointment(this.appointment.id, res => {
            this.$router.push('/appointments/');
          });
        }
      });
    },
  },
};
</script>
