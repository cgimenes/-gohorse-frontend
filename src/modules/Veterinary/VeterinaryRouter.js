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
          unrequiredAuth: true,
          title: 'Veterinários'
        }
      },
      {
        path: '/veterinaries/create',
        component: VeterinaryForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um novo V eterinário'
        }
      },
      {
        path: '/veterinaries/:id',
        component: VeterinaryShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de Veterinários'
        }
      },
      {
        path: '/veterinaries/:id/edit',
        component: VeterinaryForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de Veterinários'
        }
      }
    ]
  }
]
