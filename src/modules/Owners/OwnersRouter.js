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
          unrequiredAuth: true,
          title: 'Proprietários'
        }
      },
      {
        path: '/owners/create',
        component: OwnersForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um novo Proprietário'
        }
      },
      {
        path: '/owners/:id',
        component: OwnersShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de Proprietário'
        }
      },
      {
        path: '/owners/:id/edit',
        component: OwnersForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de Proprietário'
        }
      }
    ]
  }
]
