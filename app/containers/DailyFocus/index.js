//babel polyfill needs to be first to work
import "babel-polyfill";

import _ from 'lodash';

import React from 'react';
import PropTypes from 'prop-types';

import {AddForm, DisplayFocus} from 'Components/DailyFocus'
import {generateId, addFocus,findById, toggleItem, updateItem, removeItem} from 'FocusUtils/focusHelpers'
import {loadFocus, createFocus, saveFocus, destroyFocus} from 'FocusUtils/focusService'
import {partial, pipe} from 'Utils/utils'

class DailyFocus extends React.Component {
  state = {
    focus: [],
    currentFocus: '',
    isSubmitted: false
  }

  componentDidMount(){
    loadFocus()
      .then(focus => this.setState({focus}))
  }

  handleInputChange = (evt) => {
    this.setState({
      currentFocus: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newFocus = {
      id: newId,
      text: this.state.currentFocus,
      isComplete: false
    }

    const updatedFocus = addFocus(this.state.focus, newFocus)
    console.log(newFocus)
    this.setState({
      focus: updatedFocus,
      currentFocus: '',
      errorMessage: '',
      isSubmitted: true
    })
    createFocus(newFocus)
      .then(() => this.showTempMessage('Focus Added'))
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a valid Daily Focus item'
    })

  }

  handleToggle =(id) =>{
    const getToggledItem = pipe(findById, toggleItem)
    const updated = getToggledItem(id, this.state.focus)
    const getUpdatedItem = partial(updateItem, this.state.focus)
    const updatedItem = getUpdatedItem(updated)
    this.setState({focus: updatedItem})
    saveFocus(updated)
      .then(() => this.showTempMessage('Daily Goal Updated'))
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedItems = removeItem(this.state.focus, id)
    this.setState({focus: updatedItems, isSubmitted: false})
    destroyItem(id)
      .then(() => this.showTempMessage('Item Removed'))
  }




  render(){
    const submitHandler = this.state.currentFocus ? this.handleSubmit : this.handleEmptySubmit;
    const isSubmitted = this.state.isSubmitted;

    return(
     <div>
      { isSubmitted
        ? <DisplayFocus
            {...focus}
            handleRemove = {this.handleRemove}
            handleToggle = {this.handleToggle}

          />

        : <AddForm
            currentFocus = {this.state.currentFocus}
            handleInputChange ={this.handleInputChange}
            handleSubmit = {submitHandler}
          />

      }

      {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
      {this.state.message && <span className='success'>{this.state.message}</span>}
     </div>

    )
  }
}

export default DailyFocus;
