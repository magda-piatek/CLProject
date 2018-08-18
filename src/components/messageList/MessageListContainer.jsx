import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import categoryAction from '../../store/actions/categoryAction';
import messageAction from '../../store/actions/messageAction';

class MessageListContainer extends Component {
  constructor (props) {
      super(props)
      this.state = {


    }
  };
  componentDidMount(){
    this.props.getMessage();
  }

  render() {
const {message} = this.props;

    console.log("sss",this.props.userById ? this.props.userById : null)
    return (
        <MessageList message={message} sender={this.props.userById.id} />
    );
  }
}

function mapStateToProps(state){
  return {
   message: state.message,
   userById:state.userById

  }
};
function mapDispatchToProps(dispatch) {
  return {
      getMessage: () => dispatch(messageAction.getMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
