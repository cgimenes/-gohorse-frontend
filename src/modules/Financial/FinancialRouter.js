import Layout from '@core/components/Layout'
import InvoicesList from './Invoices/InvoicesList'

export default [
  {
    path: '/financial',
    component: Layout,
    children: [
      {
        path: '/financial/invoices',
        component: InvoicesList,
        meta: {
          unrequiredAuth: true,
          title: 'Títulos pendentes'
        }
      }
    ]
  }
]
