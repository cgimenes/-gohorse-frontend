import http from '@core/http'

export default {
  getVeterinaries (callback) {
    http.get('/veterinaries').then(response => {
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
    http.post('/veterinaries', veterinary).then(response => {
      return callback(response)
    })
  },

  updateVeterinary (veterinary, callback) {
    // let id = veterinary.id
    // delete veterinary.id

    // http.put('/veterinaries/' + id, veterinary).then(response => {
    http.put('/veterinaries', veterinary).then(response => {
      return callback(response)
    })
  },

  getVeterinaryDetails (id, callback) {
    http.get('/veterinarians/' + id).then(response => {
      return callback(response.data)
    })
  },

  removeVeterinary (id, callback) {
    http.delete('/veterinaries/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }
}
