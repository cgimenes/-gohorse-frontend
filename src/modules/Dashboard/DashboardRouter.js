import Layout from '@core/components/Layout'
import Dashboard from './Dashboard'

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Dashboard,
        meta: {
          unrequiredAuth: true,
          title: 'Dashboard'
        }
      }
    ]
  }
]
