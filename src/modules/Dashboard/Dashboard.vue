<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex sm12="sm12" md8="md8" lg8="lg8">
      <v-layout row="row" wrap="wrap">
        <v-flex sm12="sm12" md6="md6" lg6="lg6">
          <indicador title="Consultas Agendadas" value="1000" color="deep-purple darken-1" icon="assignment">
          </indicador>
        </v-flex>
        <v-flex sm12="sm12" md6="md6" lg6="lg6">
          <indicador title="Consultas Hoje" value="1000" color="pink darken-1" icon="today">
          </indicador>
        </v-flex>
        <v-flex sm12="sm12">
          <v-card>
            <v-card-title>
            </v-card-title>
            <v-card-text>
              <grafico-barras></grafico-barras>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex sm12="sm12" md4="md4" lg4="lg4">
      <v-card id="timeline">
        <Timeline :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems" />
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import Indicador from './Indicador'
import Timeline from 'timeline-vuejs'
import GraficoBarras from './GraficoBarras'
import GraficoPizza from './GraficoPizza'
import GraficoLinhas from './GraficoLinhas'

export default {
  components: {
    Indicador,
    Timeline,
    GraficoLinhas,
    GraficoPizza,
    GraficoBarras
  },
  data() {
    return {
      messageWhenNoItems: 'Nenhum registro encontrado',
      timelineItems: [{
        year: {
          from: '2017',
          to: '2018'
        },
        items: [{
            nameMonth: '17 de Outubro',
            title: '16:00',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            nameMonth: '16 de Outubro',
            title: '17:00',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            title: '15:00',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            nameMonth: '17 de Dezembro',
            title: '12:00',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
        ]
      },
    ],
      msg: 'Bem vindo ao GoHorse'
    }
  }
}
</script>

<style>
#timeline{
  height: 586px !important;
  overflow-y: auto;
}
</style>
