import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCash, cilNotes, cilTransfer, cilWallet, cilWarning,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavGroup,
    name: 'Quản lý ví điện tử',
    to: '/base',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Đăng ký',
        to: '/base/RegisterCustom',
      },
      {
        component: CNavItem,
        name: 'Liên kết ví',
        to: '/base/walletLink',
      },
      {
        component: CNavItem,
        name: 'Nạp tiền',
        to: '/base/rechargeMoney'
      },
      {
        component: CNavItem,
        name: 'Rút tiền',
        to: '/base/withdrawMoney'
      },
      {
        component: CNavItem,
        name: 'Chuyển tiền',
        to: '/base/transferMoney'
      },
      {
        component: CNavItem,
        name: 'Thanh toán',
        to: '/base/pay'
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Báo cáo ví',
    to: '/base',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Báo cáo số lượng ví',
        to: '/base/reportWallet',
      },
      {
        component: CNavItem,
        name: 'Báo cáo ví theo kỳ',
        to: '/base/reportPeriodic',
      },
      {
        component: CNavItem,
        name: 'Top ví theo số lượng/giá trị',
        to: '/base/topWalletByQuantity',
      },
      {
        component: CNavItem,
        name: 'Tình hình cung ứng',
        to: '/base/supplySituation',
      },

      {
        component: CNavItem,
        name: 'báo cáo 2 bên',
        to: '/base/reportPeriodic/reportTwoPay',
      },
      {
        component: CNavItem,
        name: 'top 10 nạp',
        to: '/base/topWalletByQuantity/topRechargeWithdraw',
      },
      {
        component: CNavItem,
        name: 'top 10 rút',
        to: '/base/topWalletByQuantity/topRechargeWithdraw',
      },

    ],
  },

  {
    component: CNavGroup,
    name: 'Thu hộ - chi hộ',
    to: '/base',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách giao dịch',
        to: '/base/collectPay',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Báo cáo',
    to: '/base',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Báo cáo thu/ chi hộ',
        to: '/base/report',
      },
      {
        component: CNavItem,
        name: 'Báo cáo chuyển tiền',
        to: '/base/reportTransfer',
      },
      {
        component: CNavItem,
        name: 'Báo cáo cổng thanh toán',
        to: '/base/reportPayment',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Chuyển tiền điện tử',
    to: '/base',
    icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách giao dịch',
        to: '/base/electronicTransfer',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Cổng thanh toán',
    to: '/base',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách giao dịch',
        to: '/base/paymentGateway',
      },

    ],
  },

  {
    component: CNavGroup,
    name: 'Tình hình rủi ro',
    to: '/base',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Giao dịch nghi ngờ',
        to: '/base/suspiciousTransaction',
      },

    ],
  },

  {
    component: CNavGroup,
    name: 'Tài khoản đảm bảo ví',
    to: '/base',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'TK đảm bảo ví',
        to: '/base/guaranteedAccount',
      },

      {
        component: CNavItem,
        name: 'TK đảm bảo thu chi hộ',
        to: '/base/guaranteedRaeAccount',
      },

    ],
  },

  {
    component: CNavGroup,
    name: 'Quản lý chi tiêu rủi ro',
    to: '/base',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tài khoản/ví điện tử',
        to: '/base/accountWallet',
      },

    ],
  },


]

export default _nav
