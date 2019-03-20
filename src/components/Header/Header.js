import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Input, Badge, Row, Col, Spin } from 'antd';
import DropdownMenuUser from './DropdownMenuUser';
import './styles.less';
import { revokeAccessToken } from "./api/revokeAccessToken";
import i18n from '../../utils/i18n';
const { Header } = Layout;


export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSpinning: false,
			listHubs: []
		}
	}

	handleLogout = async () => {
		const userId = localStorage.getItem('userId');
		const response = await revokeAccessToken(userId);
		if (response.logout) {
			this.setState({
				isSpinning: true
			});
			setTimeout(() => {
				this.setState({
					isSpinning: false
				});
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
				this.props.history.push('/login');
			}, 500);
		}
	};

	render() {
		let { toggle, collapsed } = this.props;
		const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

		return (
			<Header className="header" style={{ background: "#fff", padding: 0 }}>
				<Row type="flex" justify="start" style={{ height: '100%' }} >
					<Col xs={11} sm={11} md={9} lg={7} xl={6} className="header__col__choosehub">
						<div className="header__choosehub">
							<span>
								<Icon className="trigger" type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
							</span>
						</div>
					</Col>
					<Col xs={0} sm={0} md={2} lg={4} xl={8}>
					</Col>
					<Col xs={5} sm={5} md={7} lg={7} xl={6} className="header__col__search">
						<Input
							style={{ border: "1px" }}
							addonBefore={<span><Icon type="search" /></span>}
							className="header__search"
							size="small"
							placeholder={i18n.t('header.search')}
						/>
					</Col>
					<Col xs={3} sm={3} md={2} lg={2} xl={1} className="header__col__notification">
						<Badge className="header__notification" count={0} >
							<Link to="/option1">
								<Icon type="bell" style={{ fontSize: 18 }} />
							</Link>
						</Badge>
					</Col>
					<Col xs={5} sm={5} md={4} lg={4} xl={3} className="header__col__user">
						<DropdownMenuUser handleLogout={this.handleLogout} />
					</Col>
				</Row>
				<Spin indicator={antIcon} style={{ fontSize: "23px", color: "gray", position: "relative", top: "200px", left: "550px" }} spinning={this.state.isSpinning} />

			</Header>
		)
	}
}    