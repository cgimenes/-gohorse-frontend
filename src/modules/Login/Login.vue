<template>
  <div class="login primary-gradient">
    <v-container fill-height="fill-height">
      <v-layout row="row" wrap="wrap" align-center="align-center">
        <v-flex class="login__img" xs12="xs12" md6="md6"><img src="/static/logo-x600.png" height="200px" /></v-flex>
        <v-flex xs12="xs12" md6="md6">
          <v-card>
            <form id="form-login" @submit.prevent="login()">
              <v-card-text>
                <v-text-field required="required" placeholder="E-mail" v-model="user.email"></v-text-field>
                <v-text-field required="required" placeholder="Senha" ref="password" type="password" v-model="user.password"></v-text-field>
                <v-layout align-center="align-center" justify-end="justify-end">
                  <v-flex></v-flex>
                  <v-btn fab="fab" dark="dark" right="right" bottom="bottom" absolute="absolute" type="submit">
                    <v-icon>chevron_right</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-text>
            </form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: false,
      errorText: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    localStorage.setItem('authorization', false)
  },
  methods: {
    login () {

      let rollbackUri = localStorage.getItem('rollback-uri')

      if(this.user.email != 'clinica@email.com' || this.user.password != 'teste123'){
        return this.$toasted.error('E-mail não encontrado ou senha incorreta!', {
          icon: 'warning'
        })
      }

      localStorage.setItem('authorization', true)
      this.$router.replace(rollbackUri || '/')
      this.$router.replace('/')
    }
  }
}
</script>

<style>
  .login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .login .login__img {
    text-align: center;
  }
</style>
