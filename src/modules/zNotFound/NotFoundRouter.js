import Layout from '@core/components/Layout'
import NotFoundPage from './NotFoundPage'

export default [
  {
    path: '/*',
    component: Layout,
    children: [
      {
        path: '/',
        component: NotFoundPage,
        meta: {
          unrequiredAuth: true,
          title: ' '
        }
      }
    ]
  }
]
