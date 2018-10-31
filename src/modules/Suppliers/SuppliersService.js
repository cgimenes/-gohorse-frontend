import http from '@core/http'

export default {
  getSuppliers(callback) {
    http.get('/suppliers').then(response => {
      return callback(response.data.content)
    })
  },

  getSupplierDetails(id, callback) {
    http.get('/suppliers/' + id).then(response => {
      return callback(response.data)
    })
  },

  getSuppliersByName(name, callback) {
    http.get('/suppliers/find?name=' + name).then(response => {
      return callback(response.data.content)
    })
  },

  createSupplier(supplier, callback) {
    http.post('/suppliers', supplier).then(response => {
      return callback(response)
    })
  },

  updateSupplier(supplier, callback) {
    http.put('/suppliers', supplier).then(response => {
      return callback(response)
    })
  },

  saveSupplier(supplier, callback) {
    if (supplier.id) {
      return this.updateSupplier(supplier, callback)
    }
    return this.createSupplier(supplier, callback)
  },

  removeSupplier(id, callback) {
    http.delete('/suppliers/', {
      data: {
        id: id
      }
    }).then(response => {
      return callback(response.statusCode)
    })
  }
}