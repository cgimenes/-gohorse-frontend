<template>
  <v-select
    :label="label"
    v-model="supplier"
    autocomplete
    :items="items"
    :filter="customFilter"
    item-text="name"
    item-value="id"
    :value="select"
  ></v-select>
</template>

<script>
  import SuppliersService from './SuppliersService'

  export default {
    props: {
      label: {
        type: String,
        default: 'Supplier'
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
        console.log(item.name)
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
      SuppliersService.getSuppliersByName('',(supplier) => {
      this.items = supplier
      })
    },
    computed: {
      supplier: {
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
