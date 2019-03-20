import React from 'react';
// import UserNameForm from './LoginForm/UserNameForm';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
// import { setItem } from '../../utils/localStorage';
import { verifyUsername } from './api/authenticate';
import i18n from '../../utils/i18n';
import './login.less';
import { Layout } from 'antd';

class UsernameLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      disabled: false,
      errMessage: '',
      isClientKey: localStorage.getItem('clientKey') ? true : false,
      isLogin: localStorage.getItem('accessToken') ? true : false
    }
  }

  onChange = (event) => {
    this.setState({
      disabled: false,
      username: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username } = this.state;
    if (!username) {
      this.setState({ errMessage: i18n.t('login.invalid_username') });
    } else {
      let response = await verifyUsername(username);
      if (response.httpCode === 200) {
        localStorage.setItem('clientKey', response.clientKey);
        localStorage.setItem('username', response.username);
        localStorage.setItem('userId', response.userId);
        this.setState(() => ({ isClientKey: true }));
      } else {
        this.setState({ errMessage: response.error.message });
      }
    }
  }

  render() {
    const { errMessage, username, isClientKey, isLogin } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/login/password' } };

    if (isClientKey) {
      return (<Redirect to={from} />)
    }

    if (isLogin) {
      return (<Redirect to='/tasks' />)
    }
    return (
      <Layout className="login" style={{ minHeight: '100vh' }}>
        <Form className="login__form" onSubmit={this.handleSubmit}>
          <span className="login__title">
            <p className='login__title__panda'>PANDA</p>
            <p className='login__title__login'>{i18n.t('login.title')}</p>
          </span>
          <div className="login__greeting">{i18n.t('login.greeting_username')}</div>
          <Form.Item
            help={errMessage}
          >
            <Input
              name="username"
              autoFocus
              prefix={<Icon type="user" style={{ color: '#5a5a5a' }} />}
              placeholder="Email or Username"
              onChange={this.onChange}
              value={username}
              className={`login__form__input ${errMessage ? 'login__input__warning' : ''}`}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{i18n.t('button.next')}</Button>
          </Form.Item>
        </Form>
      </Layout>
    )
  }
}

export default withRouter(UsernameLogin);


