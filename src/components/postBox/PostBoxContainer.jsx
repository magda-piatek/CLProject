import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostBox from './PostBox';
import categoryAction from '../../store/actions/categoryAction';
import messageAction from '../../store/actions/messageAction';

class PostBoxContainer extends Component {
  render() {
console.log(this.props.userId)
    return (
        <MessageFormContainer />
    );
  }
}



export default PostBoxContainer;
