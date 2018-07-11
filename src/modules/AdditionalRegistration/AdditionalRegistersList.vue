<template>
  <v-container fluid>
    <v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import AdditionalRegistersService from './AdditionalRegistersService'

  export default {
    data () {
      return {
        enums: []
      }
    },
    mounted () {
      // AdditionalRegistersService.getAdditionalRegistration((additionalRegistration) => {
      //   this.additionalRegistration = additionalRegistration
      // })
    },
    methods: {
      // edit (owner) {
      //   this
      //     .$router
      //     .push('/enums/' + owner.id)
      // }
    }
  }
</script>
