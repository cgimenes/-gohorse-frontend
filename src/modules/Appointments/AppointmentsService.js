import http from '@core/http'

export default {
  getDayAppointments (date, callback) {
    http.get('/appointments/' + date.replace(/-/g, '/')).then(response => {
      return callback(response.data)
    })
  },

  getMonthDaysWithAppointments (month, callback) {
    http.get('/appointments/' + month.replace(/-/g, '/')).then(response => {
      return callback(response.data)
    })
  },

  saveAppointment (appointment, callback) {
    if (appointment.id) {
      return this.updateAppointment(appointment, callback)
    }
    return this.createAppointment(appointment, callback)
  },

  createAppointment (appointment, callback) {
    http.post('/appointments', appointment).then(response => {
      return callback(response)
    })
  },

  updateAppointment (appointment, callback) {
    http.put('/appointments', appointment).then(response => {
      return callback(response)
    })
  },

  finishAppointment (id, value, callback) {
    http.put('/appointments/finish/', { id: id, price: value }).then(response => {
      return callback(response)
    })
  },

  getAppointmentDetails (id, callback) {
    http.get('/appointments/' + id).then(response => {
      return callback(response.data)
    })
  },

  removeAppointment (id, callback) {
    http.delete('/appointments/', {data: {id: id}}).then(response => {
      return callback(response.statusCode)
    })
  },

  getActiveAppointments (callback) {
    http.get('/appointments/find?status=SCHEDULED').then(response => {
      return callback(response.data.content)
    })
  },

  getFinishedAppointments (callback) {
    http.get('/appointments/find?status=FINISHED').then(response => {
      return callback(response.data.content)
    })
  },

  getLastAppointments (callback) {
    http.get('/appointments/lasttwelvemonths/').then(response => {
      return callback(response.data)
    })
  }
}
