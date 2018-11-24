import React, { Component } from 'react'
import Element from './element'
import './list.scss'

export default class List extends Component {
  render() {
    return (
      <div className="List">
      <div className="container">
        <blockquote>
          <h6>
          {this.props.todos.length === 0 ? (<div>There are no options</div>):(<p>There are {this.props.todos.length} options in your to-do list. Click the <i className="tiny material-icons">add</i> icon to add a new to-do</p>)}

          </h6>

        </blockquote>
      </div>
        <ul className="collapsible">
          {this.props.todos.map((todo,i)=> 
            <Element todo={todo} key={i} id={i} removeTodo={this.props.removeTodo}/>
          )}
        </ul>
      </div>
    )
  }
}
