import React, { Component } from 'react';

//export default ({ products }) => (  
export default class Product extends Component {

  componentDidMount() {
    this.props.onLoadProduct(); //passes the currentProduct to the props

  }

  render() {   
    return (
      <div>
        <h1>{currentProduct.name}</h1>
        <p>{currentProduct.description}</p>
        {/* //image, caption, price, button add to cart */}
        
      </div>
    )
  }
}