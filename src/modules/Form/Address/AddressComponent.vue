<template lang="pug">
  <div id="address-form">
    <v-flex>
      <v-text-field name="address" v-model="address.street" label="Endereço" id="address"></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field name="city" v-model="address.city" label="Cidade" id="city"></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field name="state" v-model="address.state" label="Estado" id="state"></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field name="complement" v-model="address.complement" label="Complemento" id="complement"></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field name="number" v-model="address.number" label="Número" id="number"></v-text-field>
    </v-flex>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default () {
        return {
          street: '',
          city: '',
          state: '',
          complement: '',
          number: ''
        }
      }
    }
  }
}
</script>
