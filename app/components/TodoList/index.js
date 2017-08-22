//babel polyfill needs to be first to work
import "babel-polyfill";

import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

//import related components
import TodoView from './TodoView';
import TodoAdd from './TodoAdd';



class TodoMain extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      todos: [
        // {
        //   todo: 'breathe',
        //   isCompleted: true
        // },
        // {
        //   todo: 'finish todoApp',
        //   isCompleted: false
        // }
      ],
      isEditing: false,
    };
    //bind this to functions written on the component
    this.onEditClick = this.onEditClick.bind(this);
    this.addTodos = this.addTodos.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  onEditClick(){
    this.setState({
      isEditing: !this.state.isEditing
    });
  }


  addTodos(todo){
      this.state.todos.push ({
        todo,
        isCompleted: false
      });
      this.setState({
        todos: this.state.todos
      });
      localStorage.setItem('todo', JSON.stringify(todo));
    }

    toggleCompleted(todo){
      const foundTodo = _.find(this.state.todos, function(x){
        return x.todo === todo;
      });
      console.log(foundTodo);
      foundTodo.isCompleted = !foundTodo.isCompleted;
      this.setState({
        todos: this.state.todos
      });

    }


  render() {
    return (
      <div>
        <h1> Todos List </h1>
        <TodoAdd addTodos = {this.addTodos} />
       <TodoView
          todos = {this.state.todos}
          isEditing = {this.state.isEditing}
          onEditClick = {this.onEditClick}
          toggleCompleted = {this.toggleCompleted}
       />

      </div>
    )
  }
}

export default TodoMain;
