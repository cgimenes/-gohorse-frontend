import http from '@core/http'

export default {
  getCashFlow (year, callback) {
    http.get('/reports/cashflow/' + year).then(response => {
      return callback(response.data)
    })
  },
}
