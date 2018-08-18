import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Form from '../common/form/Form';

class TopBarUser extends Component {
  render() {

    const { t,userName, match,formData,onChange} = this.props;

    return (
      <nav className="navbar navbarTop">
        <div className="navbarTop-block">

          <div className="navbarTop-block__user">
          user
            <span className="user">{" "+userName}</span>

          </div>
          <Link to='/' onClick={this.props.logout} className="navbarTop-block__logout">
            <i className="flaticon-arrow white"></i>
          logOut
          </Link>
        </div>
      </nav>
      );
  }
}

export default TopBarUser;
