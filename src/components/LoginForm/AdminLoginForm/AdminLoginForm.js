import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './AdminLoginForm.less';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <span className='login__title'>
            <span className='text--panda'>PANDA</span>
            <span className='text--login'>Login</span>
          </span>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: '#5a5a5a' }} />} placeholder="Email or Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="key" style={{ color: '#5a5a5a' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
                        </Button>
          </FormItem>
        </Form>
    );
  }
}

export const LoginForm = Form.create()(NormalLoginForm);
