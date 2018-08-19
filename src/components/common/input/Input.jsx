import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Textarea from '../textarea/Textarea';

class Input extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const {type,onChange, options, validation, ...rest} = this.props;
    let input;

  if (type === "dropdown"){
    input =
      <select className="input-style" onChange={this.handleChange} {...rest}>
        {options.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
  }
  else if (type === "email"){
    input = <input className="input-style" type={type||'text'} onChange={this.handleChange} {...rest}/>
  }
  else if (type === "textarea"){
    input = <Textarea className="textarea" onChange={this.handleChange} {...rest}/> 
  }
  else{
    input = <input className="input-style" type={type||'text'} onChange={this.handleChange} {...rest}/>
  }
  return input;
}

  handleChange(e){
    const newValue = e.target.value;
    const {onChange, validation} = this.props;
    if (!validation || validation(newValue)) {
      onChange(newValue);
    }
  }
}

export default Input;
