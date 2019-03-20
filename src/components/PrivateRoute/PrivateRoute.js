import { Route, Redirect, withRouter } from 'react-router-dom';
import React from 'react';
import FetchUtils from '../../utils/fetchUtils';


class PrivateRoute extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLogin: localStorage.getItem('accessToken') ? true : false,
  //   }
  // }
  //
  // componentDidMount = async () => {
  //   this.isExpriseToken();
  // }
  //
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (!prevState.isLogin || !localStorage.getItem('accessToken')) {
  //     this.setState({ isLogin: false });
  //   }
  //   this.isExpriseToken();
  // }
  //
  // isExpriseToken = () => {
  //   const expriseAt = localStorage.getItem('expiresAt');
  //   let expriseTime = new Date(expriseAt).getTime();
  //
  //   if (expriseTime < Date.now()) {
  //     this.setState({ isLogin: false });
  //     localStorage.removeItem('accessToken');
  //   }
  // }
  //
  // async refreshToken() {
  //   let refreshToken = localStorage.getItem('refreshToken');
  //   const response = await FetchUtils.getAccessToken(`/oauth/oauth/token`, { grant_type: 'refresh_token', refresh_token: refreshToken })
  //   if (response.httpCode === 200) {
  //     await localStorage.setItem('accessToken', response.accessToken);
  //     localStorage.setItem('refreshToken', response.refreshToken);
  //     localStorage.setItem('expiresAt', response.accessTokenExpiresAt);
  //   }
  // }

  render() {
    const { component: Component, ...rest } = this.props;
    // const { isLogin } = this.state;
    // if (!isLogin) {
    //   return (<Redirect
    //     to={{
    //       pathname: "/login/password",
    //       state: { from: this.props.location }
    //     }}
    //   />)
    // }
    return (
      <Route
        {...rest}
        render={props => (
          < Component {...this.props} />
        )}
      />
    )
  }


}

export default withRouter(PrivateRoute);