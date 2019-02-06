import React, { Component } from 'react';
import LabeledInput from '../input/LabeledInput';
import dotProp from 'dot-prop-immutable';

class Form extends Component {
  constructor(props){
    super(props);
    this.generateInput=this.generateInput.bind(this);
  }

  render(){
    return this.props.schema.map(this.generateInput);
  }

  generateInput(s){
    const { onChange, formData } = this.props;
    const { path , ...rest} = s;
    return  <LabeledInput
              {...rest}
              key={path}
              value={dotProp.get(formData, path)}
              onChange={v=>onChange(dotProp.set(formData, s.path, v))}
            />
      }
}

export default Form; 
