import React, { Component } from 'react';
import { connect } from 'react-redux';
import categoryAction from '../../store/actions/categoryAction';

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
    this.props.getCategory();

  } 
  sendMessageToUser = (userId) => {
    console.log(this.state.messageToUser)
    this.props.sendMessageToUser(userId,this.state.messageToUser)
  }
  changed = (e,a) => {
    console.log(e,a)
    this.props.updateCategory(e,a)
  }
  deleteMessage = (id) =>{
    this.props.deleteMessage(id);
  }
  render() {
    const {message,user,userById,category} = this.props;
    console.log("se;",this.props.categoriesSelected)
    return (
      <ServiceMessageList category={category} sendMessageToUser={this.sendMessageToUser} 
      onChange={v=>this.setState(v)} formData={this.state} userById={userById} user={user} 
      changed={this.changed} message={message} deleteMessage={this.deleteMessage} />
      );
  }
}

function mapStateToProps(state){
  return {
   message: state.message,
   user: state.user,
   userById:state.userById,
   category:state.category
 } 
};

function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(messageAction.getMessage()),
    updateCategory: (s,a) => dispatch(messageAction.updateCategory(s,a)),
    getUsers: () => dispatch(userAction.getUsers()),
    sendMessageToUser: (messageId,message) => dispatch(userAction.sendMessageToUser(messageId,message)),
    getCategory:() => dispatch(categoryAction.getCategory()),
    deleteMessage: (id) => dispatch(messageAction.deleteMessage(id)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceMessageListContainer);
