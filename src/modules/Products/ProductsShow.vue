<template>

<v-container grid-list-lg fluid>

    <v-layout row="row" wrap="wrap">
        <v-flex xs12>
            <v-card>
                <v-speed-dial class="show-actions" v-model="fab" absolute top right direction="bottom" open-on-hover transition="scale-transition">
                    <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
                        <v-icon>more_vert</v-icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="blue" @click="edit()">
                        <v-icon>mode_edit</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="red" @click="destroy()">
                        <v-icon>delete</v-icon>
                    </v-btn>
                </v-speed-dial>
                <v-container grid-list-lg fluid>
                    <v-layout row wrap>
                        <v-flex col xs12>
                            <h1>{{ animal.name }}</h1>
                        </v-flex>
                        <v-flex col xs12 sm6>
                            <h4 class="grey--text mb-3">Dados do Animal</h4>
                            <p>
                                <b>Nome: </b> {{ animal.name }}
                            </p>
                        </v-flex>
                        <v-flex col xs12 sm6>
                            <h4 class="grey--text mb-3">Proprietário</h4>
                            <p>
                                <b>Nome: </b> {{animal.owner.name}}
                            </p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>

</template>

<script>

import ProductsService from './ProductsService'

export default {
    data() {
            return {
                fab: false,
                animal: {
                    owner: {
                    }
                }
            }
        },
        mounted() {
            AnimalsService.getAnimalDetails(this.$route.params.id, (animal) => {
                this.animal = animal
            })
        },
        methods: {
            edit() {
                    this
                        .$router
                        .push('/animals/' + this.animal.id + '/edit')
                },
                destroy() {
                    this.$swal({
                        title: 'Você deseja deletar este animal?',
                        text: 'Esta operação não pode ser desfeita',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sim, eu quero deletar!',
                        cancelButtonText: 'Não'
                    }).then((result) => {
                        if (result.value) {
                            AnimalsService.removeAnimal(this.animal.id, (res) => {
                                this
                                    .$router
                                    .push('/animals/')
                            })
                        }
                    })
                }
        }
}

</script>
