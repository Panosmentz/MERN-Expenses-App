import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import Dashboard from "../Dashboard/Dashboard";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import AllTransactions from "../Transactions/AllTransactions";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/transactions" component={AllTransactions} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
