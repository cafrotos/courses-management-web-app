import React from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect, withRouter } from 'react-router-dom';
import RegisterUI from './RegisterUI';
import './style.less'


class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errMessage: '',
      isLogin: localStorage.getItem('accessToken') ? true : false,
      isVerifyEmail: false
    }
  }

  render() {
    // if (this.state.isLogin) {
    //   return <Redirect to={{ pathname: '/dashboard' }} />
    // }
    // if (this.state.isVerifyEmail || localStorage.getItem('email')) {
    //   return <Redirect to={{ pathname: '/login' }} />
    // }
    return (
      <DocumentTitle title={"Đăng ký"}>
        <RegisterUI></RegisterUI>
      </DocumentTitle>
    )
  }
}

export default withRouter(Register);