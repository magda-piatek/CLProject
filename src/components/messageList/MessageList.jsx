import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../common/form/Form';

class MessageList extends Component {
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
   

   changeName = (name) =>{
        if(name === "wip"){
          name = 'oczekiwanie'
        }
        else if(name === "inProgess"){
          name = 'w trakcie'
        }
        else{
          name = 'zakończone'
        }
      
      return name;
  }

  render() {
    const h = (name)=>this.headerCell(name);
    const b = (name)=>this.bodyCell(name);
    console.log(this.props.category)
    let messages;
       if (this.props.message && this.props.category){
          messages = this.props.message.filter(el => el.sender === this.props.sender).map(e => (
      <tr key={e.id}>
      {b(e.title)}
      {b(e.message)}
      {b((this.props.category.find(el => el.id == e.category)||{}).name)}

      {b(this.changeName(e.state))}

      </tr>))
        } 
        else{
          messages = ''
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
            {h('stan')}
          </tr>
          </thead>
            <tbody>
              {messages}
            </tbody>
          </table>
        </div>
      </div>
      );
  }
}


export default MessageList;
