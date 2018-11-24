import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import List from './list';
import Heading from './heading';
import Footer from './footer';
import Modal from './modal';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[{title: "Comprar en el black friday", subtitle: "lul hehe"}, {title:"Lorem ipsum", subtitle:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero voluptas labore eaque harum exercitationem delectus corrupti quidem distinctio quasi!"}],
      modalVisible: false,
    }
    this.addTodo = this.addTodo.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }


  componentDidMount(){
    // TODO: access to local storage and take the options from there
    window.localStorage.setItem("todos", ["hi","hello","dfssdfs"])
    console.log(window.localStorage.todos)
  }
  addTodo(e){
    e.preventDefault();
    this.setState((state)=>({counter: state.counter + 1}));
  }

  render() {
    return (
      <div className="App">
        <Heading addTodo={this.addTodo} counter={this.state.counter} toggle={this.toggleModal}/>
        <List todos={this.state.todos} removeTodo={this.removeTodo}/>
        <Modal modalVisible={this.state.modalVisible} toggle={this.toggleModal} submitTodo={this.submitForm} />
        <Footer/>
      </div>
    );
  }

  toggleModal(e){
    if(e)e.preventDefault();
    this.setState((state)=>({modalVisible: !state.modalVisible}));
  }

  submitForm(title, subtitle){
    if(title.trim()){
      title = title.charAt(0).toUpperCase() + title.slice(1);
      if(subtitle.trim()){
        subtitle = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
      }
      let newTodos = this.state.todos;
      newTodos.push({title, subtitle});
      this.setState({
        todos: newTodos 
      });

      this.toggleModal();
    }
  }
  removeTodo(i){
    console.log("i: ", i);
    console.log(this.state.todos[i])

    const newAr = this.state.todos;
    newAr.splice(i,1);
    this.setState({todos: newAr});
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
