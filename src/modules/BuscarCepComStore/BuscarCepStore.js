import Vue from 'vue'

const vue = new Vue()

const state = {
  endereco: 'dasdasdsa'
}

const getters = {
  getEndereco: state => {
    return state.endereco
  }
}

const mutations = {
  setEndereco (state, data) {
    state.endereco = data
  }
}

const actions = {
  buscarCep ({ commit }, cep) {
    vue.$http.get('http://viacep.com.br/ws/' + cep + '/json/').then(response => {
      commit('setEndereco', response.body)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
