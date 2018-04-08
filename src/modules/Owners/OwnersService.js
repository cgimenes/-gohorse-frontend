import http from '@core/http'

export default {
  getOwners(callback) {
    http.get('/owners').then(response => {
      return callback(response.data)
    })
  },

  getOwnerDetails(id, callback) {
    http.get('/owners/' + id).then(response => {
      return callback(response.data)
    })
  },

  saveOwner(owner, callback) {
    if (owner.id) {
      return this.updateOwner(owner, callback)
    }
    return createOwner(owner, callback)
  },

  createOwner(owner, callback) {
    http.post('/owners', owner).then(response => {
      return callback(response)
    })
  },

  updateOwner(owner, callback) {
    http.put('/owners', owner).then(response => {
      return callback(response)
    })
  },

  removeOwner(id, callback) {
    http.delete('/owners/', {
      data: {
        id: id
      }
    }).then(response => {
      return callback(response.statusCode)
    })
  }
}
