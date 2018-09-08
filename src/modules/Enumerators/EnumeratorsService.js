import http from '@core/http'

export default {

  getEnumerators(callback) {
      http.get('/enumerators/all').then(response => {
        return callback(response.data)
    })
  },

  saveEnumerator (item, callback) {
    if (item && item.id) {
      return this.updateEnumerator(item, callback)
    }
    return this.createEnumerator(item, callback)
  },

  createEnumerator (item, callback) {
    //return callback({})
    console.log(item)
    http.post('/enumerators', item).then(response => {
      return callback(response)
    })
  },

  updateEnumerator (item, callback) {
    //return callback({})
    http.put('/enumerators', item).then(response => {
      return callback(response)
    })
  },

  removeEnumerator (id, callback) {
    //return callback({})
    http.delete('/enumerators/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
