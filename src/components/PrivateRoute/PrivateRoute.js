import { Redirect, Route, withRouter } from 'react-router-dom';
import React from 'react';
import ShopLayOut from '../../components/ShopLayout/ShopLayout';

class PrivateRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: localStorage.getItem('accessToken'),
			headerHeight: 0
		}
	}

	componentDidMount = async () => {
		if (!localStorage.getItem('accessToken')) {
			this.setState({ isLogin: false });
		}
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (!prevState.isLogin || !localStorage.getItem('accessToken')) {
			this.setState({ isLogin: false });
		}
	};

	getHeaderHeight = (height) => {
		this.setState({headerHeight: height})
	}

	render() {
		const { component: Component, ...rest } = this.props;
		const { isLogin } = this.state;
		if (!isLogin) {
			return (<Redirect
				to={{
					pathname: "/login",
					state: { from: this.props.location }
				}}
			/>)
		}
		return (
			<Route
				{...rest}
				key={this.props.location.pathname}
				render={props => (
					<ShopLayOut selectedMenu={this.props.MenuId} getHeaderHeight={this.getHeaderHeight}><Component {...this.props} headerHeight={this.state.headerHeight} /></ShopLayOut>
				)}
			/>
		)
	}
}

export default withRouter(PrivateRoute);
