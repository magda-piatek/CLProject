import React, { Component } from 'react';
import Modal from './Modal';

class ModalContainer extends Component {
  render() {
  const {id, children, btnText, header, hide} = this.props;
    return (
      <Modal
        btnText={btnText}
        header={header}
        id={id}
        hide={hide}>
        {children}
      </Modal>
      );
  }
}


export default ModalContainer;
 