import React, { Component } from 'react';
import Reviews from './Reviews'

export default class Product extends Component {

  render() {    
    return (
      <div className='row'>
        <div className='col-md-12 well'>
        <h2>Product Details</h2>
        
        <h3>{this.props.currentProduct &&this.props.currentProduct.name}</h3>

        <img className='single-product' src={this.props.currentProduct.photo}>
        </img>

        <p></p>
        <p>
          <button className = 'btn btn-success' onClick={ () => this.props.postItemToCart(this.props.currentProduct) }>
            Add To Cart
          </button>
        </p>
        <h4>What's Inside? </h4>
        <p>{this.props.currentProduct &&this.props.currentProduct.description}</p>
        <p>Price: ${this.props.currentProduct && this.props.currentProduct.price}</p>
        {/* //image, caption, price, button add to cart */}
        <Reviews reviews={this.props.reviews} productId= {this.props.currentProduct.id}/>
        </div>
      </div>
    )
  }
}