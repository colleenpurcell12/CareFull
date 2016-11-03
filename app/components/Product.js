import React, { Component } from 'react';
import Reviews from './Reviews'

//export default ({ products }) => (  
export default class Product extends Component {

  componentDidMount() {
    console.log("IN PRODUCT COMPONENT ABOUT TO mount ")
    //this.props.onLoadSingleProduct(); //passes the currentProduct to the props

  }
  render() { 
    //console.log("this.props.currentProduct ",this.props.currentProduct ) 
    //console.log("CHECK PASSING his.props.reviews ", this.props.reviews )    
    return (
      <div>
        <h2>Product Details</h2>
        
        <h3>{this.props.currentProduct &&this.props.currentProduct.name}</h3>
        <p>{this.props.currentProduct &&this.props.currentProduct.description}</p>
        <p>Price: ${this.props.currentProduct && this.props.currentProduct.price}</p>
        {/* //image, caption, price, button add to cart */}
        <Reviews reviews={this.props.reviews} productId= {this.props.currentProduct.id}/>
      </div>
    )
  }
}