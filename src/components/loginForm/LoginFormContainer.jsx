import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import usersAction from '../../store/actions/userAction';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

class LoginFormContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {
      email: '',
      password: '',
      type: null,
      userId:null
    }
  };

  componentDidMount() {
    this.props.getUsers();
  }
  
  componentDidUpdate(prevProps, prevState){
      if (prevState.userId !== this.state.userId){
      this.props.currentUser(this.state.userId)
    }
  }
  check() {
    const user = this.props.user.find(el => el.email === this.state.email && el.password === this.state.password); 
    if(user) {
      this.setState({type:user.type,userId:user.id}) 
    }
  }

  render() {
    const {registration} = this.props;
    const {password, passwordAgain} = this.state;
           switch (this.state.type) {
      case '0':
          return <Redirect to='/user/'/>
      case '1':
          return <Redirect to='/service/'/>
   }
    
    return (
      <div>
      <LoginForm
        formData={this.state}
        onChange={v=>this.setState(v)}
        action={()=>this.check()} />
        </div>
    );
  } 
}

function mapStateToProps(state){
  return {
   user: state.user,
  }
};

function mapDispatchToProps(dispatch) {
  return {
      getUsers: () => dispatch(usersAction.getUsers()),
      currentUser : (id) => dispatch(usersAction.currentUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
