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
  },

  getOwnerDetails (id, callback) {
     http.get('/owners/' + id).then(response => {
       return callback(response.data)
     })
   },

   removeOwner (id, callback) {
    http.delete('/owners/', {data: {id: id}}).then(response => {
      return callback(response.statusCode) 
    })
  }
}
