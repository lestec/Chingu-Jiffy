import React from 'react';
import PropTypes from 'prop-types';

import {TodoItem} from './TodoItem';



export const TodoList = (props) => {

  return (
    <ul>
      {props.todos.map(todo =>
        <TodoItem
          handleToggle={props.handleToggle}
          handleEditClick={props.handleEditClick}
          handleSaveClick={props.handleSaveClick}
          key={todo.id}
          {...todo}
          handleRemove={props.handleRemove}
          />
      )}


    </ul>
  )
}

TodoList.propTypes ={
  todos: PropTypes.array.isRequired
}





