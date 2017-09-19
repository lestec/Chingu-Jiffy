import React from 'react';
import PropTypes from 'prop-types';


export const AddForm =(props) => (

  <div>
    <p> What is your main focus for today? </p>

    <form onSubmit={props.handleSubmit}>
      <input
        type ="text"
        value ={props.currentFocus}
        onChange={props.handleInputChange}
      />
    </form>
  </div>
)

AddForm.propTypes ={
  currentFocus: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
