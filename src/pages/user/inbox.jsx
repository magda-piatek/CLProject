import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import UserPage from './UserPage';


class UserIndex extends Component {
  render() {
    return (
      <div>
      <UserPage>
        <Switch>
          <Route exact path={`/user`} component={UserPage} />
{/*          <Route exact path={`/service`} component={ServiceDetailPage} />*/}

        </Switch>
      </UserPage>
      </div>
    );
  }
}

export default UserIndex;
