import Layout from '@core/components/Layout'
import LaboratoriesList from './LaboratoriesList'
import LaboratoriesForm from './LaboratoriesForm'
import LaboratoriesShow from './LaboratoriesShow'

export default [
  {
    path: '/laboratories',
    component: Layout,
    children: [
      {
        path: '/laboratories',
        component: LaboratoriesList,
        meta: {
          unrequiredAuth: false,
          title: 'Laboratórios'
        }
      },
      {
        path: '/laboratories/create',
        component: LaboratoriesForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um novo laboratório'
        }
      },
      {
        path: '/laboratories/:id',
        component: LaboratoriesShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Laboratório'
        }
      },
      {
        path: '/laboratories/:id/edit',
        component: LaboratoriesForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Laboratório'
        }
      }
    ]
  }
]
