import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import MessageFormContainer from '../messageForm/MessageFormContainer';
import MessageListContainer from '../messageList/MessageListContainer';

import messageAction from '../../store/actions/messageAction';

class UserContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {
const {userId} = this.props;
    return (
      <div>
        <MessageFormContainer userId={userId} />
        <MessageListContainer />
        </div>
    );
  }
}


export default UserContainer;
