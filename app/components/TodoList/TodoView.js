import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

function RenderButtonChange(props){
  if(props.isEditing){
    return(
      <span>
        <button onClick= {props.onSaveClick.bind(this)}> Save </button>
        <button onClick= {props.onCancelClick.bind(this)}> Cancel </button>
      </span>
    )
  }

  return(
    <span>
      <button onClick= {props.onEditClick.bind(this)}> Edit </button>
      <button> Delete </button>
    </span>
  )
}

function RenderTodoItem(props){
  const isCompleted = props.todos.isCompleted;

  const completedStyle = {
    textDecoration: isCompleted ? 'line-through' : 'none'
  }

  if(props.isEditing){
    return(
      <span>
        <form onSubmit ={props.onSaveClick.bind(this)}>
          <input type="text" defaultValue = {props.todos.todo} ref ='"editInput' />
          </form>
      </span>
    )
  }

  return(
    <span style = {completedStyle} onClick = {props.toggleCompleted.bind(this, props.todos.todo)}>{props.todos.todo}</span>
  )
}


function FormatTodos(props){


  const todos = props.todos;
  return(
    <ul>
     {todos.map((todos, i) => {
        return (
          <li key= {i}>
          <RenderTodoItem
            todos = {todos}
            toggleCompleted = {props.toggleCompleted}
            isEditing = {props.isEditing}
            onSaveClick = {props.onSaveClick}

          />
          <RenderButtonChange
            isEditing = {props.isEditing}
            onEditClick = {props.onEditClick}
            saveTodo = {props.saveTodo}
            onCancelClick = {props.onCancelClick}
            onSaveClick = {props.onSaveClick}

          />
          </li>
        )
      })}
    </ul>
  )

} //end of function




class TodoView extends React.Component {
   constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <FormatTodos
        todos ={this.props.todos}
        isEditing = {this.props.isEditing}
        onEditClick = {this.props.onEditClick}
        toggleCompleted = {this.props.toggleCompleted}
        saveTodo = {this.props.saveTodo}
        onCancelClick = {this.props.onCancelClick}
        onSaveClick = {this.props.onSaveClick}
        />
      </div>
    )
  }
}


export default TodoView;
