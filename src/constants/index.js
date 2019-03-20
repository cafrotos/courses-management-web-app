import logo1 from '../assets/images/logo.png';
import logo2 from '../assets/images/logo_2.png';
import i18n from '../utils/i18n';

export const REQUEST_TIME_OUT = 'REQUEST_TIME_OUT'
export const TIMEOUT = 30000;
export { logo1, logo2 };

export const SHIPPO_APP = {
  name: 'PANDA_WEB_APP',
  secret: '123'
}
export const LIST_MENU = [
  {
    id: ['0'],
    name: i18n.t('main_menu.dashboard'),
    subMenu: [],
    key: '/dashboards',
    route: '/dashboards',
    icon: 'fas fa-tachometer-alt',
    disabled: true
  },
  // {
  //   id: ['1'],
  //   name: i18n.t('main_menu.delivery_orders.title'),
  //   subMenu: [],
  //   route: '/delivery-orders',
  //   key: '/delivery-orders',
  //   icon: 'fas fa-rocket',
  //   disabled: false
  // },
  // {
  //   id: ['2'],
  //   name: i18n.t('main_menu.task.title'),
  //   subMenu: [],
  //   route: '/tasks',
  //   key: '/tasks',
  //   icon: 'fas fa-tasks',
  //   disabled: false
  // },
  // {
  //   id: ['3'],
  //   name: i18n.t('main_menu.pickup_requests.title'),
  //   subMenu: [],
  //   route: '/pickup-requests',
  //   key: '/pickup-requests',
  //   icon: 'fas fa-map-marker-alt',
  //   disabled: false
  // },
  // {
  //   id: ['4'],
  //   name: i18n.t('main_menu.scanning_histories'),
  //   subMenu: [],
  //   route: '/scanning-histories',
  //   key: '/scanning-histories',
  //   icon: 'fas fa-history',
  //   disabled: false
  // },
  // {
  //   id: ['sub1'],
  //   name: i18n.t('main_menu.operator'),
  //   subMenu: [{ id: ['5'], name: i18n.t('main_menu.list'), route: '/operators/list', disabled: false }, { id: ['6'], name: i18n.t('main_menu.add_new'), route: '/operators/add-new', disabled: true }],
  //   route: '#',
  //   key: '/operators',
  //   icon: 'fas fa-user-circle',
  //   disabled: false
  // },
  // {
  //   id: ['sub2'],
  //   name: i18n.t('main_menu.rider'),
  //   subMenu: [{ id: ['7'], name: i18n.t('main_menu.list'), route: '/riders/list' }, { id: ['8'], name: i18n.t('main_menu.add_new'), route: '/riders/add-new' }, { id: ['9'], name: i18n.t('main_menu.team'), route: '/riders/teams' }],
  //   route: '#',
  //   key: '/riders',
  //   icon: 'fas fa-motorcycle',
  //   disabled: false
  // },
  // {
  //   id: ['sub3'],
  //   name: i18n.t('main_menu.custormer'),
  //   subMenu: [{ id: ['10'], name: i18n.t('main_menu.list'), route: '/custormer/list' }, { id: ['11'], name: i18n.t('main_menu.add_new'), route: '/custormer/add-new' }],
  //   route: '#',
  //   key: '/custormers',
  //   icon: 'fas fa-chess-king',
  //   disabled: true
  // },
  // {
  //   id: 'sub4',
  //   name: i18n.t('main_menu.system'),
  //   subMenu: [{ id: ['12'], name: i18n.t('main_menu.list'), route: '/system/list' }, { id: ['13'], name: i18n.t('main_menu.add_new'), route: '/system/add-new' }],
  //   icon: 'fas fa-cog',
  //   key: '/systems',
  //   route: '#',
  //   disabled: true
  // }
];
