import Layout from '@core/components/Layout'
import Clientes from './Clientes'

export default [
  {
    path: '/clientes',
    component: Layout,
    children: [
      {
        path: '/clientes',
        component: Clientes,
        meta: {
          unrequiredAuth: true,
          title: 'Clientes'
        }
      }
    ]
  }
]
