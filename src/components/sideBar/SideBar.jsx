import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    const { t, match } = this.props;

    const menu =  this.props.links.map((e,index) => 
      <li 
      onClick={this.props.display} 
      key={index}
      >
        <Link to={`${match.path}${e.linkTo}`}><i className={e.icon}></i>{e.title}</Link>
      </li>)

    return (
      <nav className="sidebar">
        <div className="sidebar__title">
          <Link to={`/`}>WORK SERVICE</Link> 
        </div>
      <div className="sidebar__menu">
      MEMU
      </div>
        <ul>
          {menu}
        </ul>
      </nav>
      );
  }
}

export default withRouter(SideBar)
