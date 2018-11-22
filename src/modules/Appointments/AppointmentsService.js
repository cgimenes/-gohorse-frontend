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
    if (!appointment.id) {
      return this.createAppointment(appointment, callback)
    }

    return this.updateAppointment(appointment, callback)
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

  finishAppointment (appointments, callback) {
    appointments.forEach(appointment => http.put('/appointments/finish/', { id: appointment.id }))

    return callback()
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
  }
}
