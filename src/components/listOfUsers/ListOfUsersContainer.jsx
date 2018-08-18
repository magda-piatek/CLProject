import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';
import ListOfUsers from './ListOfUsers';

class ListOfUsersContainerContainer extends Component {
  // componentDidMount(){
  //   this.props.getUsers();

  // }

  render() {

    return (
      <ListOfUsers />
    );
  }
}

function mapStateToProps(state) {
  return {
   user: state.user,
   userById:state.userById,

  };
}

function mapDispatchToProps(dispatch){
  return {
    getUsers : () =>dispatch(userAction.getUsers())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsersContainerContainer);
