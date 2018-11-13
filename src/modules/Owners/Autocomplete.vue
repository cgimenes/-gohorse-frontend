<template>
<v-select :label="label" v-model="proprietario" autocomplete :loading="loading" :items="items" item-text="name" item-value="id" :search-input.sync="search" :value="select">
</v-select>
</template>

<script>
  import OwnersService from './OwnersService'

export default {
  props: {
    label: {
      type: String,
      default: 'Proprietario'
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
      loading: false,
      items: [],
      search: '',
      select: ''
    }
  },
  watch: {
    search (val) {
      this.items = []
      if (this && this.searchTimeout) {
        clearTimeout(this.searchTimeout)
      }
      if (val && val.length >= 3) {
        val && this.querySelections(val)
      }
    }
  },
  mounted () {
    OwnersService.getOwnersByName('', (owners) => {
      this.items = owners
      this.loading = false
    })
  },
  methods: {
    querySelections (v) {
      this.loading = true
      this.searchTimeout = setTimeout(() => {
        OwnersService.getOwnersByName(v, (owners) => {
          this.items = owners
          this.loading = false
        })
      }, 100)
    }
  },
  computed: {
    proprietario: {
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
