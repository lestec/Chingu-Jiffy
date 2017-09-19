
/*

The skeleton around the actual page, should only contain code
that will be seen on all pages (if we have multiple pages)

*/


import React from 'react';
import PropTypes from 'prop-types';

//import components
//imported using resolve.alias to shorten import name
import TodoMain from 'Containers/Todoapp';
import WeatherComponent from 'Components/WeatherComponent';
import DailyFocus from 'Containers/DailyFocus';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <TodoMain />
        <DailyFocus />
      </div>
    )
  }
}

