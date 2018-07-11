import Layout from '@core/components/Layout'
import AdditionalRegistersList from './AdditionalRegistersList'

export default [
  {
    path: '/enums',
    component: Layout,
    children: [
      {
        path: '/enums',
        component: AdditionalRegistersList,
        meta: {
          unrequiredAuth: true,
          title: 'Cadastros complementares'
        }
      },
    ]
  }
]
