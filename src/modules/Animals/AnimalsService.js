import http from '@core/http'

export default {
  getAnimals (callback) {
    http.get('/animals').then(response => {
      return callback(response.data.content)
    })
  },

  getAnimalDetails (id, callback) {
    http.get('/animals/' + id).then(response => {
      return callback(response.data)
    })
  },

  createAnimal (animal, callback) {
    http.post('/animals', animal).then(response => {
      return callback(response)
    })
  },

  updateAnimal (animal, callback) {
    http.put('/animals', animal).then(response => {
      return callback(response)
    })
  },

  saveAnimal (animal, callback) {
    if (animal.id) {
      return this.updateAnimal(animal, callback)
    }
    return this.createAnimal(animal, callback)
  },

  removeAnimal (id, callback) {
    http.delete('/animals/', {
      data: {
        id: id
      }
    }).then(response => {
      return callback(response.statusCode)
    })
  }
}
