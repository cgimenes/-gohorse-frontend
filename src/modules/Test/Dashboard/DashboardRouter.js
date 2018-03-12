import Layout from '@theme/components/Layout'
import Dashboard from './Dashboard'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Dashboard,
        meta: {unrequiredAuth: true}
      }
    ]
  }
]
