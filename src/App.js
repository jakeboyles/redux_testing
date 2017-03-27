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

  function getTotal(){
    return items.reduce((a,b)=>b.price+a,0).toFixed(2)
  }

  return (
    <div className='container'>
      <Shirt id={1} title="Shirt 1" price={20.22} color='Blue' />
      <Shirt id={2} title="Shirt 2" price={40.55} color='Pink' />
      <Shirt id={3} title="Shirt 3" price={35.90} color='Orange'  />

      <div className="Cart">
        {showNone()}
        {items.map((item, index) =>
          <div key={item.id} className="cartItem">
          <h5>Title:{item.title} <span className="pull-right">Price:${item.price}</span></h5>
          </div>
        )}
        <h4>Total: ${getTotal()}</h4>
      </div>
    </div>
  )
};

export default App;