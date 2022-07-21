import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle,
  cilSpeedometer,
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
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Đăng ký',
        to: '/base/RegisterCustom',
      },
      {
        component: CNavItem,
        name: 'Liên kết ví',
        to: '/base/wallet-link',
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
    name: 'Thu hộ - chi hộ',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách giao dịch',
        to: '/base/collect_pay',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Báo cáo',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Báo cáo thu/ chi hộ',
        to: '/base/report',
      },
    ],
  },


]

export default _nav
