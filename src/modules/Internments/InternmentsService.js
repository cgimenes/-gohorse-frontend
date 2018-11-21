import http from '@core/http'

export default {
  getInternments (callback) {
    http.get(`/internments`).then(response => {
      return callback(response.data.content)
    })
  },
  saveInternment (internment, callback) {
    if (!internment.id) {
      return this.createInternment(internment, callback)
    }
    return this.updateInternment(internment, callback)
  },
  createInternment (internment, callback) {
    http.post(`/internments`, internment).then(response => {
      return callback(response)
    })
  },
  updateInternment (internment, callback) {
    http.put(`/internments`, internment).then(response => {
      return callback(response)
    })
  },
  getInternmentDetails (id, callback) {
    http.get(`/internments/${id}`).then(response => {
      return callback(response.data)
    })
  },
  removeInternment (id, callback) {
    http.delete(`/internments/`, {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  },

  getLastInternments (callback) {
    http.get('/internments/lasttwelvemonths/').then(response => {
      return callback(response.data)
    })
  }
}
