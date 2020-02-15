import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            borderBottom: '1px dotted #ccc',
            padding: '10px',
            textDecoration: this.props.todoitem.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todoitem ;
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}</p>
            </div>
        )
    }
}
// PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired
}


export default TodoItem
