import React, { Component } from 'react';
import TopBarAdminContainer from '../../components/topBarAdmin/TopBarAdminContainer';
import { connect } from 'react-redux';
import categoryAction from '../../store/actions/categoryAction';

class ServicePage extends Component {

  // renderChildren() {
  //   return React.Children.map(this.props.children, child => {

  //     return React.cloneElement(child, {
  //       categoriesSelected: this.state.categoriesSelected
  //     })

  //   })
  // }
  render() {


    return (

      <div>
      <TopBarAdminContainer   />
      <div className="userPage" style={{padding:'0px'}}>

      {this.props.children}
      </div>
      </div>

      )
  }
}

function mapStateToProps(state) {
  return {


  };
}

function mapDispatchToProps(dispatch){
  return {
    categorySelect : (x) =>dispatch(categoryAction.categorySelect(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);

