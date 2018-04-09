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
  //  return[]
  },

  updateVeterinary (veterinary, callback) {
    // let id = veterinary.id
    // delete veterinary.id

    // http.put('/veterinaries/' + id, veterinary).then(response => {
    http.put('/veterinarians', veterinary).then(response => {
      return callback(response)
    })
  },

  getVeterinaryDetails (id, callback) {
    http.get('/veterinarians/' + id).then(response => {
      return callback(response.data)
    })
      //  return[]
  },

  removeVeterinary (id, callback) {
    http.delete('/veterinarians/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
