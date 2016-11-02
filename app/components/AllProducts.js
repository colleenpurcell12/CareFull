import React, { Component } from 'react';
import {Link} from 'react-router';

//export default ({ products }) => (  
export default class AllProducts extends Component {

  componentDidMount() {
    this.props.onLoadAllProducts(); 
    //take products from back end dispatch method in container, which employs the async action creator fetch, 
    //puts it on the state and this makes it a prop
  }

  render() { 
  //console.log("this.props.products ",this.props.products )  
    return (
      <div>
        <h1>All Products</h1>
        {/* //image, caption, price, button add to cart */}
        <ul> {
          this.props.products && this.props.products.map( (product, idx) =>
            <li key={idx}> {/*key={product.id}*/}
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          )
        } </ul>
      </div>
    )
  }
}
