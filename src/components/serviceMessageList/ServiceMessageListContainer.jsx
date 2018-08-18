import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceMessageList from './ServiceMessageList';
import messageAction from '../../store/actions/messageAction';
import userAction from '../../store/actions/userAction';

class ServiceMessageListContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {
        messageToUser:''

    }
  };
  componentDidMount(){
    this.props.getMessage();
    this.props.getUsers();
  } 
sendMessageToUser = (userId) => {
  const previousMessages = this.props.user.find(el => el.id === userId).inBox;
this.props.sendMessageToUser(userId,[...previousMessages, this.state.messageToUser])
 console.log(userId,this.state.messageToUser)
}
  changed = (e,a) => {
    console.log(e,a)
   this.props.updateCategory(e,a)
  }
  render() {
    const {message,user,userById} = this.props;
 console.log("se;",this.props.categoriesSelected)
    return (
        <ServiceMessageList sendMessageToUser={this.sendMessageToUser} onChange={v=>this.setState(v)} formData={this.state} userById={userById} user={user} changed={this.changed} message={message}/>
    );
  }
}

function mapStateToProps(state){
  return {
   message: state.message,
   user: state.user,
   userById:state.userById
  } 
};
function mapDispatchToProps(dispatch) {
  return {
      getMessage: () => dispatch(messageAction.getMessage()),
      updateCategory: (s,a) => dispatch(messageAction.updateCategory(s,a)),
      getUsers: () => dispatch(userAction.getUsers()),
      sendMessageToUser: (userId,message) => dispatch(userAction.sendMessageToUser(userId,message))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceMessageListContainer);
