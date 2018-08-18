import React, { Component } from 'react';
import ModalContainer from '../common/modal/ModalContainer';
import Form from '../common/form/Form';
import { connect } from 'react-redux';

class AppDragDropDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks:'',
      showModal:null
    }

  };


  componentDidUpdate(prevProps){
    if (prevProps.message!==this.props.message) {
      this.setState({tasks:this.props.message});
    }
  }
  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.id == id) {
        task.state = cat;
      }
      return task;
    });

    this.setState({
      tasks:tasks
    });

    this.props.changed(id,cat)
  }

  show = (id) => {
    console.log(id)
    this.setState(prevState => ({
      showModal: prevState.showModal===null ? id : null,
    })
    )
  }
//<div>{this.props.user.find(u => u.id === el.sender).name}</div>
render() {
  this.props.categorySelected ? console.log(this.props.categorySelected.categoriesSelected) : null

  this.state.showModal!==null ?    console.log(this.props.user.filter(el => el.id === this.state.showModal)) : null


  let modalContent;
  let m;
  const {formData,onChange} = this.props;
  this.state.showModal!==null && this.props.user ?  m =<ModalContainer  hide={()=>this.setState({showModal: null})}> 

  {this.state.tasks.filter(el => el.id==this.state.showModal).map(el=><div>
    <div>{el.title}</div>
    <div>{el.message}</div>
    <div>{el.sender}</div>
    <div>
    <Form
    formData={formData}
    onChange={onChange}
    schema={[
      {name:'message', path:'messageToUser', type:'textbox'},
      ]}
      />
      <button className="btn-style btn-style-sm" onClick={()=>this.props.sendMessageToUser(el.sender)}>SEND</button>
      </div>
      </div> )}</ModalContainer> : null;

  this.state.tasks ?   modalContent =   this.state.tasks.filter(el => el.id == this.state.showModal) : null;
  console.log(modalContent)
  var tasks = {
    wip: [],
    inProgess:[],
    complete: []
  }

  let modal = <div>ls</div>

  this.state.tasks ?      this.state.tasks.filter(el => el.category == this.props.categorySelected.categoriesSelected).forEach ((t) => {
    tasks[t.state].push(
      <div key={t.id} 
      onDragStart = {(e) => this.onDragStart(e, t.id)}
      draggable
      className="draggable"
      style = {{backgroundColor: t.bgcolor}}
      >

      <div> <span className="title-sm">TITLE: </span>{t.title}</div>
      <div> <span className="title-sm">category: </span>{t.category}</div>
{/*    <div className="mb-12"><span className="title-sm">SENDER: </span>{this.props.user.find(el => el.id === t.sender).name}</div>
*/}    <a className="btn-style" onClick={()=>this.show(t.id)}>MORE DETAILS</a>
</div>
);
  }) : null;
  console.log(this.state)
  return (
    <div className="container-drag">
    <div className="wip"
    onDragOver={(e)=>this.onDragOver(e)}
    onDrop={(e)=>{this.onDrop(e, "wip")}}>
    <span className="task-header">TO DO</span>
    {tasks.wip}
    </div>
    <div className="inProgess"
    onDragOver={(e)=>this.onDragOver(e)}
    onDrop={(e)=>{this.onDrop(e, "inProgess")}}>
    <span className="task-header">IN PROGRESS</span>
    {tasks.inProgess}
    </div>
    <div className="droppable" 
    onDragOver={(e)=>this.onDragOver(e)}
    onDrop={(e)=>this.onDrop(e, "complete")}>
    <span className="task-header">COMPLETED</span>
    {tasks.complete}
    </div>
    {m}
    </div>


    );
}
}


function mapStateToProps(state) {
  return {
    categorySelected: state.categorySelected,


  };
}



export default connect(mapStateToProps, null)(AppDragDropDemo);
