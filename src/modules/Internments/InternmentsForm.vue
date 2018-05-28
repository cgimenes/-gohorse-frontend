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
                <v-menu
                 ref="menu"
                 :close-on-content-click="false"
                 v-model="menu"
                 nudge-right="40"
                 lazy
                 transition="scale-transition"
                 offset-y
                 full-width
                 max-width="290px"
                 min-width="290px"
               >
                 <v-text-field
                   slot="activator"
                   v-model="internment.date"
                   label="Date"
                   hint="MM/DD/YYYY format"
                   persistent-hint
                   prepend-icon="event"
                 ></v-text-field>
                 <v-date-picker v-model="internment.date" no-title></v-date-picker>
               </v-menu>
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
          busyAt: '',//moment(Date.now()).format('DD/MM/YY HH:MM'),
          busyUntil: '',
          date: null
      },
      menu: false
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
