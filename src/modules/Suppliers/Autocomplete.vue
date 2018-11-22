<template>
<v-select :label="label" v-model="supplier" autocomplete :loading="loading" :items="items" item-text="name" item-value="id" :search-input.sync="search" :value="select">
</v-select>
</template>

<script>
import SuppliersService from '../Suppliers/SuppliersService'

export default {
  props: {
    label: {
      type: String,
      default: 'Fornecedor'
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
      loading: false,
      items: [],
      search: '',
      select: ''
    }
  },
  watch: {
    search (val) {
      this.items = null
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }
      if (val.length >= 3) {
        val && this.querySelections(val)
      }
    }
  },
  mounted () {
    SuppliersService.getSuppliersByName('', (suppliers) => {
      this.items = suppliers
      this.loading = false
    })
  },
  methods: {
    querySelections (v) {
      this.loading = true
      this.searchTimeout = setTimeout(() => {
        SuppliersService.getSuppliersByName(v, (suppliers) => {
          this.items = suppliers
          this.loading = false
        })
      }, 100)
    }
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
