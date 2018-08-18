import React, { Component } from 'react';
import Input from './Input';


class LabeledInput extends Component {

  render() {
    const {name, ...rest} = this.props;
    return (
      <label className="label-style">
        {name}
        <Input key={this.props.key} value={this.props.value} {...rest} /> 
      </label>

    );
  }
}

export default LabeledInput;
