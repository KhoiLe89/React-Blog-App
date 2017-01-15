import React, { Component } from 'react';
import './App.css';
import Comment from "./Comment.js"
class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick(e){
    this.setState({
      body: document.getElementById("input").value
    })
    e.preventDefault()
  }
  render() {
    let comments = this.props.comments.map((comment, i) => (
      <Comment body={comment} key={i} />
    ))
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> By: {this.props.author} </h2>
        <h3> {this.state.body} </h3>
        <div> {comments} </div>
        <form>
          <input type="text" id="input" ></input>
          <input type="submit" onClick={(e) => this.handleClick(e)}></input>
        </form>
      </div>
    );
  }
}

export default Post;
