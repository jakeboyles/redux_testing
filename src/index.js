import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers'
import ShirtList from './containers/ShirtList';
import { Provider } from 'react-redux';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
  	<ShirtList />
  </Provider>,
  document.getElementById('root')
);
