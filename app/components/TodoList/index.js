//babel polyfill needs to be first to work
import "babel-polyfill";

import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

//import related components
import TodoAddForm from './TodoAddForm';
import TodoList from './TodoList';

const todos = [
{
  text: 'feed the dog',
  isCompleted: false

},
{
  text: 'finish this shit',
  isCompleted: false

},
{
  text: 'meeting',
  isCompleted: false

}

];


class TodoMain extends React.Component {
  constructor(props){
    super(props);

    this.state ={
       todos
     };
    //bind this to functions written on the component

  }




  render() {
    return (
      <div>
        <h1> Todo App </h1>
        <TodoAddForm />
        <TodoList todos = {this.state.todos} />
      </div>
    )
  }
}

export default TodoMain;


