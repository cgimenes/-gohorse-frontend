<template>
  <v-text-field required :rules='[rules.empty]' :label="label" v-model="telefone" :mask="telefoneMask" :disabled="disabled"></v-text-field>
</template>

<script>
  export default {
    data() {
      return{
        rules: {
          empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!'
        }
      }
    },
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
