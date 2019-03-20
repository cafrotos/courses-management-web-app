import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button } from 'antd';
// import { setItem } from '../../utils/localStorage';
import { getAccessToken, getAppConfig } from './api/authenticate';
import i18n from '../../utils/i18n';

class PasswordLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem("username"),
      password: '',
      errMessage: '',
      isLogin: localStorage.getItem('accessToken') ? true : false,
      isClientKey: true
    }
  }

  componentDidMount = () => {
    this.fetchingAppConfig();
    if (!localStorage.getItem('clientKey')) {
      this.setState({ isClientKey: false })
    }
    window.addEventListener('popstate', () => {
      this.props.history.push('/login');
    })
  }

  fetchingAppConfig= async() => {
    const response = await getAppConfig();
    if (response.httpCode === 200) {
      const appConfig = JSON.stringify(response.result);
      localStorage.setItem('appConfig', appConfig)
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { password, username } = this.state;
    if (!password) {
      this.setState({ errMessage: i18n.t('login.invalid_password') });
    } else {
      const response = await getAccessToken({ username, password, grant_type: 'password' });
      if (response.httpCode === 200) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('expiresAt', response.accessTokenExpiresAt);
        this.setState({ errMessage: '', isLogin: true });
      } else {
        this.setState({ errMessage: i18n.t('login.not_match') });
      }
    }
  }

  handleUseAnotherAccount = () => {
    window.localStorage.clear();
    window.location.reload();
  }

  onChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { errMessage, password, username, isLogin, isClientKey } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/tasks' } };
    if (!isClientKey) {
      return (<Redirect to='/login' />)
    }

    if (isLogin && isClientKey) {
      return (<Redirect to={from} />)
    }

    return (
      <Layout className="login" style={{minHeight: '100vh' }}>
        <Form className="login__form" onSubmit={this.handleSubmit}>
          <span className="login__title">
            <p className='login__title__panda'>PANDA</p>
            <p className='login__title__login'>Log in</p>
          </span>
          <div className="login__greeting">
            Hi <span className="login__greeting__hi">@{username}</span>
          </div>
          <div className="login__greeting__please">
            {i18n.t('login.greeting_password')}
          </div>
          <Form.Item
            help={errMessage}
          >
            <Input
              autoFocus
              name="password"
              prefix={<Icon type="key" style={{ color: '#5a5a5a' }} />}
              type="password"
              placeholder="Password"
              onChange={this.onChange}
              value={password}
              className={`login__form__input ${errMessage ? 'login__input__warning' : ''}`}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {i18n.t('button.next')}
            </Button>
          </Form.Item>
          <div className="login-another-account" onClick={this.handleUseAnotherAccount}>
            {i18n.t('login.another_account')}
          </div>
        </Form>
      </Layout >
    )
  }
}

export default withRouter(PasswordLogin);


