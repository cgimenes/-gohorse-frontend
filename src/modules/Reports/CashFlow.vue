<template lang="pug">
  v-container.grid-list-lg.fluid
    v-layout.row.wrap
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
            td(:text-content.prop="props.item.JANUARY | currency")
            td(:text-content.prop="props.item.FEBRUARY | currency")
            td(:text-content.prop="props.item.MARCH | currency")
            td(:text-content.prop="props.item.APRIL | currency")
            td(:text-content.prop="props.item.MAY | currency")
            td(:text-content.prop="props.item.JUNE | currency")
            td(:text-content.prop="props.item.JULY | currency")
            td(:text-content.prop="props.item.AUGUST | currency")
            td(:text-content.prop="props.item.SEPTEMBER | currency")
            td(:text-content.prop="props.item.OCTOBER | currency")
            td(:text-content.prop="props.item.NOVEMBER | currency")
            td(:text-content.prop="props.item.DECEMBER | currency")

      template
        v-container.grid-list-lg.fluid
          v-layout.row.wrap
            strong Receitas

      template
        v-data-table(
        :items="getSummary('INCOME')"
        hide-actions
        hide-headers
        class="elevation-1"
        )
          template(
          slot="items"
          slot-scope="props"
          )
            td
              strong(v-text="props.item.operation")
            td(:text-content.prop="props.item.values.JANUARY | currency")
            td(:text-content.prop="props.item.values.FEBRUARY | currency")
            td(:text-content.prop="props.item.values.MARCH | currency")
            td(:text-content.prop="props.item.values.APRIL | currency")
            td(:text-content.prop="props.item.values.MAY | currency")
            td(:text-content.prop="props.item.values.JUNE | currency")
            td(:text-content.prop="props.item.values.JULY | currency")
            td(:text-content.prop="props.item.values.AUGUST | currency")
            td(:text-content.prop="props.item.values.SEPTEMBER | currency")
            td(:text-content.prop="props.item.values.OCTOBER | currency")
            td(:text-content.prop="props.item.values.NOVEMBER | currency")
            td(:text-content.prop="props.item.values.DECEMBER | currency")

          template(slot="footer")
            td(colspan="100%")
              strong Total de receitas

      template
        v-container.grid-list-lg.fluid
          v-layout.row.wrap
            strong Despesas

      template
        v-data-table(
        :items="getSummary('EXPENSE')"
        hide-actions
        hide-headers
        class="elevation-1"
        )
          template(
          slot="items"
          slot-scope="props"
          )
            td
              strong(v-text="props.item.operation")
            td(:text-content.prop="props.item.values.JANUARY | currency")
            td(:text-content.prop="props.item.values.FEBRUARY | currency")
            td(:text-content.prop="props.item.values.MARCH | currency")
            td(:text-content.prop="props.item.values.APRIL | currency")
            td(:text-content.prop="props.item.values.MAY | currency")
            td(:text-content.prop="props.item.values.JUNE | currency")
            td(:text-content.prop="props.item.values.JULY | currency")
            td(:text-content.prop="props.item.values.AUGUST | currency")
            td(:text-content.prop="props.item.values.SEPTEMBER | currency")
            td(:text-content.prop="props.item.values.OCTOBER | currency")
            td(:text-content.prop="props.item.values.NOVEMBER | currency")
            td(:text-content.prop="props.item.values.DECEMBER | currency")

          template(slot="footer")
            tr
              td(colspan="100%")
                strong Total de despesas

      template
        v-container.grid-list-lg.fluid
          v-layout.row.wrap
            v-data-table(
            hide-actions
            hide-headers
            class="elevation-1"
            )
              template(slot="footer")
                tr
                  td(colspan="100%")
                    strong Saldo final do período

                tr
                  td(colspan="100%")
                    strong Saldo total
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        headers: [
          {
            text: '',
            value: 'operation',
            sortable: false
          },
          {
            text: 'Janeiro',
            value: 'january',
            sortable: false
          },
          {
            text: 'Fevereiro',
            value: 'february',
            sortable: false
          },
          {
            text: 'Março',
            value: 'march',
            sortable: false
          },
          {
            text: 'Abril',
            value: 'april',
            sortable: false
          },
          {
            text: 'Maio',
            value: 'may',
            sortable: false
          },
          {
            text: 'June',
            value: 'june',
            sortable: false
          },
          {
            text: 'Julho',
            value: 'july',
            sortable: false
          },
          {
            text: 'Agosto',
            value: 'august',
            sortable: false
          },
          {
            text: 'Setembro',
            value: 'september',
            sortable: false
          },
          {
            text: 'Outubro',
            value: 'october',
            sortable: false
          },
          {
            text: 'Novembro',
            value: 'november',
            sortable: false
          },
          {
            text: 'Dezembro',
            value: 'december',
            sortable: false
          }
        ],
        operations: {
          SURGERY: 'Cirurgia',
          APPOINTMENT: 'Consulta'
        },
        report: {
          "year": "2018",
          "initialBalances": {
            "FEBRUARY": 0,
            "MAY": 0,
            "OCTOBER": 0,
            "APRIL": 0,
            "SEPTEMBER": 0,
            "NOVEMBER": 0,
            "DECEMBER": 61.5,
            "MARCH": 0,
            "JULY": 0,
            "AUGUST": 0,
            "JUNE": 0,
            "JANUARY": 0
          },
          "typeTotalBalances": {
            "INCOME": {
              "NOVEMBER": 61.5
            }
          },
          "totalPeriodBalances": {
            "FEBRUARY": 0,
            "MAY": 0,
            "OCTOBER": 0,
            "APRIL": 0,
            "SEPTEMBER": 0,
            "NOVEMBER": 61.5,
            "DECEMBER": 0,
            "MARCH": 0,
            "JULY": 0,
            "AUGUST": 0,
            "JUNE": 0,
            "JANUARY": 0
          },
          "totalBalances": {
            "FEBRUARY": 0,
            "MAY": 0,
            "OCTOBER": 0,
            "APRIL": 0,
            "SEPTEMBER": 0,
            "NOVEMBER": 61.5,
            "DECEMBER": 61.5,
            "MARCH": 0,
            "JULY": 0,
            "AUGUST": 0,
            "JUNE": 0,
            "JANUARY": 0
          },
          "summarized": {
            "INCOME": {
              "SURGERY": {
                "NOVEMBER": 20.5
              },
              "APPOINTMENT": {
                "NOVEMBER": 41
              }
            }
          }
        }
      }
    },
    mounted () {
      // ProductsService.getProduct((products) => {
      //   this.products = products
      // })
    },
    methods: {
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
      }
    }
  }
</script>
