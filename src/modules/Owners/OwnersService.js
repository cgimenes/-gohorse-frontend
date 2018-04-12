import http from '@core/http'

export default {
  getOwners (callback) {
    http.get('/owners').then(response => {
      return callback(response.data.content)
    })
  },

  getOwnerDetails (id, callback) {
    http.get('/owners/' + id).then(response => {
      return callback(response.data)
    })
  },

  createOwner (owner, callback) {
    http.post('/owners', owner).then(response => {
      return callback(response)
    })
  },

  updateOwner (owner, callback) {
    http.put('/owners', owner).then(response => {
      return callback(response)
    })
  },

  saveOwner (owner, callback) {
    if (owner.id) {
      return this.updateOwner(owner, callback)
    }
    return this.createOwner(owner, callback)
  },

  removeOwner (id, callback) {
    http.delete('/owners/', {
      data: {
        id: id
      }
    }).then(response => {
      return callback(response.statusCode)
    })
  }
}
