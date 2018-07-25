import http from '@core/http'

export default {

  getAdditionalRegistration (callback) {
  return callback([{
    type: 'Raças',
    registers:[
        { id: 'aaaaaa',
          name:"macarena" },
        { id: 'aaaaaaa',
          name:"macarena" },
        { id: 'aaaaaaaa',
          name:"macarena" }
      ]
    },
    {
      type: 'Tipos de distribuição',
      registers:[
        { id: 'aaaaaab',
          name:"macarena" }
      ]
    }])

    // http.get('/enums').then(response => {
    //   return callback(response.data.content)
    // })
  },

  saveAdditionalRegister (item, callback) {
    if (item && item.id) {
      return this.updateAdditionalRegister(item, callback)
    }
    return this.createAdditionalRegister(item, callback)
  },

  createAdditionalRegister (item, callback) {
    return callback({})
    http.post('/enums', item).then(response => {
      return callback(response)
    })
  },

  updateAdditionalRegister (item, callback) {
    return callback({})
    http.put('/enums', item).then(response => {
      return callback(response)
    })
  },

  removeAdditionalRegister (id, callback) {
    return callback({})
    http.delete('/enums/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  }

}
