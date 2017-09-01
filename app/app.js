/*
entry file for the app, only setup and boilerplate code
*/


//import third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

//import root app
import App from 'Containers/App/index';

//import css reset and global styles




ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Containers/App/index', () => {
    const NextApp = require('Containers/App/index').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
