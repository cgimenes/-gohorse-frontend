import Layout from '@core/components/Layout'
import LaboratoriesList from './LaboratoriesList'
import LaboratoriesForm from './LaboratoriesForm'

export default [
  {
    path: '/laboratories',
    component: Layout,
    children: [
      {
        path: '/laboratories',
        component: LaboratoriesList,
        meta: {
          unrequiredAuth: true,
          title: 'Laboratórios'
        }
      },
      {
        path: '/laboratories/create',
        component: LaboratoriesForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um novo laboratório'
        }
      }
    ]
  }
]
