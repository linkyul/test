import React, { Component } from 'react';

import App from './src/containers/App';
import {Provider} from 'react-redux';
import configureStore from './src/store/ConfigureStore';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
       <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
