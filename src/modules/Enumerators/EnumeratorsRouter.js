import Layout from '@core/components/Layout'
import EnumeratorsList from './EnumeratorsList'

export default [
  {
    path: '/enumerators',
    component: Layout,
    children: [
      {
        path: '/enumerators',
        component: EnumeratorsList,
        meta: {
          unrequiredAuth: false,
          title: 'Cadastros complementares'
        }
      }
    ]
  }
]
