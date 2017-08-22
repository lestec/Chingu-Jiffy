import React from 'react';
import PropTypes from 'prop-types';


class TodoAdd extends React.Component {
   constructor(props){
    super(props);
    this.addTodosHandler = this.addTodosHandler.bind(this);
  }

  addTodosHandler(event){
    event.preventDefault();
    const addTodos = this.props.addTodos;
    const inputValue = this.refs.addTodosItem.value;
    addTodos(inputValue);
    this.refs.addTodosItem.value = '';


  }

  render() {
    return (
      <form onSubmit={this.addTodosHandler}>
        <input type = "text" placeholder= "Add a new task"
        ref="addTodosItem" />
        <button> Add Todo </button>
      </form>
    )
  }
}


export default TodoAdd;
