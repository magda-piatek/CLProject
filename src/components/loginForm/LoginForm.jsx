import React, { Component } from 'react';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import { Redirect } from 'react-router';
import loginAction from '../../store/actions/loginAction';
import { Link } from 'react-router-dom'
import dotProp from 'dot-prop-immutable';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {redirect:false};
  }

render() {

  const {t, formData, onChange, action, disabled, errorMessage} = this.props;

  return (
    <div className="loginPage">
      <div className="panel panel-default" >
        <div className="outer">
          <Form
          formData={formData}
          onChange={onChange}
          schema={[
            {name:'email', path:'email', type:'email'},
            {name:'hasło', path:'password', type:'password'},
            ]}
            />
            <div className="mt-24">
          <Button onClick={()=>action()}>ZALOGUJ SIĘ</Button>
          </div>
            <div className="center mt-12">
              <Link className="btn-style btn-style-sm" to="/registration">ZAREJESTRUJ SIĘ</Link>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

export default (LoginForm);
