<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>

      <v-btn absolute dark fab top right small color='red' to='/bed/create'>
        <v-icon>add</v-icon>
      </v-btn>

      <v-flex xs12 sm4 lg3 xg2 v-for="bed in beds" :key="bed.id">
        <v-card :color="getColor(bed)">
          <v-card-title primary-title>
            <div>
              <h4 class="headline text-truncation mb-3">{{ bed.code }}</h4>
              <div>{{ getBusy(bed) }}</div>
            </div>
          </v-card-title>
          <v-card-actions class="py-2">
            <v-btn flat color="red" block @click="destroy(bed)">
              <v-icon>delete</v-icon>
            </v-btn>
            <v-btn flat color="blue" block @click="edit(bed)">
              <v-icon>mode_edit</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12  v-if="beds.length == 0">
        <v-card>
          <p class='grey--text pa-5'>Nenhum leito encontrado</p>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import BedService from './BedService'
import ListInitialLetter from '@core/components/ListInitialLetter'

export default {
  components: {ListInitialLetter},
  data () {
    return {
      beds: []
    }
  },
  mounted () {
    this.loadBeds()
  },
  methods: {
    loadBeds () {
      BedService.getBeds((bed) => {
        this.beds = bed
      })
    },
    getBusy (bed) {
      if (bed.busy) {
        return 'Ocupado'
      }
      return 'Livre'
    },
    getColor (bed) {
      if (bed.busy) {
        return 'red lighten-4'
      }
      return 'white'
    },
    edit (bed) {
      this
        .$router
        .push('/bed/' + bed.id + '/edit')
    },
    destroy (bed) {
      this.$swal({
        title: 'Você deseja deletar este leito?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          BedService.removeBed(bed.id, (res) => {
            this.loadBeds()
          })
        }
      })
    }
  }
}
</script>
