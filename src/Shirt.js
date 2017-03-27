import React from 'react';
import { connect } from 'react-redux';
import { deleteShirt,addShirtNew } from './actions';

import './App.css';

class Shirt extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      in_cart: false,
      class:''
    };

    this.shirtAction = this.shirtAction.bind(this);
  };

  shirtAction(){
      if(this.state.in_cart===false)
      {
        this.props.dispatch(addShirtNew(this.props));
        this.setState({
          in_cart:true,
          class:'active'
        })
      } else{
        this.props.dispatch(deleteShirt(this.props));
        this.setState({
          in_cart:false,
          class:''
        })
      }
  }

  render() {
    return (
      <div className="column">
      <div className="item">
        <div className="preview">
          <img className="face" src={this.props.color+'shirt.png'} alt="Lovely Pink Shirt Front" />
          <img className="back" src={this.props.color+'Hover.png'} alt="Lovely Pink Shirt Back" />
          <div className="flip">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="controls">
          <div className="icon reload">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          </div><div className="icon heart">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </div><div className="icon size">
            <p>XL</p>
            <div className="size-menu">
              <div className="size-option extra-large">
                <img src="xl.png" alt="XL Shirt Size" />
              </div>
              <div className="size-option large">
                <img src="l.png" alt="L Shirt Size" />
              </div>
              <div className="size-option medium">
                <img src="m.png" alt="M Shirt Size" />
              </div>
              <div className="size-option small">
                <img src="s.png" alt="S Shirt Size" />
              </div>
              <div className="carrot"></div>
            </div>
          </div><div className="icon color">
            <div className={this.props.color+' selected'}></div>
            <div className="color-menu">
              <div className="color-option one">
              </div><div className="color-option two">
              </div><div className="color-option three">
              </div><div className="color-option four">
              </div>
              <div className="carrot"></div>
            </div>
          </div>
          <div onClick={this.shirtAction} className={this.state.class+' icon cart'}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="details">
        <p className="name">{this.props.title}</p>
        <p className="price">${this.props.price}</p>
      </div>
    </div>
    );
  };
}


Shirt.propTypes = {
    color: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  }

Shirt = connect()(Shirt);
export default Shirt;
