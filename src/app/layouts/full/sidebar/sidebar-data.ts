import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Thống kê',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Khách hàng',
  },
  {
    displayName: 'Đặt lịch',
    iconName: 'user',
    route: '/booking/booking-guest',
  },
  {
    displayName: 'Quản lý đặt lịch',
    iconName: 'user',
    route: '/booking/booking-management',
  },
  // {
  //   navCap: 'Mua sắm hàng hóa',
  // },
  // {
  //   displayName: 'Menu Online',
  //   iconName: 'building-store',
  //   route: '/order-online',
  // },

  
  {
    navCap: 'Cấu hình hệ thống',
  },
  {
    displayName: 'Quản lý nhân viên',
    iconName: 'user',
    route: '/system/user-management',
  },
  {
    displayName: 'Quản lý phòng ban',
    iconName: 'chart-candle',
    route: '/system/department-management',
  },
  {
    displayName: 'Quản lý chức vụ',
    iconName: 'chart-candle',
    route: '/system/position-management',
  },

  {
    navCap: 'Khác',
  },
  {
    displayName: 'Liên hệ',
    iconName: 'user',
    route: '/extra/contact-form',
  },
  {
    displayName: 'Tin tức',
    iconName: 'user',
    route: '/extra/news',
  },

  
];
