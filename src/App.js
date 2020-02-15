import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Apprendre React',
        completed: false
      },
      {
        id: 2,
        title: 'Apprendre Drupal',
        completed: false
      },
      {
        id: 3,
        title: 'Apprendre Vue Js',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
   // console.log(id)
   this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
   })});
  }
  
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos myprops={this.state.todos} markComplete={this.markComplete}/>
      </div>
     
    )
  }
}
