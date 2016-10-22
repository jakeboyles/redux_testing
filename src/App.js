import React, { Component } from 'react';
import './App.css';
import Shirt from './Shirt';
import { createStore } from 'redux'
import cart from '../reducers'


class App extends Component {
  
  constructor(){
    super()

    var defaultState = {
      cart: {
        items: []
      }
    };

    let store = createStore(cart,defaultState)

  }

  componentWillMount() {
    this.store.subscribe(() => {
      var state = this.store.getState();
      this.setState({
        items: state.cart.items
      });

      console.log(state.cart.items)
    });
  }


  render() {
    return (
      <div className='container'>
        <Shirt store={this.store} title="Shirt 1" price='20' color='blue' />
        <Shirt store={this.store} title="Shirt 2" price='40' color='pink' />
        <Shirt store={this.store} title="Shirt 3" price='35' color='orange'  />
      </div>
    );
  }
}

export default App;
