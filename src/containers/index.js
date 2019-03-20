import React from 'react';
import Loadable from 'react-loadable';
import Layout from './AdminLayout/AdminLayout';
import UsernameLogin from './Login/UsernameLogin';
import PasswordLogin from './Login/PasswordLogin';
import OopsPage from './OopsPage/OopsPage';
import NotFoundPage from './PageNotFound/NotFoundPage';

export {
  UsernameLogin,
  PasswordLogin,
  NotFoundPage,
  OopsPage
}

export const LoadingAdmin = () => {
  return (
    <Layout style={{ width: window.innerWidth, height: window.innerHeight }} />
  );
};


// export const LoadingHub = () => {
//   return (
    {/*<LayoutHub style={{ width: window.innerWidth, height: window.innerHeight }} />*/}
  // );
// }

export const DashBoard = Loadable({
  loader: () => import('./DashBoard/index'),
  loading: LoadingAdmin
});

export const SystemConfig = Loadable({
  loader: () => import('./Systems/SystemConfig'),
  loading: LoadingAdmin
});

// export const Tasks = Loadable({
//   loader: () => import('./Tasks/Tasks'),
//   loading: LoadingAdmin
// });

// export const TaskDetails = Loadable({
//   loader: () => import('./TaskDetails/TaskDetails'),
//   loading: LoadingAdmin
// });
//
// export const ScanningHistories = Loadable({
//   loader: () => import('./ScanningHistories/ScanningHistories'),
//   loading: LoadingAdmin
// });
//
// export const TeamsRider = Loadable({
//   loader: () => import('./Riders/TeamsRider'),
//   loading: LoadingAdmin
// });
//
// export const AddRider = Loadable({
//   loader: () => import('./Riders/AddRider'),
//   loading: LoadingAdmin
// });
//
// export const ListRider = Loadable({
//   loader: () => import('./Riders/ListRider'),
//   loading: LoadingAdmin
// });
//
// export const UpdateRider = Loadable({
//   loader: () => import('./Riders/UpdateRider'),
//   loading: LoadingAdmin
// });
//
// export const ProfileRider = Loadable({
//   loader: () => import('./Riders/ProfileRider'),
//   loading: LoadingAdmin
// });

// export const Customer = Loadable({
//   loader: () => import('./Customers/Customer'),
//   loading: LoadingHub
// });


// export const DeliveryOrders = Loadable({
//   loader: () => import('./DeliveryOrders/DeliveryOrders'),
//   loading: LoadingAdmin
// });
//
//
// export const HubDashBoard = Loadable({
//   loader: () => import('./Hub/DashBoard/HubDashBoard'),
//   loading: LoadingHub
// });
//


// export const HubRider = Loadable({
//   loader: () => import('./Hub/HubRider/HubRider'),
//   loading: LoadingHub
// });
//
//
// export const HubPermisson = Loadable({
//   loader: () => import('./Hub/Permisson/HubPermisson'),
//   loading: LoadingHub
// });
//
// export const PickupRequest = Loadable({
//   loader: () => import('./Hub/PickupRequest/PickupRequest'),
//   loading: LoadingHub
// });
//
// export const PickupRequestsList = Loadable({
//   loader: () => import('./PickupRequestsList/PickupRequestsList'),
//   loading: LoadingAdmin
// })
//
// export const PickupRequestDetails = Loadable({
//   loader: () => import('./PickupRequestDetails/PickupRequestDetails'),
//   loading: LoadingAdmin
// });
//
// export const RiderShiftDetail = Loadable({
//   loader: () => import('./Hub/RiderShift/RiderShiftDetail'),
//   loading: LoadingHub
// });
//
// export const RiderShift = Loadable({
//   loader: () => import('./Hub/RiderShift/RiderShift'),
//   loading: LoadingHub
// });
//
// export const ScanBarcode = Loadable({
//   loader: () => import('./Hub/ScanBarcode/ScanBarcode'),
//   loading: LoadingHub
// });
//
// export const ShiftList = Loadable({
//   loader: () => import('./Hub/ShiftList/ShiftList'),
//   loading: LoadingHub
// });
//
// export const PartnerTask = Loadable({
//   loader: () => import('./Hub/PartnerTask/PartnerTask'),
//   loading: LoadingHub
// });



// export const HubSetting = Loadable({
//   loader: () => import('./Hub/Setting/HubSetting'),
//   loading: LoadingHub
// });
//
// export const UpdateOperator = Loadable({
//   loader: () => import('./Operators/UpdateOperator'),
//   loading: LoadingAdmin
// });
//
// export const ProfileOperator = Loadable({
//   loader: () => import('./Operators/ProfileOperator'),
//   loading: LoadingAdmin
// });
//
// export const ListOperators = Loadable({
//   loader: () => import('./Operators/ListOperators'),
//   loading: LoadingAdmin
// });

// export const ChangeInfo = Loadable({
//   loader: () => import('./ChangeInfo/ChangeInfo'),
//   loading: LoadingAdmin
// });



