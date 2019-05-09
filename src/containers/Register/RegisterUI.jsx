import React from 'react';
import { LogoImg } from 'assets'
import { Layout, Form, Button, Icon, Input, Row, Col } from 'antd';

const RegisterUI = (props) => {
  let { onChangeField, getField, getFieldErrorMessage, onBlurValidate, onSubmit } = props
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

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item help={getFieldErrorMessage('firstName')}>
                <Input
                  name='Họ'
                  placeholder='Họ..'
                  prefix={<Icon type="user" />}
                  className={`login__form__input `}
                  size="large"
                  onChange={onChangeField('firstName')}
                  onBlur={onBlurValidate('firstName')}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item help={getFieldErrorMessage('lastName')}>
                <Input
                  name='Tên'
                  placeholder='Tên..'
                  prefix={<Icon type="user" />}
                  className={`login__form__input `}
                  size="large"
                  onChange={onChangeField('lastName')}
                  onBlur={onBlurValidate('lastName')}
                />

              </Form.Item>
            </Col>
          </Row>
          <Form.Item help={getFieldErrorMessage("email")}>
            <Input
              name='email'
              placeholder='Email..'
              prefix={<i className="fas fa-at"></i>}
              className={`login__form__input `}
              size="large"
              onChange={onChangeField('email')}
              onBlur={onBlurValidate('email')}
            />
          </Form.Item>
          <Form.Item help={getFieldErrorMessage('address')}>
            <Input
              name='address'
              placeholder='Địa chỉ..'
              prefix={<i className="fas fa-map-marker-alt"></i>}
              className={`login__form__input `}
              size="large"
              onChange={onChangeField('address')}
              onBlur={onBlurValidate('address')}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item help={getFieldErrorMessage('password')}>
                <Input
                  name='password'
                  type="password"
                  placeholder='Mật khẩu..'
                  prefix={<Icon type="lock" theme="filled" />}
                  className={`login__form__input `}
                  size="large"
                  onChange={onChangeField('password')}
                  onBlur={onBlurValidate('password')}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item help={getFieldErrorMessage('repassword')}>
                <Input
                  name='repassword'
                  type="password"
                  placeholder='Xác nhận mật khẩu..'
                  prefix={<Icon type="lock" theme="filled" />}
                  className={`login__form__input `}
                  size="large"
                  onChange={onChangeField('repassword')}
                  onBlur={onBlurValidate('repassword')}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type='primary'
              size='large'
              htmlType='submit'
              onClick={() => onSubmit()}
            >
              Đăng ký
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Layout>
  )
}

export default RegisterUI;