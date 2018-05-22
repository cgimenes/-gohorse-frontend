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
          unrequiredAuth: true,
          title: 'Internamentos' 
        }
      },
      {
        path: '/internments/create',
        component: InternmentsForm,
        meta: {
          unrequiredAuth: true,
          title: 'Cadastro de Internamento'
        }
      }
    ]
  }
]