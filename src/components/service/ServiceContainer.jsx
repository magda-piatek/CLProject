import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceMessageListContainer from '../serviceMessageList/ServiceMessageListContainer';

class ServiceContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {

    return (
        <ServiceMessageListContainer />
    );
  }
}


export default ServiceContainer;
