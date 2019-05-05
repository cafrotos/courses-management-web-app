import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CustomRoute, PrivateRoute, CreateCourses } from 'components'
import { Dashboard, EmailLogin, PasswordLogin } from 'containers'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CustomRoute exact path="/" component={EmailLogin} />
          <CustomRoute exact path="/login" component={PasswordLogin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
