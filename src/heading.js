import React, { Component } from 'react'

class Heading extends Component{
  constructor(props){
    super(props);
    this.state={
      pulsed: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault();

    console.log("You pressed the button");
    this.props.toggle();
    this.setState({pulsed: true});

    let titleInput;
    let pointInput = async ()=>{
      await setTimeout(()=>{
        if(document.getElementById("title") !== null){
          titleInput = document.getElementById("title");
          titleInput.focus();
        }
      }, 100);
    }
    pointInput();
  }
  
  render(){
    return(
      <div>
      <div className="Heading navbar-fixed light-green">
        <nav className="nav-extended light-green">
          <div className="nav-wrapper">
            <div className="brand-logo center">TO-DO list {this.props.counter}</div>
          </div>
        </nav>
      </div>
        <a className={"btn btn-floating btn-large halfway-fab waves-effect waves-light red lighten-1" + (this.state.pulsed===true?"":" pulse")} 
        onClick={this.onClick} 
          href="!#">
          <i className="material-icons">add</i>
        </a>
      </div>
  );}

}

export default Heading;