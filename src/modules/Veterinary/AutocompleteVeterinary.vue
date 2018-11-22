<template>
  <v-select
    :label="label"
    v-model="veterinary"
    autocomplete
    :items="items"
    :filter="customFilter"
    item-text="name"
    item-value="id"
    :value="select"
  ></v-select>
</template>

<script>
  import VeterinariesService from './VeterinariesService'

  export default {
    props: {
      label: {
        type: String,
        default: 'Veterinário'
      },
      model: {
        type: Object,
        required: true,
        default () {
          return {}
        }
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        items: [],
        select: null,
        customFilter (item, queryText, itemText) {
          const hasValue = val => val != null ? val : ''
          const text = hasValue(item.name)
          const query = hasValue(queryText)
          return text.toString()
            .toLowerCase()
            .indexOf(query.toString().toLowerCase()) > -1
        }
      }
    },
    mounted () {
      VeterinariesService.getVeterinaries((veterinaries) => {
        this.items = veterinaries
      })
    },
    computed: {
      veterinary: {
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
