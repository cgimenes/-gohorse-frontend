<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        v-card
          v-container(grid-list-lg fluid)
            v-layout(row wrap)
              v-flex
                v-text-field(
                  name="name"
                  label="Nome do Laboratório"
                  id="name"
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
</template>

<script>
export default {

}
</script>
