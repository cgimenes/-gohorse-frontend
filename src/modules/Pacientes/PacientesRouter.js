import Layout from '@core/components/Layout'
import Pacientes from './Pacientes'

export default [
  {
    path: '/pacientes',
    component: Layout,
    children: [
      {
        path: '/pacientes',
        component: Pacientes,
        meta: {
          unrequiredAuth: false,
          title: 'Pacientes'
        }
      }
    ]
  }
]
