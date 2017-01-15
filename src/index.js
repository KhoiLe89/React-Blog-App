import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import './index.css';

const post = {
  title: "Practicing React with a Blog App",
  author: "Khoi",
  body: "React is pretty cool",
  comments: [
    "Need to get guud at this",
    "Practice makes perfect",
    "You got this!"
  ]
}


ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments}/>,
  document.getElementById('root')
);
