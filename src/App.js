import React, { Component } from 'react'
import './App.css'
import Shirt from './Shirt'
import { createStore } from 'redux'


class App extends Component {

  constructor(){
    super()

    var defaultState = {
      cart: {
        items: []
      }
    }

    // Reducer
    const reducer = (state = {}, action) => {
      switch (action.type) {
        case 'ADD_SHIRT':

          var newState = {...state}
     
          newState.cart.items.push({
            price:action.price,
            color:action.color,
            title:action.title,
          })
     
          return newState;

        default:
          return state
      }
    }

    this.store = createStore(reducer,defaultState)
    this.total = 0
    this.items = []

  }

  componentWillMount() {
    this.store.subscribe(() => {

      let state = this.store.getState();

      this.setState({
        items: state.cart.items
      });

      this.items = state.cart.items

      this.total = this.items.reduce((cv,item) =>{
        return parseFloat(cv)+parseFloat(item.price);
      },0)

    });
  }


  render() {
    return (
      <div className='container'>
        <Shirt store={this.store} title="Shirt 1" price='20' color='blue' />
        <Shirt store={this.store} title="Shirt 2" price='40' color='pink' />
        <Shirt store={this.store} title="Shirt 3" price='35' color='orange'  />

        {this.items.map((item, index) =>
          <h5 key={index}>{item.title}:{item.color}</h5>
        )}

        <h4>Total: ${this.total}</h4>

      </div>
    );
  }
}

export default App;
