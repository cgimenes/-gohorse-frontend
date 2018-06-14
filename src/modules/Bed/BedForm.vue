<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-container grid-list-lg="grid-list-lg" fluid="fluid">
            <v-layout row="row" wrap="wrap">
              <v-flex col xs12>
                <h4 class="grey--text">Dados do Leito</h4>
              </v-flex>
              <v-flex col xs12 >
                <v-text-field name="name" label="Identificação" id="code" v-model="bed.code" key="code"></v-text-field>
              </v-flex>
              <v-flex col xs12>
                <v-btn color="primary" @click="saveBed()">Salvar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import BedService from './BedService'

export default {
  data () {
    return {
      bed: {
        code: '',
      }
    }
  },
  methods: {
    saveBed () {
      BedService.saveBed(this.bed, (res) => {
        this
          .$router
          .push('/bed/')
      })
    },
    getDataForEdit () {
      BedService.getBedDetails(this.$route.params.id, (bed) => {
        this.bed = bed
      })
    }
  },
  created () {
    if (this.$route.params.id) {
      this.getDataForEdit()
    }
  }
}
</script>
