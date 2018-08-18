import React, { Component } from 'react';
import ServiceMessageListContainer from '../../components/serviceMessageList/ServiceMessageListContainer';

class TasksPage extends Component {

  render() {
    console.log(this.props.categoriesSelected)
    return (
        <ServiceMessageListContainer />
  )
}
}

export default TasksPage;
