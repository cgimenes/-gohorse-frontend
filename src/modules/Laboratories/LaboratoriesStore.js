import Vue from 'vue'

const vue = new Vue()

const state = {
  laboratories: []
}

const getters = {
  getLaboratories: state => {
    return state.laboratories
  }
}

const mutations = {
  setLaboratories (state, data) {
    state.laboratories = data
  }
}

const actions = {
  findLaboratories ({ commit }) {
    vue.$http.get('http://localhost:8084/laboratories').then(response => {
      commit('setLaboratories', response.body)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
