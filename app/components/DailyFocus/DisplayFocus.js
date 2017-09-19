import React from 'react';
import PropTypes from 'prop-types';

import {partial} from 'Utils/utils';

export const DisplayFocus = (props) =>{
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove= partial(props.handleRemove, props.id)
  return(
    /*<li key= {focus.key}>
      <input
        type="checkbox"
        checked={props.focus.isComplete}
        onChange = {handleToggle}
      />
      {props.focus.text}
      <a href='#'> x </a>
    </li> */
    <div>
    {props.text}
    </div>

  )
}

DisplayFocus.propTypes ={
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}

