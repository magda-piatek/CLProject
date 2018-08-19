import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
import ModalContainer from '../common/modal/ModalContainer';

class MessageForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal:null

    }
  };
  showModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    })
    )
  }

  render() {
    const {formData,onChange,action} = this.props;
    let category =  this.props.category.map(c=>({ value: c.id, label: c.name}));
    return (
      <div className="outer sendMessageForm">
      <Form
      formData={formData}
      onChange={onChange}
      schema={[
        {name:'dział', path:'category', type:'dropdown',options:
        [{value:'', label:''}].concat(category)},
        {name:'tytuł', path:'title'},
        {name:'wiadomość', path:'message', type:'textarea'},
        ]}
        />
        <button className="btn-style" onClick={()=>{action();this.showModal()}}>Wyślij wiadomość</button>
          <div  className="confirmMessage">
            {this.state.modal!==null ? <ModalContainer  hide={()=>this.setState({modal: null})}>
            <div>Wiadomość wysłana!</div>
            <button  onClick={()=>this.setState({modal: null})} className="btn-style">OK</button>
            </ModalContainer> : null}
          </div>
        </div>
      );
  }
}


export default MessageForm;
