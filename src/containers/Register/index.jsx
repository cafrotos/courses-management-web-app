import React from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect, withRouter } from 'react-router-dom';
import RegisterUI from './RegisterUI';
import './style.less'
import { Validate, FetchUtils } from 'utils';
import { notification } from 'antd'

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChangeField = (field) => {
    return (event) => {
      if (field === 'password' || field === 'repassword') {
        this.setState({
          [field]: event.target.value.trim(),
          [`${field}Err`]: ''
        })
        return;
      }
      this.setState({
        [field]: event.target.value,
        [`${field}Err`]: ''
      })
    }
  }

  getField = (field) => {
    return this.state[field];
  }

  getFieldErrorMessage = (field) => {
    return this.state[`${field}Err`];
  }

  onBlurValidate = (field) => {
    return () => {
      if (!this.state[field]) {
        this.setState({
          [`${field}Err`]: "Chưa nhập " + field
        })
      }
      else {
        if (field === 'email' || field === 'password') {
          if (!Validate(field, this.state[field])) {
            this.setState({
              [`${field}Err`]: field + " không đúng định dạng"
            })
          }
        }
        if (field === 'repassword' && this.state.repassword !== this.state.password) {
          this.setState({
            [`${field}Err`]: "Mật khẩu không khớp"
          })
        }
      }
    }
  }

  onSubmit = async () => {
    let { firstName, lastName, email, address, password } = this.state
    let body = {
      firstName, lastName, email, address, password, section: "STUDENT"
    }
    let response = await FetchUtils.post('/register', body);
    if (response.status === 200) {
      notification.success({
        message: "Tạo tài khoản thành công!"
      })
      localStorage.setItem('email', email)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    else {
      notification.error({
        message: "Tạo tài khoản thất bại!"
      })
    }
  }

  render() {
    if (this.state.isLogin) {
      return <Redirect to={{ pathname: '/dashboard' }} />
    }
    if (this.state.isVerifyEmail || localStorage.getItem('email')) {
      return <Redirect to={{ pathname: '/login' }} />
    }
    return (
      <DocumentTitle title={"Đăng ký"}>
        <RegisterUI
          onBlurValidate={this.onBlurValidate}
          onChangeField={this.onChangeField}
          getField={this.getField}
          getFieldErrorMessage={this.getFieldErrorMessage}
          onSubmit={this.onSubmit}
        />
      </DocumentTitle>
    )
  }
}

export default withRouter(Register);