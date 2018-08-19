import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';
//import Button from 'components/common/button/Button';

class InBox extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  };

  headerCell(name){
    return (<th>
      {name}
      </th>);
  }

  bodyCell(value){
    return (<td>
      {value}
      </td>);
  }
  render() {
    const h = (name)=>this.headerCell(name);
    const b = (name)=>this.bodyCell(name);
    console.log(this.props.category)
    let inBox;
    if(this.props.message){

      inBox = this.props.message.filter(e => e.sender == this.props.userById.id).map(e => (
        <tr key={e.id}>
        {b(e.title)}
        {b(e.messageReceived)}
        {b((this.props.category.find(el => el.id == e.category)||{}).name)}


        </tr>))
    }
    else{
      inBox = ''
    }

    return (
      <div className="messageList">
        <div className="table-responsive">
          <table>
          <thead>
          <tr>
            {h('tytuł')}
            {h('wiadomość')}
            {h('kategoria')}
          </tr>
          </thead>
            <tbody>
              {inBox}
            </tbody>
          </table>
        </div>
      </div>
      );
  }
}


export default InBox;
