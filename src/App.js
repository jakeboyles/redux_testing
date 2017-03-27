import React from 'react'
import Shirt from './Shirt'
import './App.css'
import _ from 'lodash'

let App = ({ items }) => {

  function showNone() {
    if(items.length === 0){
      return <h2>Nothing In Cart :(</h2>;
    }
  }

  return (
    <div className='container'>
      <Shirt id={1} title="Shirt 1" price={20} color='Blue' />
      <Shirt id={2} title="Shirt 2" price={40} color='Pink' />
      <Shirt id={3} title="Shirt 3" price={35} color='Orange'  />

      <div className="Cart">
        {showNone()}
        {items.map((item, index) =>
          <div className="cartItem">
          <h5 key={index}>Title:{item.title} <span className="pull-right">Price:${item.price}</span></h5>
          </div>
        )}
        <h4>Total: ${items.reduce((a,b)=>b.price+a,0)}</h4>
      </div>
    </div>
  )
};

export default App;