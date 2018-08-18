import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBarUser from './TopBarUser';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';


class TopBarUserContainer extends Component {
  componentDidMount(){
    this.props.getUsers();

  }

  render() {
    console.log(this.props.userById)
    const {...rest} = this.props;
    return (
      <TopBarUser  user={this.props.user} userName={this.props.userById.name} logout={this.props.logoutAction} {...rest}/>
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
