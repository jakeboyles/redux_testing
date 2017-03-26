import React, { Component } from 'react'
import Shirt from './Shirt'
import { createStore } from 'redux'
import './App.css'
import _ from 'lodash'
import reducer from '../reducers'

const App = ({ items }) => {
    return (
      <div className='container'>
        <Shirt title="Shirt 1" price='20' color='blue' />
        <Shirt title="Shirt 2" price='40' color='pink' />
        <Shirt title="Shirt 3" price='35' color='orange'  />

        {/* Could put this in a seperate cart component  */}

        {items.map((item, index) =>
          <h5 key={index}>{item.title}:{item.color}</h5>
        )}


      </div>
      )
};

export default App;

  
