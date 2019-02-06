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
  
  delete = (id) => {
   this.props.deleteMessage(id);
  }

render() {
  let modalContent;
  let detailsBlock;

  const {formData,onChange,category,user} = this.props;
 
  this.state.showModal!==null && this.props.user ? detailsBlock =
  <div className="detailsOfTask">
  <ModalContainer  hide={()=>this.setState({showModal: null})}> 

  {this.state.tasks.filter(el => el.id==this.state.showModal).map(el=><div>
    <div> <span className="title-sm">TYTUŁ: </span>{el.title}</div>
    <div> <span className="title-sm">WIADOMOŚĆ: </span>{el.message}</div>
    <div> <span className="title-sm">NADAWCA: </span><span>{(user.find(e=>e.id == el.sender)||{}).name}</span>
    <span> {(user.find(e=>e.id == el.sender)||{}).surname}</span></div>
    <div>
      <Form
      formData={formData}
      onChange={onChange}
      schema={[
        {name:'', path:'messageToUser', type:'textarea'},
        ]}
        />
        <button className="btn-style btn-style-sm" 
         onClick={()=>{this.props.sendMessageToUser(el.id);this.setState({showModal: null})}}>
          Wyślij
      </button>
      </div>
      </div> )}</ModalContainer>
  </div> : null;
    
    if(this.state.tasks) modalContent = this.state.tasks.filter(el => el.id == this.state.showModal);
    else modalContent=[];
    var tasks = {
      wip: [],
      inProgess:[],
      complete: []
    }

  if(this.state.tasks){
    this.state.tasks.filter(el => el.category == this.props.categorySelected.categoriesSelected).forEach ((t) => {
      (tasks[t.state]||[]).push(
        <div key={t.id} 
            onDragStart = {(e) => this.onDragStart(e, t.id)}
            draggable
            className="draggable"
            style = {{backgroundColor: t.bgcolor}}
            >
            <div> <span className="title-sm">TYTUŁ: </span>{t.title}</div>
            <div> <span className="title-sm">KATEGORIA: </span>{(category.find(e=>e.id == t.category)||{}).name}</div>
            <div className="mb-12"> <span className="title-sm">NADAWCA: </span>
            <span>{(user.find(e=>e.id == t.sender)||{}).name}</span>
            <span> {(user.find(e=>e.id == t.sender)||{}).surname}</span></div>
            <a className="btn-style" onClick={()=>this.show(t.id)}>Zobacz więcej</a>
            <a className="btn-style" style={{'background':'grey'}} onClick={()=>this.delete(t.id)}>Usuń</a>
        </div>
      );
    })
  }
  else console.log("error");
    


  return (
    <div className="container-drag">
      <div className="wip"
      onDragOver={(e)=>this.onDragOver(e)}
      onDrop={(e)=>{this.onDrop(e, "wip")}}>
      <span className="task-header">OCZEKUJĄCE</span>
        {tasks.wip}
      </div>
      <div className="inProgess"
      onDragOver={(e)=>this.onDragOver(e)}
      onDrop={(e)=>{this.onDrop(e, "inProgess")}}>
      <span className="task-header">W TRAKCIE</span>
        {tasks.inProgess}
      </div>
      <div className="droppable" 
      onDragOver={(e)=>this.onDragOver(e)}
      onDrop={(e)=>this.onDrop(e, "complete")}>
      <span className="task-header">GOTOWE</span>
        {tasks.complete}
      </div>
        {detailsBlock}
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
