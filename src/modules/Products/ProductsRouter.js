import Layout from '@core/components/Layout'
import ProductsShow from './ProductsShow'

export default [
  {
    path: '/products',
    component: Layout,
    children: [
      // {
      //   path: '/laboratories',
      //   component: LaboratoriesList,
      //   meta: {
      //     unrequiredAuth: true,
      //     title: 'Laboratórios'
      //   }
      // },
      // {
      //   path: '/laboratories/create',
      //   component: LaboratoriesForm,
      //   meta: {
      //     unrequiredAuth: true,
      //     title: 'Criar um novo laboratório'
      //   }
      // },
      {
        path: '/products/:id',
        component: ProductsShow,
        meta: {
          unrequiredAuth: true,
          title: 'Visualização de produto'
        }
      }
      // ,
      // {
      //   path: '/laboratories/:id/edit',
      //   component: LaboratoriesForm,
      //   meta: {
      //     unrequiredAuth: true,
      //     title: 'Edição de Laboratório'
      //   }
      // }
    ]
  }
]
