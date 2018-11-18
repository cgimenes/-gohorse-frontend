<template>
  <v-select
    :label="label"
    v-model="sex"
    autocomplete
    :items="items"
    :filter="customFilter"
    item-text="name"
    item-value="id"
    :value="select"
  ></v-select>
</template>

<script>
import EnumeratorsService from './EnumeratorsService'

  export default {
    props: {
      label: {
        type: String,
        default: 'Sex'
      },
      model: {
        type: Object,
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
        EnumeratorsService.getEnumeratorsByType('sexo',(sexs) => {
        this.items = sexs
      })
    },
    computed: {
      sex: {
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
