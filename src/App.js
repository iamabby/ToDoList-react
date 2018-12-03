import React, { Component } from 'react';
import './App.scss';
import ToDoList from './component/ToDoList/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ToDoList />
      </div>
    );
  }
}

export default App;
