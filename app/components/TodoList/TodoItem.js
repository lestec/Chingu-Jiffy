import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import TodoItemButtons from './TodoItemButtons';

const TodoItem = (props) => {

  const text = props.text;

  return(
    <li>
      <span>{text}</span>
      <TodoItemButtons
        isEditing = {props.isEditing}
        onEditClick={props.onEditClick}
      />
    </li>

  )



}


export default TodoItem;

//<li key = {props.index}> {props.todos.text}</li>
