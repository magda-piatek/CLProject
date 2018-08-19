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
    this.props.getCategory();
  }
  deleteCategory = (id) => {
    this.props.deleteCategory(id)

  }
  render() {

    return (
      <Category   category={this.props.category} deleteCategory={this.deleteCategory}     formData={this.state}
      onChange={v=>this.setState(v)}
      action={()=>this.props.createCategory(this.state)} />
      );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    category: state.category
  }
};
function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(userAction.getUsers()),
    createCategory: (x) => dispatch(categoryAction.createCategory(x)),
    getCategory:() => dispatch(categoryAction.getCategory()),
    deleteCategory: (id) => dispatch(categoryAction.deleteCategory(id))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
