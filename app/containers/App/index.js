
/*

The skeleton around the actual page, should only contain code
that will be seen on all pages (if we have multiple pages)

*/


import React from 'react';
import PropTypes from 'prop-types';

//import components
//import using resolve.alias to shorten import name
import WeatherApp from './app/components/WeatherComponent/index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to Jiffy </h1>
        <p> run yarn run start to open webpack-dev-server, <br/>
        include your code in a new folder in the components folder, <br/>
        don't forget to import your component in the containers/App/index.js
        file, and then call it in the render section. <br/>
        and checkout webpack.config.js for resolve aliases that can be used to
        shorted import file name <br/>
        and this dev-server does have hotloading and other cool packages, check out package.json
        </p>
      </div>
    )
  }
}
