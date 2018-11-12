import Layout from '@core/components/Layout'
import CashFlow from './CashFlow/CashFlow'

export default [
  {
    path: '/reports',
    component: Layout,
    children: [
      {
        path: '/reports/cashflow',
        component: CashFlow,
        meta: {
          unrequiredAuth: true,
          title: 'Fluxo de caixa'
        }
      }
    ]
  }
]
