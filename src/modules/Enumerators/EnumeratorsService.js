import http from '@core/http'

export default {

  getEnumerators(callback) {
      http.get('/enumerators/all').then(response => {
        return callback(response.data)
    })
  },

  saveEnumerator (item) {
    if (item && item.id) {
      return this.updateEnumerator(item)
    }
    return this.createEnumerator(item)
  },

  createEnumerator (item) {
    var created = false;

    http.post('/enumerators', item).then(response => {
      created = response.status == 201
      return created
    })
  },

  updateEnumerator (item) {
    http.put('/enumerators', item).then(response => {
      return response.status === 201
    })
  },

  removeEnumerator (id, callback) {
    http.delete('/enumerators/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
