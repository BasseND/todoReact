import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class Todos extends Component {
    render() {
        console.log(this.props.myprops)
        return  this.props.myprops.map((todo) => (
            // <h1> {todo.title}</h1>
            <TodoItem key={todo.id} todoitem={todo} markComplete={this.props.markComplete}/>
        ));
        
    }
}
// PropTypes
Todos.propTypes = {
    myprops : PropTypes.array.isRequired
}
