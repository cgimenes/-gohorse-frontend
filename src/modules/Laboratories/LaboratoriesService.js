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
  },

  removeLaboratory (id, callback) {
    http.delete('/laboratories/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }
}
