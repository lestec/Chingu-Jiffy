import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function FormatTime(props){
  if (props.hours12){
    return(
      <div>
        {props.time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}
      </div>
    )
  } else {
    return(
      <div>
        {props.time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})}
      </div>
    )
  }
} //end of function

class LocalTime extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date(),
      hours12: true,
    }

    //this bind statements go here or use arrow funct
    //only for functions we define on the componeent
    this.handleFormatClick = this.handleFormatClick.bind(this);
  }

  //LocalTime.propTypes- does the clock element need proptypes
  componentDidMount(){
    //will run the first time <LocalTIme /> renders
    this.timeTick = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timeTick)
  }

  tick(){
    this.setState({
      time: new Date()
   });
  }

//on click func just changes the state of hours12
 handleFormatClick (){
    this.setState({hours12: !this.state.hours12 });
  }


  render(){
    return (
      <div
        className='main-time' onClick={this.handleFormatClick}>
        <FormatTime time={this.state.time} hours12={this.state.hours12} />
      </div>
    )
  } //end of render ()
} //end of clock component



export default LocalTime;
