import React from 'react';
import DocumentTitle from 'react-document-title';
import { LogoImg } from 'assets'
import { Validate } from './../../utils'
import { Redirect, withRouter } from 'react-router-dom';
import { Layout, Form, Button, Icon, Input, Row, Col } from 'antd';

const RegisterUI = (props) => {
  return (
    <Layout className="login">
      <Form>
        <div className="login__title">
          <Row>
            <img src={LogoImg} alt="" />
          </Row>
          <h1>Tạo tài khoản</h1>
          <p>Hãy đăng ký tài khoản của bạn để sử dụng dich vụ của chúng tôi!</p>
        </div>
        <div className="login__form__alige">
          <Form.Item help={""}>
            <Row gutter={16}>
              <Col span={12}>
                <Input
                  name='Họ'
                  placeholder='Họ..'
                  autoFocus
                  prefix={<Icon type="user" />}
                  className={`login__form__input `}
                  size="large"
                />
              </Col>
              <Col span={12}>
                <Input
                  name='Tên'
                  placeholder='Tên..'
                  autoFocus
                  prefix={<Icon type="user" />}
                  className={`login__form__input `}
                  size="large"
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item help={""}>
            <Input
              name='email'
              placeholder='Email..'
              autoFocus
              prefix={<i class="fas fa-at"></i>}
              className={`login__form__input `}
              size="large"
            />
          </Form.Item>
          <Form.Item help={""}>
            <Input
              name='address'
              placeholder='Địa chỉ..'
              autoFocus
              prefix={<i class="fas fa-map-marker-alt"></i>}
              className={`login__form__input `}
              size="large"
            />
          </Form.Item>
          <Form.Item help={""}>
            <Row gutter={16}>
              <Col span={12}>
                <Input
                  name='password'
                  placeholder='Mật khẩu..'
                  autoFocus
                  prefix={<Icon type="lock" theme="filled" />}
                  className={`login__form__input `}
                  size="large"
                />
              </Col>
              <Col span={12}>
                <Input
                  name='repassword'
                  placeholder='Xác nhận mật khẩu..'
                  autoFocus
                  prefix={<Icon type="lock" theme="filled" />}
                  className={`login__form__input `}
                  size="large"
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              size='large'
              htmlType='submit'
              onClick={() => this.onSubmit()}
            >
              Tiếp theo
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Layout>
  )
}

export default RegisterUI;