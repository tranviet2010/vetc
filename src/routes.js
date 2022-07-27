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

const ElectronicTransfer = React.lazy(()=> import('./views/base/electronicTransfer/ElectronicTransfer'))
const CollectPay=React.lazy(()=>import('./views/base/collect_pay'))
const Report=React.lazy(()=>import('./views/base/report'))
const ReportTransfer=React.lazy(() => import('./views/base/reportTransfer/ReportTransfer'))
const PaymentGateway=React.lazy(() => import('./views/base/paymentGateway/PaymentGateway'))
const ReportPayment=React.lazy(() => import('./views/base/reportPayment/ReportPayment'))
const SuspiciousTransaction=React.lazy(() => import('./views/base/suspiciousTransaction/SuspiciousTransaction'))
const GuaranteedAccount=React.lazy(() => import('./views/base/guaranteedAccount/GuaranteedAccount'))
const ReportWallet=React.lazy(() => import('./views/base/reportWallet/ReportWallet'))
const ReportPeriodic=React.lazy(() => import('./views/base/reportPeriodic/ReportPeriodic'))
const GuaranteedRaeAccount=React.lazy(() => import('./views/base/guaranteedRaeAccount/GuaranteedRaeAccount'))
const AccountWallet=React.lazy(() => import('./views/base/accountWallet/AccountWallet'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Quản lý ví điện tử', exact: true },
  { path: 'collect_pay', name: 'Thu hộ - chi hộ', exact: true },
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


  { path: 'collect_pay1', name: 'Danh sách giao dịch', element: CollectPay },

  { path: '/base/electronicTransfer', name: 'Danh sách chuyển tiền điện tử', element: ElectronicTransfer },
  { path: '/base/collect_pay', name: 'Danh sách giao dịch', element: CollectPay },

  { path: '/base/report', name: 'Danh sách giao dịch', element: Report },
  { path: '/base/reportTransfer', name: 'Danh sách giao dịch', element: ReportTransfer},
  { path: '/base/paymentGateway', name: 'Danh sách giao dịch', element: PaymentGateway},
  { path: '/base/reportPayment', name: 'Báo cáo giao dịch', element: ReportPayment},
  { path: '/base/suspiciousTransaction', name: 'Giao dịch nghi ngờ', element: SuspiciousTransaction},
  { path: '/base/guaranteedAccount', name: 'Tài khoản đảm bảo ví', element: GuaranteedAccount},
  { path: '/base/reportWallet', name: 'Báo cáo số lượng ví', element: ReportWallet},
  { path: '/base/reportPeriodic', name: 'Báo cáo ví theo kỳ', element: ReportPeriodic},
  { path: '/base/guaranteedRaeAccount', name: 'Tài khoản đảm bảo ví', element: GuaranteedRaeAccount},
  { path: '/base/accountWallet', name: 'Tra cứu tài khoản/ví điện tử hạn chế', element: AccountWallet},



]

export default routes
