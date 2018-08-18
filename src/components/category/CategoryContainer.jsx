import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import userAction from '../../store/actions/userAction';
import addCategoryAction from '../../store/actions/categoryAction';
import categoryAction from '../../store/actions/categoryAction';

class CategoryContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {
        name:'',

    }
  };
  componentDidMount() {
    this.props.getUsers();
  }
  render() {

    return (
        <Category         formData={this.state}
        onChange={v=>this.setState(v)}
        action={()=>this.props.createCategory(this.state)} />
    );
  }
}

function mapStateToProps(state){
  return {
   user: state.user,
  }
};
function mapDispatchToProps(dispatch) {
  return {
      getUsers: () => dispatch(userAction.getUsers()),
            createCategory: (x) => dispatch(categoryAction.createCategory(x))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
