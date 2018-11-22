<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-list
            two-line
            v-if='invoices.length > 0'>
            <v-list-tile
              avatar
              v-for='invoice in invoices'
              :key='invoice.id'>
              <v-list-tile-content>
                <v-list-tile-title>{{ getOperationName(invoice) }} - {{ invoice.issueDate | dateTime }}</v-list-tile-title>
                <v-list-tile-sub-title>Valor total: {{ invoice.totalValue | currency }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Animal: {{ invoice.operation.animal.name }} - Dono: {{ invoice.operation.animal.owner.name }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn
                  icon
                  ripple
                  @click='pay(invoice)'>
                  <v-icon color='grey lighten-1'>thumb_up_alt</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
          <p class='grey--text pa-5' v-if='invoices.length == 0'>Nenhum título encontrado</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import InvoicesService from './InvoicesService'

  export default {
    data() {
      return {
        invoices: []
      }
    },
    mounted() {
      InvoicesService.getInvoices(invoices => {
        this.invoices = invoices
      })
    },
    methods: {
      getOperationName(invoice) {
        switch (invoice.operationName) {
          case "APPOINTMENT":
            return "Consulta";
          case "SURGERY":
            return "Cirurgia";
          case "INTERNMENT":
            return "Internamento";
        }
      },
      pay(invoice) {
        this.$swal({
          title: 'Você deseja confirmar o pagamento deste título?',
          text: 'Esta operação não pode ser desfeita',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim, eu quero confirmar!',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            InvoicesService.payInvoice(invoice.id, () => {
              this.invoices.splice(this.invoices.indexOf(invoice), 1);
              this.$toasted.success('Pagamento do título confirmado com sucesso!', {
                icon: 'check'
              });
            });
          }
        });
      }
    }
  }
</script>
