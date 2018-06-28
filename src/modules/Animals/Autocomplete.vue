<template>
  <v-select
    :items="owners"
    :filter="customFilter"
    v-model="a1"
    item-text="name"
    label="Proprietário"
    autocomplete
  ></v-select>
</template>

<script>
  import OwnersService from '../Owners/OwnersService'

  export default {
    data () {
      return {
        a1: null,
        owners: [],
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
      OwnersService.getOwnersByName('',(owners) => {
        this.owners = owners
      })
    }
  }
</script>
