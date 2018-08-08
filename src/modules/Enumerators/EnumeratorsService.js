import http from '@core/http'

export default {

  getAdditionalRegistration (callback) {
  // return callback([{
  //   type: 'Raças',
  //   registers:[
  //       { id: 'aaaaaa',
  //         name:"macarena" },
  //       { id: 'aaaaaaa',
  //         name:"macarena" },
  //       { id: 'aaaaaaaa',
  //         name:"macarena" }
  //     ]
  //   },
  //   {
  //     type: 'Tipos de distribuição',
  //     registers:[
  //       { id: 'aaaaaab',
  //         name:"macarena" }
  //     ]
  //   }])

    http.get('/enumerators').then(response => {
      return callback(response.data.content)
    })
  },

  saveEnumerator (item, callback) {
    if (item && item.id) {
      return this.updateEnumerator(item, callback)
    }
    return this.createEnumerator(item, callback)
  },

  createEnumerator (item, callback) {
    return callback({})
    http.post('/enumerators', item).then(response => {
      return callback(response)
    })
  },

  updateEnumerator (item, callback) {
    return callback({})
    http.put('/enumerators', item).then(response => {
      return callback(response)
    })
  },

  removeEnumerator (id, callback) {
    return callback({})
    http.delete('/enumerators/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
