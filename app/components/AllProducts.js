import React, { Component } from 'react';

//export default ({ products }) => (  
export default class AllProducts extends Component {

  componentDidMount() {
    this.props.onLoadProducts(); 
    //take products from back end dispatch method in container, which employs the async action creator fetch, 
    //puts it on the state and this makes it a prop
  }

  render() {   
    return (
      <div>
        <h1>All Products</h1>
        {/* //image, caption, price, button add to cart */}
        <ul>
        {this.props.products.map( (product) =>{

          <li> <span>{product.name} </span></li>
          })
        }

        </ul>
      </div>
    )
  }
}