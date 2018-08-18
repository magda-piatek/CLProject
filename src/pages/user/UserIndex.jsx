import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import UserPage from './UserPage';
import PostBoxUserPage from '../postBoxUser/PostBoxUserPage';
import MessagesUserPage from '../messagesUser/MessagesUserPage';
import InBoxUserPage from '../inBoxUser/InBoxUserPage';

class UserIndex extends Component {
  render() {

    const {path} = this.props.match;
    return (
      <div>
      <UserPage>
      <Switch>
    <Route exact path={`${path}postbox/`} component={PostBoxUserPage} />
    <Route exact path={`${path}inbox/`} component={InBoxUserPage} />
    <Route exact path={`${path}messages/`} component={MessagesUserPage} />
    </Switch>
    </UserPage>
    </div>
    );
  }
}

export default UserIndex;
