<template lang="pug">
  span(v-html="title")
</template>

<script>
  export default {
    data () {
      return {
        title: this.$router.currentRoute.meta.title
      }
    },
    methods: {
      updateTitle () {
        this.title = this.$router.currentRoute.meta.title
      }
    },
    watch: {
      '$route': function () {
        this.updateTitle()
      }
    }
  }
</script>
