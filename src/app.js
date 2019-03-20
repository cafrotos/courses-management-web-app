import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import {
	DashBoard,
	UsernameLogin,
	PasswordLogin,
	NotFoundPage,
	OopsPage
} from './containers';
import { PrivateRoute, CustomRoute } from './components';
import history from './history';
import './styles/app.less';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<PrivateRoute exact path='/' component={DashBoard} />
					<CustomRoute exact path='/login' component={UsernameLogin} />
					<CustomRoute exact path='/login/password' component={PasswordLogin} />
					{/*<PrivateRoute exact path='/tasks' component={Tasks} />*/}
					{/*<PrivateRoute exact path='/tasks/details/:taskId' component={TaskDetails} />*/}
					{/*<PrivateRoute exact path='/pickup-requests' component={PickupRequestsList} />*/}
					{/*<PrivateRoute exact path='/pickup-requests/details/:pickupRequestId' component={PickupRequestDetails} />*/}
					{/*<PrivateRoute exact path='/scanning-histories' component={ScanningHistories} />*/}
					{/*<PrivateRoute exact path='/systems' component={SystemConfig} />*/}
					{/*<PrivateRoute exact path='/customers' component={Customer} />*/}
					{/*<PrivateRoute exact path='/delivery-orders' component={DeliveryOrders} />*/}
					{/*<PrivateRoute path='/customers' component={Customer} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/dashboard' component={HubDashBoard} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/hub-rider' component={HubRider} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/permission' component={HubPermisson} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/pickup-request' component={PickupRequest} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/pickup-request/:pickupRequestId' component={PickupRequest} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/rider-shift' component={RiderShift} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/rider-shift/:riderShiftId' component={RiderShiftDetail} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/scan-barcode' component={ScanBarcode} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/partner-task' component={PartnerTask} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/shift-list' component={ShiftList} />*/}
					{/*<PrivateRoute exact path='/hub/:hubId/hub-setting' component={HubSetting} />*/}
					{/*<PrivateRoute path='/riders/teams' component={TeamsRider} />*/}
					{/*<PrivateRoute path='/riders/add-new' component={AddRider} />*/}
					{/*<PrivateRoute path='/riders/list' component={ListRider} />*/}
					{/*<PrivateRoute path='/riders/profile/:riderId' component={ProfileRider} />*/}
					{/*<PrivateRoute path='/riders/update/:riderId' component={UpdateRider} />*/}
					{/*<PrivateRoute path='/operators/list' component={ListOperators} />*/}
					{/*<PrivateRoute path='/operators/profile/:operatorId' component={ProfileOperator} />*/}
					{/*<PrivateRoute path='/operators/update/:operatorId' component={UpdateOperator} />*/}
					{/*<PrivateRoute path='/change-info' component={ChangeInfo} />*/}
					<Route exact path='/oops' component={OopsPage} />
					<Route exact path='*' component={NotFoundPage} />
				</Switch>
			</Router >
		)
	}
}

export default App;