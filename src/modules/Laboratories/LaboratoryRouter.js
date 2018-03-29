import Layout from '@core/components/Layout'
import Laboratories from './Laboratories'

export default [
  {
    path: '/laboratories',
    component: Layout,
    children: [
      {
        path: '/laboratories',
        component: Laboratories,
        meta: {
          unrequiredAuth: true,
          title: 'Laboratórios'
        }
      }
    ]
  }
]
