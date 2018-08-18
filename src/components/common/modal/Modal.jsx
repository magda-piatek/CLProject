import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { header, children, hide } = this.props;
    return (
      <div className="custom-modal-dialog">
        <div className="custom-modal-content">
          <span className="close" onClick={hide} aria-hidden="true">&times;</span>
          <div className="custom-modal-header">
            <span>{header}</span>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
