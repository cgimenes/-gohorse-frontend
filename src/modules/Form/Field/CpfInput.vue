<template>
  <v-text-field :label="label" v-model="cpf" :mask="'###.###.###-###'" :disabled="disabled"></v-text-field>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'CPF'
      },
      model: {
        type: String,
        required: true,
        default () {
          return ''
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      cpf: {
        get: function () {
          return this.model
        },
        set: function (newValue) {
          this.$emit('update:model', newValue)
        }
      }
    }
  }
</script>
