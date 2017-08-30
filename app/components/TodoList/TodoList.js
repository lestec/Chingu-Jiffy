import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';



class TodoList extends React.Component {
   constructor(props){
    super(props);

    this.state = {
      isEditing: false
    }


    // this.toggleCompleted = this.toggleCompleted.bind(this);
    // this.saveTodo = this.saveTodo.bind(this);
    //this.onCancelClick = this.onCancelClick.bind(this);
    //this.onSaveClick = this.onSaveClick.bind(this);
  }

   onEditClick =()=> (
    this.setState({isEditing: true})
  )
//give the todo items an id an use that id instead of
//index to map array/display text
  render() {
    return (
      <ul>

      {this.props.todos.map((text, i) =>
        <TodoItem
        key={i}
        text={this.props.todos[i].text}
        isEditing ={this.state.isEditing}
        onEditClick = {this.onEditClick}
        />)}

      </ul>
    )
  }
}


export default TodoList;






