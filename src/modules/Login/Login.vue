<template lang="pug">
  .login.primary-gradient
    v-container(fill-height)
      v-layout(row wrap align-center)
        v-flex.login__img(xs12 md6)
          img(src="/static/logo-x600.png" height="200px")
        v-flex(xs12 md6)
          v-card
            form#form-login(@submit.prevent="login()")
              v-card-text
                v-text-field(
                  required
                  placeholder="E-mail"
                  v-model="user.email"
                )
                v-text-field(
                  required
                  placeholder="Senha"
                  ref="password"
                  type="password"
                  v-model="user.password"
                )
                v-layout(align-center justify-end)
                  v-flex
                    v-btn.ma-0.pa-0(flat) Esqueci minha senha
                      v-icon(keyboard_arrow_down)
                  v-btn(
                    fab
                    dark
                    right
                    bottom
                    absolute
                    type="submit"
                    :class="$colorClass('loginPage')"
                  )
                    v-icon chevron_right
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
  methods: {
    login () {
      // let rollbackUri = localStorage.getItem('rollback-uri')

      // this.$router.replace(rollbackUri || '/')
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus">
.login
  position absolute
  top 0
  right 0
  bottom 0
  left 0

  .login__img
    text-align center
</style>
