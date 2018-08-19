import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoutAction from '../../store/actions/logoutAction';
import userAction from '../../store/actions/userAction';
import SearchBlock from '../searchBlock/SearchBlock';
class ListOfUsers extends Component {

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

    handleChange(e){
    this.props.onChange(e);
  };

  render() {
    const h = (name)=>this.headerCell(name);
    const b = (name)=>this.bodyCell(name);
    const {user} = this.props;
    let rows;
    if(user){
    rows = user.filter(
      e =>
      `${e.name} ${e.surname}`
      .toLowerCase()
      .startsWith(this.props.value.toLowerCase())
      ||
      e.surname
      .toLowerCase()
      .startsWith(this.props.value.toLowerCase())).map(e => (
      <tr key={e.id}>
        {b(e.id)}
        {b(e.name)}
        {b(e.surname)}
        {b(e.email)}
        {b(e.phoneNumber)}
        {b(`${e.address.street} ${e.address.houseNo}, ${e.address.town}, ${e.address.zipCode}`,e.pk)}
        {b(e.sex)}
      </tr>));
    }

    return (
      <div className="container">
        <SearchBlock onChange={e=>this.handleChange(e)} />
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                {h('id')}
                {h('name')}
                {h('surname')}
                {h('email')}
                {h('phoneNumber')}
                {h('address')}
                {h('sex')}
              </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
          </table>
        </div>
      </div>
      );
  }
}



export default ListOfUsers;