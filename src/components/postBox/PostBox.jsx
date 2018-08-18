import React, { Component } from 'react';
import { connect } from 'react-redux';
import categoryAction from '../../store/actions/categoryAction';
import messageAction from '../../store/actions/messageAction';

class PostBox extends Component {
  constructor (props) {
      super(props)
      this.state = {


    }
  };
  componentDidMount(){
    this.props.getMessage();
  }

  render() {
const {message} = this.props;
    return (
       <div>kdk</div>
    );
  }
}


export default PostBox;
