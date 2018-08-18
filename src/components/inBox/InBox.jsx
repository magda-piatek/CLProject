import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
//import Button from 'components/common/button/Button';

class InBox extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {
    let inBox;
    if (this.props.userById){
      inBox = this.props.userById.inBox.map(el => <div>{el}</div>)
    }
    else{
      inBox = ''
    }

    return (
      <div>{inBox}</div>
    );
  }
}


export default InBox;
