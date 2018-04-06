import http from '@core/http'

export default {
  getLaboratories (callback) {
    http.get('/laboratories').then(response => {
      return callback(response.data.items)
    })
  },

  createLaboratory (laboratory, callback) {
    http.post('/laboratories', laboratory).then(response => {
      return callback(response)
    })
  },

  getLaboratoryDetails (id, callback) {
    http.get('/laboratories/' + id).then(response => {
      return callback(response.data)
    })
  }
}
