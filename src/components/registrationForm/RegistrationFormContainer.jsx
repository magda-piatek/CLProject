import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import registrationAction from '../../store/actions/registrationAction';
import moment from 'moment';
import categoryAction from '../../store/actions/categoryAction';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class RegistrationFormContainer extends Component {
  componentDidMount(){
    this.props.getCategory();
  }
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      address:{
        town: '', 
        street: '',
        houseNo: '',
        zipCode: '',
      },
      email: '',
      phoneNumber: '',
      sex: '',
      password: '',
      passwordAgain: '',
      type:'',
  }
};

register = (data) => {
  const isEmpty = Object.values(this.state).some(x => (x === null || x === ''));
    if (!isEmpty && this.state.password === this.state.passwordAgain){
      this.props.registration(this.state);
      this.props.history.push('/');
  }
}


render() {
  const {registration,category} = this.props;
  const {password, passwordAgain} = this.state;
    return (
        <RegistrationForm
        formData={this.state} category={category}
        onChange={v=>this.setState(v)}
        action={this.register} />
      );
  }
}

function mapStateToProps(state){
  return {
    category:state.category
  }
};

function mapDispatchToProps(dispatch) {
  return {
    registration: (registrationInfo) => dispatch(registrationAction(registrationInfo)),
    getCategory: () => dispatch(categoryAction.getCategory())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationFormContainer));
