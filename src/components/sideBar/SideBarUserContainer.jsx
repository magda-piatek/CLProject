import React, { Component } from 'react';
import SideBar from './SideBar'
import MediaQuery from "react-responsive";

class SideBarContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      display:false,
      color:'grey',
      links: [
      {
        linkTo:'postbox/',
        icon: 'flaticon-add',
        title: 'WYŚLIJ WIADOMOŚĆ',
      },

      {
        linkTo:'inbox',
        icon: 'flaticon-calendar',
        title: 'SKRZYNKA ODBIORCZA',
      },
      {
        linkTo:'messages',
        icon: 'flaticon-group',
        title: 'TWOJE WIADOMOŚCI',
      }

      ]
    }
  }

  render() {
    let hamburger;
    hamburger =  <span style={{color:this.state.color,zIndex:'20',cursor: 'pointer',position:'absolute',top:'20px',left:'20px'}}
    onClick={this.display} className="glyphicon glyphicon-align-justify"></span>;

    return (
      <div className="sidebar-outer">
        <MediaQuery  query="(max-width: 575px)">
          {hamburger}
          {this.state.display ? <SideBar display={this.display} links={this.state.links} /> : null}
        </MediaQuery>
        <MediaQuery  query="(min-width: 576px)">
          <SideBar display={this.display} links={this.state.links} />
        </MediaQuery>
      </div>
      );
  }

  display = () => {
    this.setState(prevState => ({
      display: !prevState.display,
      color: prevState.color === 'grey' ? 'white' : 'grey'
    }))
  }

}


export default SideBarContainer;
