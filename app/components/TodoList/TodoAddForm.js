import React from 'react';
import PropTypes from 'prop-types';


class TodoAddForm extends React.Component {
   constructor(props){
    super(props);
  }

  render(){
    return(
      <form>
        <input type ="text" placeholder= "What do you need to do?"/>
        <button> Add Todo </button>
      </form>
    )
  }

}
export default TodoAddForm;
