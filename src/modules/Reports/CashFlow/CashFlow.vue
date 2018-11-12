<template lang="pug">
  v-container.grid-list-lg.fluid
    v-dialog(
    v-model="loading"
    hide-overlay
    persistent
    width="300"
    )
      v-card(
      color="primary"
      dark
      )
        v-card-text
          span Carregando
          v-progress-linear(
          indeterminate
          color="white"
          class="mb-0"
          )
    v-layout.row.wrap(v-if="!loading")
      .flex
        template
          v-data-table(
          :headers="headers"
          :items="getInitialBalances()"
          hide-actions
          class="elevation-1"
          )
            template(
            slot="items"
            slot-scope="props"
            )
              td
                strong Saldo inicial no período
              td(:text-content.prop="props.item.january | currency")
              td(:text-content.prop="props.item.february | currency")
              td(:text-content.prop="props.item.march | currency")
              td(:text-content.prop="props.item.april | currency")
              td(:text-content.prop="props.item.may | currency")
              td(:text-content.prop="props.item.june | currency")
              td(:text-content.prop="props.item.july | currency")
              td(:text-content.prop="props.item.august | currency")
              td(:text-content.prop="props.item.september | currency")
              td(:text-content.prop="props.item.october | currency")
              td(:text-content.prop="props.item.november | currency")
              td(:text-content.prop="props.item.december | currency")

        template
          v-container.grid-list-lg.fluid
            v-layout.row.wrap
              strong Receitas

        template
          v-data-table(
          :headers="headers"
          :items="getSummary('income')"
          hide-actions
          class="elevation-1"
          no-data-text="Nenhuma receita para o período informado"
          )
            template(
            slot="items"
            slot-scope="props"
            )
              td
                strong(v-text="props.item.operation")
              td(:text-content.prop="props.item.values.january | currency")
              td(:text-content.prop="props.item.values.february | currency")
              td(:text-content.prop="props.item.values.march | currency")
              td(:text-content.prop="props.item.values.april | currency")
              td(:text-content.prop="props.item.values.may | currency")
              td(:text-content.prop="props.item.values.june | currency")
              td(:text-content.prop="props.item.values.july | currency")
              td(:text-content.prop="props.item.values.august | currency")
              td(:text-content.prop="props.item.values.september | currency")
              td(:text-content.prop="props.item.values.october | currency")
              td(:text-content.prop="props.item.values.november | currency")
              td(:text-content.prop="props.item.values.december | currency")

            template(slot="footer")
              td
                strong Total de receitas
              td(:text-content.prop="getTypeTotal('income').january | currency")
              td(:text-content.prop="getTypeTotal('income').february | currency")
              td(:text-content.prop="getTypeTotal('income').march | currency")
              td(:text-content.prop="getTypeTotal('income').april | currency")
              td(:text-content.prop="getTypeTotal('income').may | currency")
              td(:text-content.prop="getTypeTotal('income').june | currency")
              td(:text-content.prop="getTypeTotal('income').july | currency")
              td(:text-content.prop="getTypeTotal('income').august | currency")
              td(:text-content.prop="getTypeTotal('income').september | currency")
              td(:text-content.prop="getTypeTotal('income').october | currency")
              td(:text-content.prop="getTypeTotal('income').november | currency")
              td(:text-content.prop="getTypeTotal('income').december | currency")


        template
          v-container.grid-list-lg.fluid
            v-layout.row.wrap
              strong Despesas

        template
          v-data-table(
          :headers="headers"
          :items="getSummary('expense')"
          hide-actions
          class="elevation-1"
          no-data-text="Nenhuma despesa para o período informado"
          )
            template(
            slot="items"
            slot-scope="props"
            )
              td
                strong(v-text="props.item.operation")
              td(:text-content.prop="props.item.values.january | currency")
              td(:text-content.prop="props.item.values.february | currency")
              td(:text-content.prop="props.item.values.march | currency")
              td(:text-content.prop="props.item.values.april | currency")
              td(:text-content.prop="props.item.values.may | currency")
              td(:text-content.prop="props.item.values.june | currency")
              td(:text-content.prop="props.item.values.july | currency")
              td(:text-content.prop="props.item.values.august | currency")
              td(:text-content.prop="props.item.values.september | currency")
              td(:text-content.prop="props.item.values.october | currency")
              td(:text-content.prop="props.item.values.november | currency")
              td(:text-content.prop="props.item.values.december | currency")

            template(slot="footer")
              tr
                td
                  strong Total de despesas
              td(:text-content.prop="getTypeTotal('expense').january | currency")
              td(:text-content.prop="getTypeTotal('expense').february | currency")
              td(:text-content.prop="getTypeTotal('expense').march | currency")
              td(:text-content.prop="getTypeTotal('expense').april | currency")
              td(:text-content.prop="getTypeTotal('expense').may | currency")
              td(:text-content.prop="getTypeTotal('expense').june | currency")
              td(:text-content.prop="getTypeTotal('expense').july | currency")
              td(:text-content.prop="getTypeTotal('expense').august | currency")
              td(:text-content.prop="getTypeTotal('expense').september | currency")
              td(:text-content.prop="getTypeTotal('expense').october | currency")
              td(:text-content.prop="getTypeTotal('expense').november | currency")
              td(:text-content.prop="getTypeTotal('expense').december | currency")

        template
          v-container.grid-list-lg.fluid
            v-layout.row.wrap
              strong Totalizadores

        template
          v-data-table(
          :headers="headers"
          hide-actions
          class="elevation-1"
          :items="getTotalizers()"
          )
            template(
            slot="items"
            slot-scope="props"
            )
              td
                strong(v-text="props.item.title")
              td(:text-content.prop="props.item.values.january | currency")
              td(:text-content.prop="props.item.values.february | currency")
              td(:text-content.prop="props.item.values.march | currency")
              td(:text-content.prop="props.item.values.april | currency")
              td(:text-content.prop="props.item.values.may | currency")
              td(:text-content.prop="props.item.values.june | currency")
              td(:text-content.prop="props.item.values.july | currency")
              td(:text-content.prop="props.item.values.august | currency")
              td(:text-content.prop="props.item.values.september | currency")
              td(:text-content.prop="props.item.values.october | currency")
              td(:text-content.prop="props.item.values.november | currency")
              td(:text-content.prop="props.item.values.december | currency")
</template>

<script>
  import ReportsService from '../ReportsService'

  export default {
    components: {},
    data() {
      return {
        year: new Date().getFullYear(),
        loading: true,
        report: null,
        headers: [
          {
            text: '',
            value: 'operation',
            sortable: false
          }, {
            text: 'Janeiro',
            value: 'january',
            sortable: false
          }, {
            text: 'Fevereiro',
            value: 'february',
            sortable: false
          }, {
            text: 'Março',
            value: 'march',
            sortable: false
          }, {
            text: 'Abril',
            value: 'april',
            sortable: false
          }, {
            text: 'Maio',
            value: 'may',
            sortable: false
          }, {
            text: 'June',
            value: 'june',
            sortable: false
          }, {
            text: 'Julho',
            value: 'july',
            sortable: false
          }, {
            text: 'Agosto',
            value: 'august',
            sortable: false
          }, {
            text: 'Setembro',
            value: 'september',
            sortable: false
          }, {
            text: 'Outubro',
            value: 'october',
            sortable: false
          }, {
            text: 'Novembro',
            value: 'november',
            sortable: false
          }, {
            text: 'Dezembro',
            value: 'december',
            sortable: false
          }
        ],
        operations: {
          surgery: 'Cirurgia',
          appointment: 'Consulta'
        },
      }
    },
    mounted () {
      this.getReport(this.year)
    },
    methods: {
      getReport (year) {
        this.loading = true;
        ReportsService.getCashFlow(year, (report) => {
          this.report = report;
          this.loading = false
        })
      },
      getInitialBalances () {
        return [this.report.initialBalances];
      },
      getSummary (type) {
        if (!this.report.summarized[type]) {
          return [];
        }
        return Object.keys(this.report.summarized[type]).map(k => {
          return {
            operation: this.operations[k],
            values: this.report.summarized[type][k]
          }
        })
      },
      getTypeTotal (type) {
        return this.report.typeTotalBalances[type] === undefined ? {} : this.report.typeTotalBalances[type];
      },
      getTotalizers () {
        return [
          {
            title: 'Saldo total no período',
            values: this.report.totalPeriodBalances
          }, {
            title: 'Saldo total',
            values: this.report.totalBalances
          }
        ]
      }
    }
  }
</script>
