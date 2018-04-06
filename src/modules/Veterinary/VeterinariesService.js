import http from '@core/http'

export default {
  getVeterinaries (callback) {
    http.get('/veterinaries').then(response => {
      return callback(response.data.items)
    })
  },

  createVeterinary (veterinary, callback) {
    http.post('/veterinaries', veterinary).then(response => {
      return callback(response)
    })
  },

  getVeterinaryDetails (id, callback) {
    http.get('/veterinaries/' + id).then(response => {
      return callback(response.data)
    })
  }
}
