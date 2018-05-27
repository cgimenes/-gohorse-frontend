<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Internamento</h4>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="name" label="Nome do Animal" id="name" v-model="internment.animalId" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="290px">
                    <v-text-field slot="activator" v-model="date" label="Data de internamento" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="modal = false">Cancelar</v-btn>
                      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-menu>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="290px">
                    <v-text-field slot="activator" v-model="date" label="Data de liberação" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="modal = false">Cancelar</v-btn>
                      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-menu>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveInternment()">Salvar</v-btn>
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

export default {
  components: {},
  data() {
    return {
      internment: {
          animalId: '',
          bedId: '',
          busyAt: '',//moment(Date.now()).format('DD/MM/YY HH:MM'),
          busyUntil: ''
      }
    }
  },
  methods: {
    saveInternment() {
      InternmentsService.saveInternment(this.internment, (res) => {
        this.$toasted.success('Internamento criado com sucesso!', {icon: 'check'})
        this
          .$router
          .push('/internments/')
      })
    },
    getDataForEdit() {
      InternmentsService.getInternmentDetails(this.$route.params.id, (internment) => {
        this.internment = internment
      })
    }    
  },
  created() {
    if(this.$route.params.id){
      this.getDataForEdit()
    }
  }
}
</script>

