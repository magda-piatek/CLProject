import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceMessageListContainer from '../serviceMessageList/ServiceMessageListContainer';

class ServiceContainer extends Component {
  render() {
    return (
        <ServiceMessageListContainer />
    );
  }
}


export default ServiceContainer;
