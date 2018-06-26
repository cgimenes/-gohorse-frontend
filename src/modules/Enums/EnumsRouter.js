import Layout from '@core/components/Layout'
import EnumList from './EnumList'

export default [
  {
    path: '/enums',
    component: Layout,
    children: [
      {
        path: '/enums',
        component: EnumsList,
        meta: {
          unrequiredAuth: true,
          title: 'Cadastros complementares'
        }
      },
    ]
  }
]
