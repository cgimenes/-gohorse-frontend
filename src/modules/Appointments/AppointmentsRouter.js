import Layout from '@core/components/Layout'
import AppointmentsList from './AppointmentsList'
import AppointmentsForm from './AppointmentsForm'
import AppointmentsShow from './AppointmentsShow'

export default [
  {
    path: '/appointments',
    component: Layout,
    children: [
      {
        path: '/appointments',
        component: AppointmentsList,
        meta: {
          unrequiredAuth: true,
          title: 'Consultas'
        }
      },
      {
        path: '/appointments/create',
        component: AppointmentsForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar uma nova Consulta'
        }
      },
      {
        path: '/appointments/:id',
        component: AppointmentsShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de uma Consulta'
        }
      },
      {
        path: '/appointments/:id/edit',
        component: AppointmentsForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de uma Consulta'
        }
      }
    ]
  }
]
