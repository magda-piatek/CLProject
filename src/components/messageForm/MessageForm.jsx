import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
//import Button from 'components/common/button/Button';

class MessageForm extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {
const {formData,onChange,action} = this.props;
  let category =  this.props.category.map(c=>({ value: c.id, label: c.name}));
    return (
              <div className="outer">
        <Form
          formData={formData}
          onChange={onChange}
          schema={[
        {name:'category', path:'category', type:'dropdown',options:
              [{value:'', label:''}].concat(category)},
            {name:'title', path:'title'},
            {name:'message', path:'message', type:'textarea'},
          ]}
        />
      <button onClick={action}>Wyślij wiadomość</button>
        </div>
    );
  }
}


export default MessageForm;
