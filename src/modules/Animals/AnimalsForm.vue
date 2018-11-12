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
                              <v-menu
                              ref='menuBusyUntil'
                              :close-on-content-click='false'
                              v-model='menuDateBirth'
                              :nudge-right='40'
                              lazy
                              transition='scale-transition'
                              offset-y
                              full-width
                              max-width='290px'
                              min-width='290px'
                              >
                                <v-text-field
                                  required
                                  :rules='[rules.empty]'
                                  name="name"
                                  :mask='dateMask'
                                  label="Data de nascimento"
                                  slot='activator'
                                  id="birthdate"
                                  v-model="animal.birthDate"
                                  :key="animal.id"
                                  prepend-icon='event'
                                  >
                                </v-text-field>
                                <v-date-picker
                                  v-model='dateBirth'
                                  no-title
                                  locale='pt-br'
                                  @input='menuDateBirth=false'
                                  >
                                </v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-flex col xs12 sm6="sm6">
                              <autocomplete label="Proprietário do Animal" :model.sync="animal.owner" :key="animal.id"></autocomplete>
                            </v-flex>
                            <v-flex col xs12 sm4="sm4">
                                <speciecomplete label="Espécie do Animal" :model.sync="animal.specie" :key="animal.id"></speciecomplete>
                            </v-flex>
                            <v-flex col xs12 sm4="sm4">
                                <breedcomplete label="Raça do Animal" :model.sync="animal.breed" :key="animal.id"></breedcomplete>
                            </v-flex>
                            <v-flex col xs12 sm4="sm4">
                                <sexcomplete label="Sexo do Animal" :model.sync="animal.sex" :key="animal.id"></sexcomplete>
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
import Autocomplete from '../Owners/Autocomplete'
import Breedcomplete from '../Enumerators/AutocompleteBreed'
import Speciecomplete from '../Enumerators/AutocompleteSpecie'
import Sexcomplete from '../Enumerators/AutocompleteSex'
import moment from 'moment'

export default {
    components: { Autocomplete, Breedcomplete, Speciecomplete, Sexcomplete  },
    data () {
        return {
            animal: {
                owner: {
                },
                breed: {
                },
                specie: {
                },
                sex: {
                }
            },
            menuDateBirth: false,
            dateMask: 'date',
            dateBirth: null,
            rules: {
              empty: value => (value || '').length > 0 || 'Preenchimento obrigatório!'
            }
        }
    },
    watch: {
      dateBirth (val) {
        this.animal.birthDate = this.formatDate(this.dateBirth)
      }
    },
    methods: {
        saveAnimal () {
          const animalFinal = { ...this.animal }
          animalFinal.birthDate = moment.utc(
            this.animal.birthDate, 'DD/MM/YYYY'
          ).format('YYYY-MM-DD')
          AnimalsService.saveAnimal(animalFinal, (res) => {
              this
                  .$router
                  .push('/animals/')
          })
        },
        getDataForEdit () {
          AnimalsService.getAnimalDetails(this.$route.params.id, (animal) => {
            this.animal = animal
            this.animal.birthDate = moment(animal.birthDate).format('DD/MM/YYYY')
          })
        },
        formatDate (date) {
          if (!date) return null

          const [year, month, day] = date.split('-')
          return `${day}/${month}/${year}`
        },
        parseDate (date) {
          if (!date) return null

          const [month, day, year] = date.split('/')
          return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
    },
    created () {
        if (this.$route.params.id) {
            this.getDataForEdit()
        }
    }
}
</script>
