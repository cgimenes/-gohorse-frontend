<template>
  <v-container grid-list-lg="grid-list-lg" fluid="fluid">
    <v-layout row="row" wrap="wrap">
      <v-flex sm12="sm12" md6="md6" lg4="lg4">
        <indicador
          title="Consultas Agendadas"
          value="1000"
          color="deep-purple darken-1"
          icon="assignment">
        </indicador>
      </v-flex>
      <v-flex sm12="sm12" md6="md6" lg4="lg4">
        <indicador
          title="Consultas Hoje"
          value="1000"
          color="pink darken-1"
          icon="today">
        </indicador>
      </v-flex>
      <v-flex sm12="sm12" md6="md6" lg4="lg4">
        <indicador
          title="Internamentos"
          value="1000"
          color="deep-orange darken-2"
          icon="list">
        </indicador>
      </v-flex>
      <v-flex sm6="sm6">
        <v-card>
          <v-card-title>
          </v-card-title>
          <v-card-text>
            <grafico-barras></grafico-barras>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex sm6="sm6">
        <v-card>
          <v-card-title>
          </v-card-title>
          <v-card-text>
            <grafico-pizza></grafico-pizza>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Indicador from './Indicador'
import GraficoBarras from './GraficoBarras'
import GraficoPizza from './GraficoPizza'
import GraficoLinhas from './GraficoLinhas'

export default {
  components: {Indicador, GraficoLinhas, GraficoPizza, GraficoBarras},
  data () {
    return {
      msg: 'Bem vindo ao GoHorse'
    }
  }
}
</script>
