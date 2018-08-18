import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {children,btnLink, ...rest} = this.props;
    return (
      <button className="btn-style" {...rest}>{children}{btnLink}</button>
    );
  }
}
  