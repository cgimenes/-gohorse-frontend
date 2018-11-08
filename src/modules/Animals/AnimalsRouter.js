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
          unrequiredAuth: false,
          title: 'Animais'
        }
      },
      {
        path: '/animals/create',
        component: AnimalsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um um novo Animal'
        }
      },
      {
        path: '/animals/:id',
        component: AnimalsShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Animal'
        }
      },
      {
        path: '/animals/:id/edit',
        component: AnimalsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Animal'
        }
      }
    ]
  }
]
