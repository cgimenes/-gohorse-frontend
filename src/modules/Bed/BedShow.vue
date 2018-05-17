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
              <v-flex col xs12>
                <h1>{{ bed.code }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do leito</h4>
                <p>
                  <b>Número: </b> {{ bed.code }}
                </p>
                <p>
                  <b>Ocupado: </b> {{ bed.busy}}
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

import BedService from './BedService'

export default {
  data () {
    return {
      fab: false,
      bed: {
        Code: '',
        busy: '',
      }
    }
  },
  mounted () {
    BedService.getBedDetails(this.$route.params.id, (bed) => {
      this.bed = bed
    })
  },
  methods: {
    edit () {
      this
        .$router
        .push('/bed/' + this.bed.id + '/edit')
    },
    destroy () {
      this.$swal({
        title: 'Você deseja deletar este leito?',
        text: 'Esta operação não pode ser desfeita',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, eu quero deletar!',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.value) {
          BedService.removeBed(this.bed.id, (res) => {
            this
              .$router
              .push('/bed/')
          })
        }
      })
    }
  }
}
</script>
