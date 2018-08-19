import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';
import ListOfUsers from './ListOfUsers';

class ListOfUsersContainerContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      filtered:false,
    };
    this.filterList = this.filterList.bind(this);
  } 

  componentDidMount(){
    this.props.getUsers();
  }
  handleChangeMethod = (event)=>{
    this.setState({
      name: event.target.value,
      filtered:true
    })
  }
    filterList(user){
    console.log(user)
    const { filter } = this.props;
    if (!filter) {
      return user;
    }
    return filter(user);
  }
  render() {
    const {user} = this.props;
    return (
      <ListOfUsers value={this.state.name}  user={this.filterList(user)} onChange={this.handleChangeMethod}/>
    );
  }
}

function mapStateToProps(state) {
  return {
   user: state.user,
  };
}

function mapDispatchToProps(dispatch){
  return {
    getUsers : () =>dispatch(userAction.getUsers())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsersContainerContainer);
