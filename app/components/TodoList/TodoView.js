import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

function RenderButtonChange(props){
  if(props.isEditing){
    return(
      <span>
        <button onClick= {props.onEditClick.bind(this)}> Save </button>
        <button> Cancel </button>
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

  return(
    <span style = {completedStyle} onClick = {props.toggleCompleted.bind(this, props.todos.todo)}>{props.todos.todo   }</span>
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
          />
          <RenderButtonChange
            isEditing = {props.isEditing}
            onEditClick = {props.onEditClick}
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

    //this.props.toggleCompleted = this.props.toggleCompleted.bind(this);
  }


  render() {
    return (
      <div>
        <FormatTodos
        todos ={this.props.todos}
        isEditing = {this.props.isEditing}
        onEditClick = {this.props.onEditClick}
        toggleCompleted = {this.props.toggleCompleted}
        />
      </div>
    )
  }
}


export default TodoView;
