import http from '@core/http'

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
    state.laboratories = data.items
  }
}

const actions = {
  findLaboratories ({ commit }) {
    http.get('/laboratories').then(response => {
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
