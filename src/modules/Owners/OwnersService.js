import http from '@core/http'

export default {
  getOwners (callback) {
    http.get('/owners').then(response => {
      return callback(response.data)
    })
  },

  createOwner (owner, callback) {
    http.post('/owners', owner).then(response => {
      return callback(response)
    })
  }
}
