import React, { Component } from 'react'
import './modal.scss'

export default class Modal extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const titleVal = document.getElementById("title").value;
        const descVal = document.getElementById("description").value;
        this.props.submitTodo(titleVal,descVal);        
    }
  render() {
    return (
        <div className="fixit">
        {this.props.modalVisible && (
            <div className="card-panel red lighten-1 modale z-depth-3">
            <span className="white-text">
            Write your to-do here:
            </span>
            <form className="input-field col s12" onSubmit={(e)=>{
                e.preventDefault();
                const descInput = document.getElementById("description");
                descInput.focus();
            }
            }>
                <i className="material-icons prefix">textsms</i>
                <input  id="title" type="text"/>
                <label htmlFor="title" name="title">Title</label>
            </form>
            <form className="input-field col s12" onSubmit={this.handleSubmit}>
                <i className="material-icons prefix">textsms</i>
                <input type="text" id="description"/>
                <label htmlFor="description" name="description">Description (optional)</label>
                <br/>
            <div className="center-align">
                <a href="!#" className="waves-effect waves-light btn white red-text" onClick={this.handleSubmit}>submit</a>
                <a href="!#" className="waves-effect waves-light btn white red-text" onClick={this.props.toggle}>cancel</a>
            </div>
            </form>
        </div>)
        }
        </div>
    )
  }
}
