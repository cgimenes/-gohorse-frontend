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
                <v-text-field name="name" label="Animal" id="name" v-model="internment.animalId" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-text-field name="name" label="Leito" id="name" v-model="internment.bedId" key="name"></v-text-field>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-dialog
                    ref="dialogBusyAt"
                    v-model="modalBusyAt"
                    :return-value.sync="internment.busyAt"
                    persistent
                    lazy
                    full-width
                    width="290px"
                  >
                  <v-text-field
                    slot="activator"
                    v-model="internment.busyAt"
                    label="Data de Entrada"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="internment.busyAt" scrollable locale="pt-br">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modalBusyAt = false">Cancelar</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialogBusyAt.save(internment.busyAt)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex col xs12 sm6="sm6">
                <v-dialog
                    ref="dialogBusyUntil"
                    v-model="modalBusyUntil"
                    :return-value.sync="internment.busyUntil"
                    persistent
                    lazy
                    full-width
                    width="290px"
                  >
                  <v-text-field
                    slot="activator"
                    v-model="internment.busyUntil"
                    label="Data de Saída"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="internment.busyUntil" scrollable locale="pt-br">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modalBusyUntil = false">Cancelar</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialogBusyUntil.save(internment.busyUntil)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveInternment()">Salvar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      {{ internment }}
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
          busyAt: null,
          busyUntil: null
      },
      modalBusyAt: false,
      modalBusyUntil: false
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
