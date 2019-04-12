import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import CustomRoute from './components/privateRoute/customRoute';
import EmailLogin from './containers/Login/EmailLogin';
import PasswordLogin from './containers/Login/PasswordLogin';
import Dashboard from './containers/Dashboard';
import Loading from './components/Loading/Loading';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CustomRoute exact path="/" component={EmailLogin} />
          <CustomRoute exact path="/login" component={PasswordLogin} />
          <CustomRoute exact path="/loading" component={Loading} />
          <CustomRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
