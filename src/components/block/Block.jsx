import React, { Component } from 'react';

class Block extends Component {
  constructor (props) {
      super(props)
      this.state = {

    }
  };

  render() {

    return (
    <div className="block">
      <div className="messageTitle">{this.props.title}</div>

    </div>
    );
  }
}




export default Block;
