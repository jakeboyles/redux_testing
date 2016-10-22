import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import cart from '../reducers'

let store = createStore(cart)

var defaultState = {
  cart: {
    items: []
  }
};

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
