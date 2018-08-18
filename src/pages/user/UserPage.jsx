import React, { Component } from 'react';
import UserContainer from '../../components/user/UserContainer';
import SideBarUserContainer from '../../components/sideBar/SideBarUserContainer';
import TopBarUserContainer from '../../components/topBarUser/TopBarUserContainer';
import userAction from '../../store/actions/userAction';
import { connect } from 'react-redux';

class UserPage extends Component {

  render() {

    return (

      <div>
      <TopBarUserContainer  />

      <div className="userPage" style={{padding:'0px'}}>
      <SideBarUserContainer />

      <div className="content-holder">
      {this.props.children}
      </div>
      </div>
      </div>
      )
  }
}


export default UserPage;
