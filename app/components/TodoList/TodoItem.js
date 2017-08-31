import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import {partial} from 'Utils/utils';
import TodoItemButtons from './TodoItemButtons';

const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove= partial(props.handleRemove, props.id)

  return(
    <li>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange = {handleToggle}
      /> {props.text}
      <span className='delete-item'>
        <a href="#" onClick={handleRemove}>x</a>
      </span>
     </li>
  )



}


export default TodoItem;

TodoItem.propTypes ={
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}
