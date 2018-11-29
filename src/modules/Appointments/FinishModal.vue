<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn icon ripple slot="activator">
        <v-icon color='grey lighten-1'>thumb_up_alt</v-icon>
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Finalização de consulta
        </v-card-title>

        <v-card-text>
          <v-text-field
            required
            mask='###,##'
            return-masked-value="true"
            v-model='value'
            label='Valor da Consulta'
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="finish"
          >
            Finalizar
          </v-btn>
          <v-btn
            flat
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import AppointmentsService from './AppointmentsService'

  export default {
    props: {
      appointment: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        dialog: false,
        value: ''
      }
    },
    methods: {
      finish () {
        AppointmentsService.finishAppointment(this.appointment.id, Number.parseFloat(this.value.replace(',', '.')), (res) => {
          this.appointment.status = 'FINISHED'
          this.$toasted.success('Consulta finalizada com sucesso!', {
            icon: 'check'
          })
          this.dialog = false
        })
      }
    }
  }
</script>
