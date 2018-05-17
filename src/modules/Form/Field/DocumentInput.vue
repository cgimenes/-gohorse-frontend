<template>
  <v-text-field :label="label" v-model="document" :mask="documentMask" :disabled="disabled"></v-text-field>
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
      documentMask () {
        if (this.model.length > 13) {
          return '##.###.###/####-##'
        }
        return '###.###.###-#####'
      },
      document: {
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
