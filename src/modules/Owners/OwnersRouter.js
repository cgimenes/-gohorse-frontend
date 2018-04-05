import Layout from '@core/components/Layout'
import OwnersList from './OwnersList'
import OwnersForm from './OwnersForm'

export default [
  {
    path: '/owners',
    component: Layout,
    children: [
      {
        path: '/owners',
        component: OwnersList,
        meta: {
          unrequiredAuth: true,
          title: 'Laboratórios'
        }
      },
      {
        path: '/owners/create',
        component: OwnersForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um um novo Proprietário'
        }
      }
    ]
  }
]
