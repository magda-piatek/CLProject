import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ServicePage from './ServicePage';
import TasksPage from '../tasks/TasksPage';
import CategoryPage from '../category/CategoryPage';
import ListOfUsersPage from '../listOfUsers/ListOfUsersPage';
class ServiceIndex extends Component {
  render() {

    const {path} = this.props.match;
    return (
      <div>
        <ServicePage>
          <Switch>
            <Route exact path={`${path}/`} component={TasksPage} />
            <Route exact path={`${path}usersList`} component={ListOfUsersPage} />
            <Route exact path={`${path}addCategory`} component={CategoryPage} />
          </Switch>
        </ServicePage>
      </div>
      );
  }
}

export default ServiceIndex;
