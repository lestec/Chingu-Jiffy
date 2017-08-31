//babel polyfill needs to be first to work
import "babel-polyfill";

import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

//import related components
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';
import TodoDisplayFilters from './TodoDisplayFilters';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from 'Utils/todoHelpers';
import {partial, pipe} from 'Utils/utils'
import {loadTodos, createTodo, saveTodo, destroyTodo} from 'Utils/todoService'

class TodoMain extends React.Component {
  state ={
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: PropTypes.string
  }

  componentDidMount(){
    loadTodos()
      .then(todos => this.setState({todos}))
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'))
  }

  handleToggle =(id) =>{
    const getToggledTodo = pipe(findById, toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({todos: updatedTodos})
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'))
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {
      id: newId,
      text: this.state.currentTodo,
      isComplete: false
    }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo Added'))
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a valid todo item'
    })

  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route)

    return (
      <div>
        <h1> Todo App</h1>
        <TodoAddForm
          currentTodo = {this.state.currentTodo}
          handleInputChange ={this.handleInputChange}
          handleSubmit = {submitHandler}
        />
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        {this.state.message && <span className='success'>{this.state.message}</span>}
        <TodoList
          todos = {displayTodos}
          handleToggle={this.handleToggle}
          handleRemove = {this.handleRemove}
        />
        <TodoDisplayFilters />
      </div>
    )
  }
}

export default TodoMain;


