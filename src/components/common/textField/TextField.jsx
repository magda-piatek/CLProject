import classnames from 'classnames';
import React, { Component } from 'react';

class TextField extends Component  {


  render(){
    const {onChange,checkUserExists,value,type,field,error,label} = this.props;
  return (
    <div>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}
}

// TextField.propTypes = {
//   field: React.PropTypes.string.isRequired,
//   value: React.PropTypes.string.isRequired,
//   label: React.PropTypes.string.isRequired,
//   error: React.PropTypes.string,
//   type: React.PropTypes.string.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   checkUserExists: React.PropTypes.func
// }

// TextField.defaultProps = {
//   type: 'text'
// }

export default TextField;