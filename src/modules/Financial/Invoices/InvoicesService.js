import http from '@core/http'

export default {
  getInvoices (callback) {
    http.get(`/invoices`).then(response => {
      return callback(response.data.content)
    })
  },
  payInvoice (id, callback) {
    http.post(`/invoices/pay`, {id: id}).then(response => {
      return callback(response.statusCode)
    })
  }
}
