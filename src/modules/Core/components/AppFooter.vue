<template lang="pug">
  v-footer.primary-gradient(height="auto")
    v-layout(row wrap justify-center)
      v-btn(color='white', flat v-for='link in links', :key='link')
        | {{ link }}
      v-flex(xs12 py-3 text-xs-center white--text)
        | ©2018 —
        strong Time 02

</template>
<script>
  export default {
    data: () => ({
      links: ['Home', 'Sobre', 'Time', 'Serviços', 'Entre em contato']
    })
  }
</script>

<style>
  footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
