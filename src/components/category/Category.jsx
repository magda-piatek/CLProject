import React, { Component } from 'react';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import { Redirect } from 'react-router';
import loginAction from '../../store/actions/loginAction';
import { Link } from 'react-router-dom'
import dotProp from 'dot-prop-immutable';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {redirect:false};
  }

render() { //TODO verify passwords match

  const {t, formData, onChange, action, disabled, errorMessage} = this.props;
  console.log(this.props.user);


  return (
    <div className="panel panel-default" >
    <div className="outer">
    <Form
    formData={formData}
    onChange={onChange}
    schema={[
      {name:'name', path:'name'},

      ]}
      />
      <Button onClick={()=>action()} disabled={disabled}>Zarejestruj się</Button>
      </div>



      </div>
      );
}
}

export default (Category);
