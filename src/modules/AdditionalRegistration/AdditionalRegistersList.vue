<template>
  <v-container fluid>
    <v-card>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 lg4 xg3 v-for="register in enums" :key="register.type">
            <v-card style="height: 500px; margin: 20px 10px">
              <v-btn absolute dark fab top right small color='red' @click="create(register)"  style="z-index: 1;">
                <v-icon >add</v-icon>
              </v-btn>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" max-width="400px">
                  <v-card>
                    <v-form v-model="valid" lazy-validation>
                      <v-card-title>
                        <span class="headline">{{registerForm.type}}</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field
                                id="nome"
                                v-model="newName"
                                :rules="nameRules"
                                label="Nome"
                                required
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="dismiss()">Fechar</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save(registerForm, newName, item)">Salvar</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
              </v-layout>
              <v-card-title primary-title>
                <v-spacer></v-spacer>
                <div>
                  <h4 class="headline text-truncation mb-2">{{register.type}}</h4>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-flex style="height: 400px; overflow-y: scroll">
                <v-list v-for="item in register.registers">
                  <v-layout row>
                    <v-flex xs6 sm6 lg8 xg8 >
                      <p style="padding: 10px 10px; margin-top:5px"> <strong>{{item.name}} </strong></p>
                    </v-flex>
                    <v-flex xs3 sm3 lg2 xg2>
                      <v-btn flat color="blue" block @click="edit(register, item)">
                        <v-icon>mode_edit</v-icon>
                      </v-btn>
                    </v-flex>
                    <v-flex xs3 sm3 lg2 xg2>
                      <v-btn flat color="red" block @click="remove(register, item)">
                        <v-icon>delete</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-divider></v-divider>
                </v-list>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  import AdditionalRegistersService from './AdditionalRegistersService'
  import axios from 'axios'

  export default {
    data () {
      return {
        enums: [],
        registerForm: {},
        item: {},
        dialog: false,
        valid: true,
        newName: '',
        nameRules: [
          v => !!v || 'Nome é obrigatorio'
        ]
      }
    },
    mounted () {
      AdditionalRegistersService.getAdditionalRegistration((enums) => {
        this.enums = enums
      })
    },
    methods: {
      dismiss () {
        this.dialog = false
      },
      openForm (register, item) {
        this.registerForm = register
        this.newName = ''
        this.valid = true
        if (item) {
            this.newName = item.name
        }
        this.item = item
        this.dialog = true
      },
      save (register, newName, item){
        if (newName) {
          var enumIndex = this.enums.indexOf(register);
          var createdOrEdited
          AdditionalRegistersService.saveAdditionalRegister(item, () => {
            if (item){
              var itemIndex = this.enums[enumIndex].registers.indexOf(item)
              createdOrEdited = ' editado'
              this.enums[enumIndex].registers[itemIndex].name = newName
            }else{
              this.enums[enumIndex].registers.push({ name: newName })
              createdOrEdited = ' criado'
            }
            this.dialog = false
            this.$toasted.success( newName +  createdOrEdited + ' com sucesso!', {icon: 'check'})
          })
        }
      },
      edit (register, item) {
        this.registerForm = register
        this.openForm(register, item)
      },
      create (register) {
        this.registerForm = register
        this.openForm(register, null)
      },
      remove(register, item){
        this.$swal({
          title: 'Você deseja deletar ?',
          text: 'Esta operação não pode ser desfeita',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim, eu quero deletar!',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            AdditionalRegistersService.removeAdditionalRegister(item.id, () => {
              var enumIndex = this.enums.indexOf(register)
              var itemIndex = this.enums[enumIndex].registers.indexOf(item)
              this.enums[enumIndex].registers.splice(itemIndex, 1)
              this.$toasted.success( item.name + ' removido com sucesso!', {icon: 'check'})
            })
          }
        })
      }
    }
  }
</script>
