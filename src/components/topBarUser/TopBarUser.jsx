import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Form from '../common/form/Form';

class TopBarUser extends Component {
  render() {

    const { t,userName, match,formData,onChange,userSurname} = this.props;

    return (
      <nav className="navbar navbarTop">
        <div className="navbarTop-block">
          <div className="navbarTop-block__user">
          użytkownik:  
            <span className="user">{userName  ? userName + " " + userSurname : null}</span>
          </div>
          <Link to='/' onClick={this.props.logout} className="navbarTop-block__logout">
            <i className="flaticon-arrow white"></i>
          WYLOGUJ SIĘ
          </Link>
        </div>
      </nav>
      );
  }
}

export default TopBarUser;
