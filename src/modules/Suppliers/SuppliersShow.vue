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
                <h1>{{ supplier.name }}</h1>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Dados do Proprietário</h4>
                <p>
                  <b>Nome: </b> {{ supplier.name }}
                </p>
                <p>
                  <b>CPF: </b> {{ supplier.document | cpf }}
                </p>
                <p>
                  <b>Telefone: </b> {{ supplier.phone | phone }}
                </p>
                <p>
                  <b>Tipo de distribuição: </b> {{ supplier.distributionType.name }}
                </p>
              </v-flex>
              <v-flex col xs12 sm6>
                <h4 class="grey--text mb-3">Endereço</h4>
                <p>
                  <b>Endereço: </b> {{supplier.address.postalCode.streetName}}, {{supplier.address.number}} - {{supplier.address.complement}}, {{supplier.address.postalCode.city}} {{supplier.address.postalCode.state}}
                </p>
                <p>
                  <b>CEP: </b> {{supplier.address.postalCode.code | cep }}
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
  import SuppliersService from './SuppliersService'

  export default {
    data () {
      return {
        fab: false,
        supplier: {
          distributionType: {},
          address: {
            number: null,
            complement: null,
            postalCode: {
              code: null,
              streetType: 'Rua',
              streetName: '',
              neighbourhood: '',
              city: '',
              state: '',
              country: 'Brasil'
            }
          }
        }
      }
    },
    mounted () {
      SuppliersService.getSupplierDetails(this.$route.params.id, (supplier) => {
        this.supplier = supplier
      })
    },
    methods: {
      edit () {
        this
          .$router
          .push('/suppliers/' + this.supplier.id + '/edit')
      },
      destroy () {
        this.$swal({
          title: 'Você deseja deletar este fornecedor?',
          text: 'Esta operação não pode ser desfeita',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim, eu quero deletar!',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            SuppliersService.removeSupplier(this.supplier.id, (res) => {
              this
                .$router
                .push('/suppliers/')
            })
          }
        })
      }
    }
  }
</script>
