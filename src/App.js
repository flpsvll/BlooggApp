import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { PostsList } from "./containers/PostsList"
import { AddPost } from "./containers/AddPost"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />         
        <section id="main">
          <PostsList />
          <AddPost />
        </section>
      </div>
    );
  }
}

export default App;
