import React, { Component } from 'react';
import TopBarAdminContainer from '../../components/topBarAdmin/TopBarAdminContainer';
import { connect } from 'react-redux';
import categoryAction from '../../store/actions/categoryAction';

class ServicePage extends Component {

  render() {

    return (
      <div>
        <TopBarAdminContainer   />
        <div className="servicePage" style={{padding:'0px'}}>
          {this.props.children}
        </div>
      </div>

      )
  }
}


export default ServicePage;

