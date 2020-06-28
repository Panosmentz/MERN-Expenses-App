import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (isAuthenticated === true) {
    return <Route {...props} />;
  } else if (isAuthenticated === false) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location },
        }}
      />
    );
  }
};

export default PrivateRoute;
