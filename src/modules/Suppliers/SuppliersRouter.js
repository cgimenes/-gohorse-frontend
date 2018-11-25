import Layout from '@core/components/Layout'
import SuppliersList from './SuppliersList'
import SuppliersForm from './SuppliersForm'
import SuppliersShow from './SuppliersShow'

export default [
  {
    path: '/suppliers',
    component: Layout,
    children: [
      {
        path: '/suppliers',
        component: SuppliersList,
        meta: {
          unrequiredAuth: false,
          title: 'Fornecedores'
        }
      },
      {
        path: '/suppliers/create',
        component: SuppliersForm,
        meta: {
          unrequiredAuth: false,
          title: 'Criar um novo Fornecedor'
        }
      },
      {
        path: '/suppliers/:id',
        component: SuppliersShow,
        meta: {
          unrequiredAuth: false,
          title: 'Visualização de Fornecedor'
        }
      },
      {
        path: '/suppliers/:id/edit',
        component: SuppliersForm,
        meta: {
          unrequiredAuth: false,
          title: 'Edição de Fornecedor'
        }
      }
    ]
  }
]
