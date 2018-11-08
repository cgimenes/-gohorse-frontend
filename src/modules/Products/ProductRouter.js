import Layout from '@core/components/Layout'
import ProductsList from './ProductsList'
import ProductsForm from './ProductsForm'
import ProductsShow from './ProductsShow'

export default [
  {
    path: '/products',
    component: Layout,
    children: [
      {
        path: '/products',
        component: ProductsList,
        meta: {
          unrequiredAuth: false,
          title: 'Produtos'
        }
      },
      {
        path: '/products/create',
        component: ProductsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um um novo produto'
        }
      },
      {
        path: '/products/:id',
        component: ProductsShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de produto'
        }
      },
      {
        path: '/products/:id/edit',
        component: ProductsForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de produto'
        }
      }
    ]
  }
]
