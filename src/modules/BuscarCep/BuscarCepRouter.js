import Layout from '@core/components/Layout'
import BuscarCep from './BuscarCep'

export default [
  {
    path: '/buscar-cep',
    component: Layout,
    children: [
      {
        path: '/buscar-cep',
        component: BuscarCep,
        meta: {
          unrequiredAuth: true,
          title: 'Buscar CEP'
        }
      }
    ]
  }
]
