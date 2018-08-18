import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistrationPage from './registration/RegistrationPage';
import LoginPage from './login/LoginPage';
import UserIndex from './user/UserIndex';
import ServiceIndex from './service/ServiceIndex';

import ServicePage from './service/ServicePage';
import CategoryPage from './category/CategoryPage';
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/user/" userType={0} component={UserIndex} />
      <Route path="/service/" userType={1}  component={ServiceIndex} />
      <Route path="/category" component={CategoryPage} />
      </Switch>
      </BrowserRouter>
      );
  }
}

export default Router;