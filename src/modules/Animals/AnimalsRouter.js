import Layout from '@core/components/Layout'
import AnimalsList from './AnimalsList'
import AnimalsForm from './AnimalsForm'
import AnimalsShow from './AnimalsShow'

export default [
  {
    path: '/animals',
    component: Layout,
    children: [
      {
        path: '/animals',
        component: AnimalsList,
        meta: {
          unrequiredAuth: true,
          title: 'Animais'
        }
      },
      {
        path: '/animals/create',
        component: AnimalsForm,
        meta: {
          unrequiredAuth: true,
          title: 'Criar um um novo Animal'
        }
      },
      {
        path: '/animals/:id',
        component: AnimalsShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de Animal'
        }
      },
      {
        path: '/animals/:id/edit',
        component: AnimalsForm,
        meta: {
          unrequiredAuth: true,
          title: 'Edição de Animal'
        }
      }
    ]
  }
]
