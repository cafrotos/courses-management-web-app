import { Route, Redirect, withRouter } from 'react-router-dom';
import React from 'react';


class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: localStorage.getItem('accessToken') ? true : false,
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isLogin } = this.state;
    if (!isLogin) {
      return (<Redirect
        to={{
          pathname: "/",
          state: { from: this.props.location }
        }}
      />)
    }
    return (
      this.props.from === '/' ?
        <Redirect
          to={this.props.to}
          key={this.props.location.pathname}
          render={props => (
            <Component {...this.props} />
          )}
        /> :
        <Route
          {...rest}
          key={this.props.location.pathname}
          render={props => (
            <Component {...this.props} />
          )}
        />
    )
  }
}

export default withRouter(PrivateRoute);