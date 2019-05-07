import React from 'react';
import DocumentTitle from 'react-document-title';
import logoImage from 'assets/img/logo.png'
import FetchUtils from './../../utils/FetchUtils';
import { Redirect, withRouter } from 'react-router-dom';
import { Layout, Form, Button, Icon, Input, Row, Spin } from 'antd';
import './login.less'


class PasswordLogin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem('email') || null,
      password: null,
      errMessage: '',
      isLogin: localStorage.getItem('accessToken') ? true : false,
      loadding: false
    }
  }

  onChange = (event) => {
    this.setState({
      password: event.target.value,
      errMessage: ''
    })
  }

  changeAccount = () => {
    this.setState({
      email: null
    })
    localStorage.removeItem('email')
  }

  onSubmit = async () => {
    if (!this.state.password) {
      this.setState({
        errMessage: "Chưa nhập mật khẩu!"
      })
    }
    this.setState({
      loadding: true
    })
    let body = {
      email: this.state.email,
      password: this.state.password
    }
    let response = await FetchUtils.post('/login', body);
    if (response && response.status !== 200) {
      this.setState({
        errMessage: response.message,
        loadding: false
      })
    }
    else {
      localStorage.setItem('accessToken', response.access_token);
      localStorage.setItem('section', response.section);
      this.setState({
        loadding: false,
        isLogin: true
      })
    }
  }

  render() {
    if (this.state.isLogin) {
      return <Redirect to={{ pathname: '/dashboard' }} />
    }
    if (!this.state.email) {
      return <Redirect to={{ pathname: '/' }} />
    }
    return (
      <DocumentTitle title={"Đăng nhập"}>
        <Layout className="login">
          <Form>
            <div className="login__title">
              <Row>
                <img src={logoImage} alt="" />
              </Row>
              <h1>Chào mừng</h1>
            </div>
            <div className="login__form__alige">
              <div className="account__info">
                <p><Icon type="user" /> {this.state.email}</p>
              </div>
              <Form.Item help={this.state.errMessage}>
                <Input
                  type='password'
                  name='password'
                  placeholder='Nhập mật khẩu'
                  autoFocus
                  prefix={<Icon type="lock" />}
                  onChange={this.onChange}
                  className={`login__form__input `}
                  size="large"
                  value={this.state.password}
                />
              </Form.Item>
              <div className="change__account">
                <b className="redirect__component" onClick={this.changeAccount}>Đăng nhập bằng tài khoản khác ?</b>
              </div>
              <div className="footer__form__login">
                <b className="create__account redirect__component">Quên mật khẩu ?</b>
                <Form.Item>
                  <Button
                    type='primary'
                    size='large'
                    htmlType='submit'
                    loading={this.state.loadding}
                    onClick={this.onSubmit}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </Layout>
      </DocumentTitle>
    )
  }
}

export default withRouter(PasswordLogin);