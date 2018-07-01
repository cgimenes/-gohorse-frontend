<template>
  <v-text-field :label="label" v-model="telefone" :mask="telefoneMask" :disabled="disabled"></v-text-field>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Telefone'
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
      telefoneMask () {
        if (this.model.length > 10) {
          return '(##) # ####-####'
        }
        return '(##) ####-#####'
      },
      telefone: {
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
