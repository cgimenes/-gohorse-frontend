import Layout from '@core/components/Layout'
import VeterinaryList from './VeterinaryList'
import VeterinaryForm from './VeterinaryForm'
import VeterinaryShow from './VeterinaryShow'

export default [
  {
    path: '/veterinaries',
    component: Layout,
    children: [
      {
        path: '/veterinaries',
        component: VeterinaryList,
        meta: {
          unrequiredAuth: false,
          title: 'Veterinários'
        }
      },
      {
        path: '/veterinaries/create',
        component: VeterinaryForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um novo Veterinário'
        }
      },
      {
        path: '/veterinaries/:id',
        component: VeterinaryShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Veterinários'
        }
      },
      {
        path: '/veterinaries/:id/edit',
        component: VeterinaryForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Veterinários'
        }
      }
    ]
  }
]
