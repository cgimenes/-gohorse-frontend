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

export default {
  state,
  getters,
  mutations
}
