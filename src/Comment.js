import React, {Component} from 'react'
import './App.css'

class Comment extends Component {
  render(){
    return (
      <ul>
        <li> {this.props.body} </li>
      </ul>
    )
  }
}

export default Comment
