import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';



const TodoList = (props) => {

  return (
    <ul>
      {props.todos.map(todo =>
        <TodoItem
          handleToggle={props.handleToggle}
          key={todo.id}
          {...todo}
          handleRemove={props.handleRemove}
          />
      )}


    </ul>
  )
}


export default TodoList;

TodoList.propTypes ={
  todos: PropTypes.array.isRequired
}





