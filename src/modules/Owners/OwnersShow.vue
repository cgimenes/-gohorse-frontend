<template>
  <v-container grid-list-lg fluid>

    <v-layout row="row" wrap="wrap">
      <v-flex xs12>
        <v-card>
          <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition">
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
                <h1>{{ owner.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do Proprietário</h4>
                <p>
                  <b>Nome: </b> {{ owner.name }}
                </p>
                <p>
                  <b>CPF: </b> {{ owner.cpf }}
                </p>
                <p>
                  <b>Telefone: </b> {{ owner.phone | phoneMask }}
                </p>
                <p>
                  <b>Data de Nascimento: </b> {{ owner.birthDate }}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Endereço</h4>
                <p>
                  <b>Endereço: </b> {{owner.address.postalCode.streetName}}, {{owner.address.number}} - {{owner.address.complement}}, {{owner.address.postalCode.city}} {{owner.address.postalCode.state}}
                </p>
                <p>
                  <b>CEP: </b> {{owner.address.postalCode.code }}
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
  import OwnersService from './OwnersService'

  export default {
    data () {
      return {
        fab: false,
        owner: {}
      }
    },
    mounted () {
      OwnersService.getOwnerDetails(this.$route.params.id, (owner) => {
        this.owner = owner
      })
    },
    methods: {
      edit () {
        this
          .$router
          .push('/owners/' + this.owner.id + '/edit')
      },
      destroy () {
        this.$swal({
          title: 'Você deseja deletar este proprietário?',
          text: 'Esta operação não pode ser desfeita',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim, eu quero deletar!',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            OwnersService.removeOwner(this.owner.id, (res) => {
              this
                .$router
                .push('/owners/')
            })
          }
        })
      }
    }
  }
</script>
