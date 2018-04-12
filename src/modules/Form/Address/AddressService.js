import http from '@core/http'

export default {
  getZipcode (zipcode, callback) {
    http.get('https://viacep.com.br/ws/' + zipcode + '/json/').then(response => {
      return callback(response.data)
    })
  },

  getAddressTypes () {
    return ['Avenida', 'Rua']
  },

  getDefaultAddressObject () {
    return {
      number: null,
      complement: null,
      postalCode: {
        code: null,
        streetType: 'Rua',
        streetName: '',
        neighbourhood: '',
        city: '',
        state: '',
        country: 'Brasil'
      }
    }
  }
}
