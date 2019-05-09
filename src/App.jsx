import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CustomRoute, PrivateRoute } from 'components'
import { Dashboard, EmailLogin, PasswordLogin, CourseDetail } from 'containers'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CustomRoute exact path="/" component={EmailLogin} />
          <CustomRoute exact path="/login" component={PasswordLogin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <CustomRoute exact path="/courses/:id" component={CourseDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
