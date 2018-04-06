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
        component: VeterinariesList,
        meta: {
          unrequiredAuth: true,
          title: 'Veterinários'
        }
      },
      {
        path: '/veterinaries/create',
        component: VeterinariesForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um novo veterinário'
        }
      },
      {
        path: '/veterinaries/:id',
        component: VeterinariesShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de Veterinários'
        }
      },
      {
        path: '/veterinaries/:id/edit',
        component: VeterinariesForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de Veterinários'
        }
      }
    ]
  }
]
