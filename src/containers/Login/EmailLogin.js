import React from 'react';
import DocumentTitle from 'react-document-title';
import { LogoImg } from 'assets'
import { Validate } from 'utils'
import { Redirect, withRouter } from 'react-router-dom';
import { Layout, Form, Button, Icon, Input, Row, } from 'antd';
import './login.less'


class EmailLogin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errMessage: '',
      isLogin: localStorage.getItem('accessToken') ? true : false,
      isVerifyEmail: false
    }
  }

  onChange = (event) => {
    this.setState({
      email: event.target.value,
      errMessage: ''
    })
  }

  onSubmit = () => {
    if (Validate('email', this.state.email)) {
      this.setState({
        isVerifyEmail: true
      })
      localStorage.setItem('email', this.state.email);
    }
    else {
      this.setState({
        isVerifyEmail: false,
        errMessage: "Email không hợp lệ!"
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
      <DocumentTitle title={"Đăng nhập"}>
        <Layout className="login">
          <Form>
            <div className="login__title">
              <Row>
                <img src={LogoImg} alt="" />
              </Row>
              <h1>Đăng nhập</h1>
              <p>Đăng nhập vào hệ thống Quản lý môn học</p>
            </div>
            <div className="login__form__alige">
              <Form.Item help={this.state.errMessage}>
                <Input
                  name='email'
                  placeholder='Nhập email'
                  autoFocus
                  prefix={<Icon type="user" />}
                  className={`login__form__input `}
                  size="large"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </Form.Item>
              <div className="suggest__login">
                <b className="redirect__component">Bạn quên email của mình ?</b>
              </div>
              <div className="description_login">
                <p>Không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng nhập một cách riêng tư. <a href="/help"><b>Tìm hiểu thêm.</b></a></p>
              </div>
              <div className="footer__form__login">
                <b className="create__account redirect__component">Tạo tài khoản.</b>
                <Form.Item>
                  <Button
                    type='primary'
                    size='large'
                    htmlType='submit'
                    onClick={() => this.onSubmit()}
                  >Tiếp theo
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

export default withRouter(EmailLogin);