import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const RegisterCustom = React.lazy(() => import('./views/base/RegisterCustom'))
const WalletLink = React.lazy(()=> import('./views/base/walletLink/WalletLink'))
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
const CollectPay=React.lazy(()=>import('./views/base/collectPay'))
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

const TopWalletByQuantity=React.lazy(() => import('./views/base/topWalletByQuantity/TopWalletByQuantity'))
const SupplySituation=React.lazy(() => import('./views/base/supplySituation/index'))

const ReportTwoPay=React.lazy(() => import('./views/base/reportPeriodic/reportTwoParty/ReportTwoParty'))
const TopRecharge=React.lazy(() => import('./views/base/topWalletByQuantity/topRechargeWithdraw/TopRecharge'))
const TopWithdraw=React.lazy(() => import('./views/base/topWalletByQuantity/topRechargeWithdraw/TopWithdraw'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Qu???n l?? v?? ??i???n t???', exact: true },
  { path: '/base', name: 'Thu h??? - chi h???', exact: true },
  { path: '/base/RegisterCustom', name: '????ng k??', element: RegisterCustom },
  { path: '/base/walletLink', name: 'Li??n k???t v??', element: WalletLink },
  { path: '/base/rechargeMoney', name: 'N???p ti???n', element: RechargeMoney },
  { path: '/base/withdrawMoney', name: 'R??t ti???n', element: WithdrawMoney },
  { path: '/base/transferMoney', name: 'Chuy???n ti???n', element: TransferMoney },
  { path: '/base/pay', name: 'Thanh to??n', element: Pay },
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


  { path: 'collect_pay1', name: 'Danh s??ch giao d???ch', element: CollectPay },

  { path: '/base/electronicTransfer', name: 'Danh s??ch chuy???n ti???n ??i???n t???', element: ElectronicTransfer },
  { path: '/base/collectPay', name: 'Danh s??ch giao d???ch', element: CollectPay },

  { path: '/base/report', name: 'Danh s??ch giao d???ch', element: Report },
  { path: '/base/reportTransfer', name: 'Danh s??ch giao d???ch', element: ReportTransfer},
  { path: '/base/paymentGateway', name: 'Danh s??ch giao d???ch', element: PaymentGateway},
  { path: '/base/reportPayment', name: 'B??o c??o giao d???ch', element: ReportPayment},
  { path: '/base/suspiciousTransaction', name: 'Giao d???ch nghi ng???', element: SuspiciousTransaction},
  { path: '/base/guaranteedAccount', name: 'TK??B v??', element: GuaranteedAccount},
  { path: '/base/reportWallet', name: 'B??o c??o s??? l?????ng v??', element: ReportWallet},
  { path: '/base/reportPeriodic', name: 'B??o c??o v?? theo k???', element: ReportPeriodic},
  { path: '/base/guaranteedRaeAccount', name: 'TK??B thu - chi h???', element: GuaranteedRaeAccount},
  { path: '/base/accountWallet', name: 'Tra c???u t??i kho???n/v?? ??i???n t??? h???n ch???', element: AccountWallet},

  { path: '/base/topWalletByQuantity', name: 'Top v?? theo s??? l?????ng/gi?? tr???', element: TopWalletByQuantity},
  { path: '/base/supplySituation', name: 'T??nh h??nh cung ???ng', element: SupplySituation},

  { path: '/base/reportPeriodic/reportTwoPay', name: 'b??o c??o 2 b??n', element: ReportTwoPay},
  { path: '/base/topWalletByQuantity/topRechargeWithdraw', name: 'top 10 n???p', element: TopRecharge},
  { path: '/base/topWalletByQuantity/topRechargeWithdraw', name: 'top 10 r??t', element: TopWithdraw},

]

export default routes
