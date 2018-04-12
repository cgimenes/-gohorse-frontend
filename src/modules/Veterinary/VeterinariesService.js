import http from '@core/http'

export default {
  getVeterinaries (callback) {
    http.get('/veterinarians').then(response => {
      return callback(response.data.items)
    })
  },

  saveVeterinary (veterinary, callback) {
    if (!veterinary.id) {
      return this.createVeterinary(veterinary, callback)
    }

    return this.updateVeterinary(veterinary, callback)
  },

  createVeterinary (veterinary, callback) {
    http.post('/veterinarians', veterinary).then(response => {
      return callback(response)
    })
  },

  updateVeterinary (veterinary, callback) {
    http.put('/veterinarians', veterinary).then(response => {
      return callback(response)
    })
  },

  getVeterinaryDetails (id, callback) {
    http.get('/veterinarians/' + id).then(response => {
      return callback(response.data)
    })
  },

  removeVeterinary (id, callback) {
    http.delete('/veterinarians/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
