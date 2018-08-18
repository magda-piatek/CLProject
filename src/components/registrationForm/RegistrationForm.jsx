import React, { Component } from 'react';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import { Redirect } from 'react-router';
import registrationAction from '../../store/actions/registrationAction';

class RegistrationForm extends Component {
  constructor(props){ 
    super(props);
    this.state = {redirect:false};
  }
  render() { //TODO verify passwords match

    const {t, formData, onChange, action, disabled, errorMessage} = this.props;
    return (
      <div className="registrationPage">
      <div className="panel panel-default" >
      <div className="outer">
        <Form
          formData={formData}
          onChange={onChange}
          schema={[
            {name:'name', path:'name', },
            {name:'surname', path:'surname', },
            {name:'town', path:'address.town', },
            {name:'street', path:'address.street', },
            {name:'houseNo', path:'address.houseNo', },
            {name:'zipCode', path:'address.zipCode', },
            {name:'email', path:'email', type:'email'},
            {name:'phoneNumber', path:'phoneNumber', },
        //    {name:'dateOfBirth', path:'birthDate', type:'date'},
            {
              name:'sex',
              path:'sex', 
              type:'dropdown',
              options:[
                {label: '', value:''},
                {label: 'male', value:'m'},
                {label: 'female', value:'f'}
              ],
            },
                {
              name:'type',
              path:'type',
              type:'dropdown',
              options:[
                {label: '', value:''},
                {label: 'user', value:'0'},
                {label: 'service', value:'1'}
              ],
            },
            {name:'password', path:'password', type:'password'},
            {name:'passwordAgain', path:'passwordAgain', type:'password'},

          ]}
        />
      <Button onClick={()=>action()}>Zarejestruj się</Button>
        </div>
      </div>
      </div>
      );
  }
}

export default (RegistrationForm);
