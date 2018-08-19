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
              {name:'imię', path:'name', },
              {name:'nazwisko', path:'surname', },
              {name:'miasto', path:'address.town', },
              {name:'ulica', path:'address.street', },
              {name:'numer domu', path:'address.houseNo', },
              {name:'kod pocztowy', path:'address.zipCode', },
              {name:'email', path:'email', type:'email'},
              {name:'nr telefonu', path:'phoneNumber', },
              {
                name:'płeć',
                path:'sex', 
                type:'dropdown',
                options:[
                  {label: '', value:''},
                  {label: 'mężczyzna', value:'m'},
                  {label: 'kobirta', value:'f'}
                ],
              },
                  {
                name:'typ',
                path:'type',
                type:'dropdown',
                options:[
                  {label: '', value:''},
                  {label: 'użytkownik', value:'0'},
                  {label: 'serwis', value:'1'}
                ],
              },
              {name:'hasło', path:'password', type:'password'},
              {name:'hasło ponownie', path:'passwordAgain', type:'password'},

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
