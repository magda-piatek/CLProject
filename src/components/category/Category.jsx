import React, { Component } from 'react';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import { Redirect } from 'react-router';
import loginAction from '../../store/actions/loginAction';
import { Link } from 'react-router-dom'
import dotProp from 'dot-prop-immutable';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {redirect:false};
  }
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

  const {t, formData, onChange, action, disabled, errorMessage} = this.props;
  console.log(this.props.user);
  const h = (name)=>this.headerCell(name);
  const b = (name)=>this.bodyCell(name);
  let rows;

  if (this.props.category){
    rows = this.props.category.map(e => (
      <tr key={e.id}>
      {b(e.id)}
      {b(e.name)}
      {b(<button onClick={()=>this.props.deleteCategory(e.id)} className="btn-style btn-style-sm">USUŃ</button>)}

      </tr>))
  } 
  else{
    rows = ''
  }
  return (
      <div className="container category-container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <div className="panel panel-default mt-48" >
              <div className="outer">
                <Form
                formData={formData}
                onChange={onChange}
                schema={[
                {name:'name', path:'name'},
                ]}
                />
                <button className="btn-style" onClick={()=>action()}>DODAJ</button>
              </div>
              <div>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        {h('id')}
                        {h('name')}
                        {h('name')}

                      </tr>
                    </thead>
                    <tbody>
                      {rows}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default (Category);
