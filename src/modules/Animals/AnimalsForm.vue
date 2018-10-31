<template>
<v-container grid-list-lg="grid-list-lg" fluid="fluid">
  <v-layout row="row" wrap="wrap">
    <v-flex xs12>
      <v-card>
        <v-container grid-list-lg="grid-list-lg" fluid="fluid">
          <v-layout row="row" wrap="wrap">
            <v-flex col xs12>
              <h4 class="grey--text">Dados do Animal</h4>
            </v-flex>
            <v-flex col xs12>
              <v-text-field name="name" label="Nome do Animal" id="name" v-model="animal.name" key="name"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <v-text-field type="date" name="birthDate" label="Data de Nascimento" id="birthDate" v-model="animal.birthDate" key="birthDate"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm6="sm6">
              <autocomplete label="Proprietário do Animal" :model.sync="animal.owner" :key="animal.id"></autocomplete>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="specie" label="Espécie do Animal" id="specie" v-model="animal.specie" key="specie"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="breed" label="Raça do Animal" id="breed" v-model="animal.breed" key="breed"></v-text-field>
            </v-flex>
            <v-flex col xs12 sm4="sm4">
              <v-text-field name="sex" label="Sexo do Animal" id="sex" v-model="animal.sex" key="sex"></v-text-field>
            </v-flex>
            <v-flex col xs12>
              <v-btn color="primary" @click="saveAnimal()">Salvar</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AnimalsService from './AnimalsService'
import Autocomplete from './Autocomplete'

export default {
  components: {
    Autocomplete
  },
  data() {
    return {
      animal: {
        owner: {}
      }
    }
  },
  methods: {
    saveAnimal() {
      AnimalsService.saveAnimal(this.animal, (res) => {
        this
          .$router
          .push('/animals/')
      })
    },
    getDataForEdit() {
      AnimalsService.getAnimalDetails(this.$route.params.id, (animal) => {
        this.animal = animal
      })
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getDataForEdit()
    }
  }
}
</script>
