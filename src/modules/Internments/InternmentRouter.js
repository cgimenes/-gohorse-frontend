import Layout from '@core/components/Layout'
import InternmentsList from './InternmentsList'
import InternmentsShow from './InternmentsShow'
import InternmentsForm from './InternmentsForm'

export default [
  {
    path: '/internments',
    component: Layout,
    children: [
      {
        path: '/internments',
        component: InternmentsList,
        meta: {
          unrequiredAuth: false,
          title: 'Internamentos'
        }
      },
      {
        path: '/internments/create',
        component: InternmentsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Cadastro de Internamento'
        }
      },
      {
        path: '/internments/:id',
        component: InternmentsShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Internamento'
        }
      },
      {
        path: '/internments/:id/edit',
        component: InternmentsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Internamento'
        }
      }
    ]
  }
]
