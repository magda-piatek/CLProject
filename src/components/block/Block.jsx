import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
    <div className="block">
      <div className="messageTitle">{this.props.title}</div>
    </div>
    );
  }
}


export default Block;
