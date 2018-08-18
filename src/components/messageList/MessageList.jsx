import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
//import Button from 'components/common/button/Button';

class MessageList extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {
    console.log("user",this.props.sender)
let messages;
  this.props.message ?  messages =   this.props.message.filter(el => el.sender == this.props.sender).map(el => <div>{el.title}<span>{el.category}</span></div>) : messages='';
    return (
      <div>
      <p>
        YOUR MESSAGES
      </p>
      {messages}
      </div>
    );
  }
}


export default MessageList;
