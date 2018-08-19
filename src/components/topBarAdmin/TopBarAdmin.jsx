import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Form from '../common/form/Form';
import categoryAction from '../../store/actions/categoryAction';
import { connect } from 'react-redux';

class TopBarAdmin extends Component {

  render() {
    const { t,userName, match,formData,onChange} = this.props;
    let categorySelection;
    if(this.props.category){ 
      categorySelection = this.props.category.map(c=>({ value: c.id, label: c.name}));
    }
    else{
      categorySelection = ''
    }

  return (
      <nav className="navbar navbarTop navbarTopAdmin">
      <div className="container-fluid">
      <div className="navbarTop-block">
      <Link to={`${match.path}`}>WIADOMOŚCI</Link>
      <Link to={`${match.path}usersList`}>LISTA UŻYTKOWNIKÓW</Link>
      <Link to={`${match.path}addCategory`}>DODAJ KATEGORIĘ</Link>
      </div>

      <div className="nav-position">
      {window.location.pathname === "/service/" ? <Form
      formData={formData}
      onChange={onChange}
      schema={[

        {name:'kategoria', path:'categoriesSelected', type:'dropdown',options:
        [{value:'', label:''}].concat(categorySelection)},
        ]}
        /> : null}
        <div className="navbarTop-block__user">
        użytkownik:
        <span className="user">{" "+userName ? userName : ''}</span>

        </div>
        <Link to='/' onClick={this.props.logout} className="navbarTop-block__logout">
        <i className="flaticon-arrow white"></i>
       WYLOGUJ SIĘ
        </Link>
        </div>
        </div>
        </nav>
        );
  }
}

function mapStateToProps(state) {
  return {
    categorySelected: state.categorySelected,


  };
}



export default withRouter(connect(mapStateToProps, null)(TopBarAdmin));
