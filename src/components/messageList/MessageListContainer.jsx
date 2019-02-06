import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import categoryAction from '../../store/actions/categoryAction';
import messageAction from '../../store/actions/messageAction';

class MessageListContainer extends Component {
  componentDidMount(){
    this.props.getMessage();
    this.props.getCategory();
  }

  render() {
    const {message,category} = this.props;
    return (
      <MessageList category={category} message={message} sender={this.props.userById.id} />
     );
  }
}

function mapStateToProps(state){
  return {
    message: state.message,
    userById:state.userById,
    category: state.category
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(messageAction.getMessage()),
    getCategory:() => dispatch(categoryAction.getCategory())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
