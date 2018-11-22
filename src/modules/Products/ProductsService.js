import http from '@core/http'

export default {
  getProduct (callback) {
    http.get('/products').then(response => {
      return callback(response.data.content)
    })
  },

  getPages (callback) {
    http.get('/products').then(response => {
      return callback(response.data)
    })
  },

  getProductDetails (id, callback) {
    http.get('/products/' + id).then(response => {
      return callback(response.data)
    })
  },

  createProduct (product, callback) {
    http.post('/products', product).then(response => {
      return callback(response)
    })
  },

  updateProduct (product, callback) {
    http.put('/products', product).then(response => {
      return callback(response)
    })
  },

  getProductByName (name, callback) {
    http.get('/products/find?name=' + name).then(response => {
      return callback(response.data.content)
    })
  },

  saveProduct (product, callback) {
    if (product.id) {
      return this.updateProduct(product, callback)
    }
    return this.createProduct(product, callback)
  },

  removeProduct (id, callback) {
    http.delete('/products/', {
      data: {
        id: id
      }
    }).then(response => {
      return callback(response.statusCode)
    })
  }
}
