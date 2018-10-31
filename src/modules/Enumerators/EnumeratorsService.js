import http from '@core/http'

export default {

  getEnumerators (callback) {
    http.get('/enumerators/all').then(response => {
      this.includeMissingEnumerators(response.data, (allEnumerators) => {
        return callback(allEnumerators)
      })
    })
  },

  saveEnumerator (item) {
    if (item && item.id) {
      return this.updateEnumerator(item)
    }
    return this.createEnumerator(item)
  },

  createEnumerator (item) {
    var created = false

    http.post('/enumerators', item).then(response => {
      created = response.status === 201
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
  },

  includeMissingEnumerators (enumeratorsFound, callback) {
    if(!enumeratorsFound.find(x => x.name === 'Espécie')){
      enumeratorsFound.push({ name: 'Espécie' })
    }
    if(!enumeratorsFound.find(x => x.name === 'Raça')){
      enumeratorsFound.push({ name: 'Raça' })
    }
    if(!enumeratorsFound.find(x => x.name === 'Tipo de distribuição')){
      enumeratorsFound.push({ name: 'Tipo de distribuição' })
    }
    if(!enumeratorsFound.find(x => x.name === 'Sexo')){
      enumeratorsFound.push({ name: 'Sexo' })
    }
    callback(enumeratorsFound)
  },

}
