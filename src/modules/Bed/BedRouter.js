import Layout from '@core/components/Layout'
import BedList from './BedList'
import BedForm from './BedForm'

export default [
  {
    path: '/bed',
    component: Layout,
    children: [
      {
        path: '/bed',
        component: BedList,
        meta: {
          unrequiredAuth: true,
          title: 'Leitos'
        }
      },
      {
        path: '/bed/create',
        component: BedForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um novo Leito'
        }
      },
      {
        path: '/bed/:id/edit',
        component: BedForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de Leitos'
        }
      }
    ]
  }
]
