import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBarUser from './TopBarUser';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';
import { Redirect } from 'react-router-dom';


class TopBarUserContainer extends Component {
  componentDidMount(){
    this.props.getUsers();

  }

  render() {
    console.log(this.props.userById)
    const {user,...rest} = this.props;
    if(!user){
          return <Redirect to='/'/>
    }
    return (
      <TopBarUser  user={this.props.user} userSurname={this.props.userById.surname} userName={this.props.userById.name} logout={this.props.logoutAction} {...rest}/>
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
    logoutAction: ()=>dispatch(logoutAction()),
    getUsers : () =>dispatch(userAction.getUsers())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarUserContainer);
