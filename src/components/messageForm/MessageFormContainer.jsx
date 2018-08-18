import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import categoryAction from '../../store/actions/categoryAction';
import messageAction from '../../store/actions/messageAction';

class MessageFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category:'',
      title:'',
      message:'',
      sender:this.props.userById.id,
      state:'wip'

    }
  };
  componentDidMount() {
    this.props.getCategory();
  }


 render() {
    const {category, userId} = this.props;
    console.log(this.props.userById.id)
    return (
      <MessageForm category={category} action={()=>this.props.sendMessage(this.state)} formData={this.state} onChange={s=>this.setState(s)} />
      );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    category:state.category,
    userById:state.userById

  }
};
function mapDispatchToProps(dispatch) {
  return {
    getCategory: () => dispatch(categoryAction.getCategory()),
    sendMessage: (r) => dispatch(messageAction.sendMessage(r))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageFormContainer);
