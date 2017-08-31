import React from 'react';
import PropTypes from 'prop-types';


export const TodoAddForm =(props) => (

      <form onSubmit={props.handleSubmit}>
        <input
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







