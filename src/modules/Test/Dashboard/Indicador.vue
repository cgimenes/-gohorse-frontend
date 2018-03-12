<template lang="pug">
  v-card.indicador(dark :class="color")
    v-card-title
      div.headline {{ title }}
      h1 {{ value }}
    v-icon {{icon}}
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
      msg: 'Welcome to Your Modular Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
  .indicador
    position relative

    .card__title
      z-index 1

    i.icon
      position absolute
      font-size 6em !important
      top 0
      right 0
      opacity .2
      z-index 0
</style>
