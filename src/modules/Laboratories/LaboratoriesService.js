import http from '@core/http'

export default {
  getLaboratories (callback) {
    http.get('/laboratories').then(response => {
      return callback(response.data.content)
    })
  },

  saveLaboratory (laboratory, callback) {
    if (!laboratory.id) {
      return this.createLaboratory(laboratory, callback)
    }

    return this.updateLaboratory(laboratory, callback)
  },

  createLaboratory (laboratory, callback) {
    http.post('/laboratories', laboratory).then(response => {
      return callback(response)
    })
  },

  updateLaboratory (laboratory, callback) {
    // let id = laboratory.id
    // delete laboratory.id

    // http.put('/laboratories/' + id, laboratory).then(response => {
    http.put('/laboratories', laboratory).then(response => {
      return callback(response)
    })
  },

  getLaboratoryDetails (id, callback) {
    http.get('/laboratories/' + id).then(response => {
      return callback(response.data)
    })
  },

  removeLaboratory (id, callback) {
    http.delete('/laboratories/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }
}
