<template>
  <v-card class="indicador" dark="dark" :class="color">
    <v-card-title>
      <div class="headline">{{ title }}</div>
      <h1>{{ value }}</h1>
    </v-card-title>
    <v-icon>{{icon}}</v-icon>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'done'
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: '--'
    },
    color: {
      type: String,
      default: 'red darken-1'
    }
  },
  data () {
    return {
      msg: 'GoHorse App'
    }
  }
}
</script>

<style>
  .indicador {
    position: relative;
  }
  .indicador .card__title {
    z-index: 1;
  }
  .indicador i.icon {
    position: absolute;
    font-size: 6em !important;
    top: 0;
    right: 0;
    opacity: 0.2;
    z-index: 0;
  }
</style>
