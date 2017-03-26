import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from '../reducers'
import ShirtList from '../containers/ShirtList';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  	<ShirtList dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('root')
);
