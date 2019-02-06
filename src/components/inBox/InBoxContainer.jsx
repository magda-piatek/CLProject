import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
import InBox from './InBox';
import messageAction from '../../store/actions/messageAction';
import categoryAction from '../../store/actions/categoryAction';

class InBoxContainer extends Component {
  componentDidMount() {
    this.props.getMessage();
    this.props.getCategory();
  }

  render() {
    const {userById,message,category} = this.props; 
    return (
      <InBox category={category} userById={userById} message={message} />
      );
  }
}

function mapStateToProps(state){
  return {
    message: state.message,
    userById:state.userById,
    category:state.category
  }
};

function mapDispatchToProps(dispatch) {
  return {
    getMessage: () => dispatch(messageAction.getMessage()),
    getCategory:() => dispatch(categoryAction.getCategory())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InBoxContainer);

