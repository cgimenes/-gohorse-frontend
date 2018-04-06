<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-container(grid-list-lg fluid)
            v-layout(row wrap)
              v-flex
              v-flex
                v-text-field(
                  name="name"
                  label="Nome do Laboratório"
                  id="name"
                  v-model="laboratory.companyName"
                  key="name"
                )
              v-flex
                v-text-field(
                  name="phone"
                  mask="(###) ####-#####"
                  label="Telefone do Laboratório"
                  id="phone"
                  v-model="laboratory.phone"
                  key="phone"
                )
              v-flex
                v-text-field(
                  name="address"
                  label="Endereço"
                  id="address"
                )
              v-flex
                v-text-field(
                  name="city"
                  label="Cidade"
                  id="city"
                )
              v-flex
                v-text-field(
                  name="state"
                  label="Estado"
                  id="state"
                )
              v-flex
                v-text-field(
                  name="complement"
                  label="Complemento"
                  id="complement"
                )
              v-flex
                v-text-field(
                  name="number"
                  label="Número"
                  id="number"
                )
              v-flex
                v-btn(
                  @click="saveLaboratory()"
                ) Salvar
</template>

<script>

import OwnersService from './OwnersService'

export default {
  data () {
    return {
      owner: {}
    }
  },
  methods: {
    saveOwner() {
      alert('seu cu')
      console.log(this.owner);
      LaboratoriesService.createOwner(this.owner, (res) => {
        console.log(res)
      })
    }
  }
}
</script>
