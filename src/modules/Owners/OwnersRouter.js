import Layout from '@core/components/Layout'
import OwnersList from './OwnersList'
import OwnersForm from './OwnersForm'
import OwnersShow from './OwnersShow'

export default [
  {
    path: '/owners',
    component: Layout,
    children: [
      {
        path: '/owners',
        component: OwnersList,
        meta: {
          unrequiredAuth: false,
          title: 'Proprietários'
        }
      },
      {
        path: '/owners/create',
        component: OwnersForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um novo Proprietário'
        }
      },
      {
        path: '/owners/:id',
        component: OwnersShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Proprietário'
        }
      },
      {
        path: '/owners/:id/edit',
        component: OwnersForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Proprietário'
        }
      }
    ]
  }
]
