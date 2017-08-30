import React from 'react';
import PropTypes from 'prop-types';


const TodoItemButtons = (props) => {
return(
  <span>
    <button onClick={props.onEditClick}> Edit</button>
    <button> Delete </button>
  </span>
)

}


export default TodoItemButtons;
