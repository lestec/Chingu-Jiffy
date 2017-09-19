import React from 'react';
import PropTypes from 'prop-types';

//import './todoApp.css'

export const TodoAddForm =(props) => (

  <form className="todo-add-form" onSubmit={props.handleSubmit}>
    <input
      className = "todo-add-input"
      type ="text"
      placeholder= "What do you need to do?"
      value ={props.currentTodo}
      onChange={props.handleInputChange}
    />
    <button> Add Todo </button>
  </form>
)

TodoAddForm.propTypes ={
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}







