import { Route, Redirect } from 'react-router-dom';
import React from 'react';

async function checkToken() {
  let token = localStorage.getItem("accessToken");
  if (token === null) return true;
  return false;
}

const CustomRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => checkToken() ? (
      <Component {...props} />
    ) : (<Redirect
      to={{
        pathname: "/",
        state: { from: props.location }
      }}
    />)
    }
  />
);

export default CustomRouter;
