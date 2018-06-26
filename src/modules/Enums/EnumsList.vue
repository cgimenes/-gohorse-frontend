<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-btn absolute dark fab top right small color='red' to='/owners/create' >
            <v-icon> add </v-icon>
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import EnumsService from './EnumsService'

  export default {
    data () {
      return {
        enums: []
      }
    },
    mounted () {
      EnumsService.getEnum((enums) => {
        this.enums = enums
      })
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
