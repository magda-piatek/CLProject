import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
import InBox from './InBox';
class InBoxContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {
    
const {userById} = this.props; 

    return (
      <InBox userById={userById} />
    );
  }
}
function mapStateToProps(state){
  return {
   userById: state.userById,
  }
};

export default connect(mapStateToProps, null)(InBoxContainer);

