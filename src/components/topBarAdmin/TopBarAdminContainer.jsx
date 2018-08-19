import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBarAdmin from './TopBarAdmin';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';
import { Redirect } from 'react-router-dom';

import categoryAction from '../../store/actions/categoryAction';

class TopBarAdminContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesSelected:''
    }

  };

  componentDidMount(){
    this.props.getUsers();
    this.props.getCategory();

  }
  handle = (e) => {
    this.props.categorySelect(e);
    this.setState(e)
  }

  render() {

    const {userById,onChange,formData,user} = this.props;
    if(!user){
      return <Redirect to='/'/>
    }
    return (
      <TopBarAdmin selected={this.state.categoriesSelected} onChange={this.handle} formData={this.state} userById={userById} 
      category={this.props.category} user={this.props.user} userName={this.props.userById.name} logout={this.props.logoutAction} />
      );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userById:state.userById,
    category:state.category

  };
}

function mapDispatchToProps(dispatch){
  return {
    logoutAction: ()=>dispatch(logoutAction()),
    getUsers : () =>dispatch(userAction.getUsers()),
    getCategory: () => dispatch(categoryAction.getCategory()),
    categorySelect : (x)=>dispatch(categoryAction.categorySelect(x))


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarAdminContainer);
