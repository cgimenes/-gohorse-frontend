import http from '@core/http'

export default {
  getBeds (callback) {
    http.get('/bed').then(response => {
      return callback(response.data.content)
    })
  },

  saveBed (bed, callback) {
    if (bed.id) {
      return this.updateBed(bed, callback)
    }
    return this.createBed(bed, callback)
  },

  createBed (bed, callback) {
    http.post('/bed', bed).then(response => {
      return callback(response)
    })
  },

  updateBed (bed, callback) {
    http.put('/bed', bed).then(response => {
      return callback(response)
    })
  },

  getBedDetails (id, callback) {
    http.get('/bed/' + id).then(response => {
      return callback(response.data)
    })
  },

  removeBed (id, callback) {
    http.delete('/bed/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
