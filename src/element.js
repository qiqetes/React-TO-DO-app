import React, { Component } from 'react'
import M from 'materialize-css'


export default class Element extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
        <li>
            {/* <i className="material-icons">bookmark</i> */}
            <div className="collapsible-header">
              <h6>{this.props.todo.title}</h6>
              <span className="badge">
                <a className="waves-effect waves-light btn-small" onClick={this.handleClick} href="!#"><i className="material-icons left">cancel</i>remove</a>
              </span>
            </div>
            {this.props.todo.subtitle &&
            <div className="collapsible-body">{this.props.todo.subtitle}</div>}
        </li>
    )
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);
});
