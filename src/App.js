import React, { Component } from 'react';
import './App.css';
import Shirt from './Shirt';
import { createStore } from 'redux'

class App extends Component {

  constructor(){
    super()

    var defaultState = {
      cart: {
        items: []
      }
    };

    const cart = (state = {}, action) => {
      switch (action.type) {
        case 'ADD_SHIRT':

          var newState = Object.assign({}, state);
     
          newState.cart.items.push({
            price:action.price,
            color:action.color,
            title:action.title,
          });
     
          return newState;
        default:
          return state
      }
    }

    this.store = createStore(cart,defaultState)
    this.total = 0;

  }

  componentWillMount() {
    this.store.subscribe(() => {
      var state = this.store.getState();
      this.setState({
        items: state.cart.items
      });

      this.total = 0;
      console.log(state.cart.items);
      state.cart.items.map((item) =>{
        this.total += parseFloat(item.price);
      })
    });
  }


  render() {
    return (
      <div className='container'>
        <Shirt store={this.store} title="Shirt 1" price='20' color='blue' />
        <Shirt store={this.store} title="Shirt 2" price='40' color='pink' />
        <Shirt store={this.store} title="Shirt 3" price='35' color='orange'  />

        <h4>Total: {this.total}</h4>
      </div>
    );
  }
}

export default App;
