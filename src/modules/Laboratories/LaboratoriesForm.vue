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

import LaboratoriesService from './LaboratoriesService'

export default {
  data () {
    return {
      laboratory: {}
    }
  },
  methods: {
    saveLaboratory() {
      alert('seu cu')
      console.log(this.laboratory);
      LaboratoriesService.createLaboratory(this.laboratory, (res) => {
        console.log(res)
      })
    }
  }
}
</script>
