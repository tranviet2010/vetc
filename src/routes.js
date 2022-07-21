import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const RegisterCustom = React.lazy(() => import('./views/base/RegisterCustom'))
const WalletLink = React.lazy(()=> import('./views/base/wallet-link/WalletLink'))
const RechargeMoney = React.lazy(()=> import('./views/base/rechargeMoney/Recharge'))
const WithdrawMoney = React.lazy(()=> import('./views/base/withdrawMoney/WithdrawMoney'))
const TransferMoney = React.lazy(()=> import('./views/base/transferMoney/TransferMoney'))
const Pay = React.lazy(()=> import('./views/base/pay/Pay'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))


const CollectPay=React.lazy(()=>import('./views/base/collect_pay'))
const Report=React.lazy(()=>import('./views/base/report'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Quản lý ví điện tử', exact: true },
  { path: '/base/RegisterCustom', name: 'Đăng ký', element: RegisterCustom },
  { path: '/base/wallet-link', name: 'Liên kết ví', element: WalletLink },
  { path: '/base/rechargeMoney', name: 'Nạp tiền', element: RechargeMoney },
  { path: '/base/withdrawMoney', name: 'Rút tiền', element: WithdrawMoney },
  { path: '/base/transferMoney', name: 'Chuyển tiền', element: TransferMoney },
  { path: '/base/pay', name: 'Thanh toán', element: Pay },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },

  { path: '/base/collect_pay', name: 'Danh sách giao dịch', element: CollectPay },
  { path: '/base/report', name: 'Danh sách giao dịch', element: Report },


]

export default routes
