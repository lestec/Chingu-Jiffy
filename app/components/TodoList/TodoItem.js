import React from 'react';
import PropTypes from 'prop-types';

import {partial} from 'Utils/utils';


export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleEditClick = partial(props.handleEditClick, props.id)
  const handleSaveClick = partial(props.handleSaveClick, props.id)
  const handleRemove= partial(props.handleRemove, props.id)

const normalTodo = () => {
  return(
    <li>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange = {handleToggle}
      /> {props.text}
      <button onClick={props.handleEditClick}> Edit </button>
      <button onClick={handleRemove}> Delete </button>
    </li>
  )
}


const editingTodo = () => {
  return(
    <li>
      <input
        type="text"
        placeholder={props.text}
      />
      <button onClick={handleSaveClick}> Save </button>
      <button > Cancel </button>
    </li>
  )
}

  //create a function that returns the normal state
  // of the todolist when isEditing is false
  // create a second function that returns the editable
  // state of the list item isEditing is true
  // and then in the todoItem return area below,
  // based on the value of isEditing (using a if statement),
  // either render the normal todoItem or the editable one

  //when isEditing is true, buttons are save/cancel
  //when isEditing is false, buttons are edit/delete
  //when cancel is clicked, isEditing is changed to false
  //when save is clicked, the database needs to be updated
  //and the update helper needs to be called along with updating the state
  //
  //do todo apps need a searchability feature? probs not

 if(props.isEditing){
    return(editingTodo())
  } else {
    return(normalTodo())
  }
}


TodoItem.propTypes ={
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}
