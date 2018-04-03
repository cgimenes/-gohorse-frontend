import http from '@core/http'

export default {
  getLaboratories () {
    http.get('/laboratories').then(response => {
      return response.data.items
    })
  }
}
