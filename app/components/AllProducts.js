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
    return (

      <div>

        {/*<div className='row col-md-12'>
          <h1>All Products</h1>
          <hr/>
        </div>*/}

        <div className="row jumbotron">
          <h1>Get ready for Black Box Friday</h1>
          <p>...</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>

        <div className="panel col-md-2 ">
          <div className="panel-heading"><h3>Categories</h3></div>
          <div className="panel-body">
            <p>descriptive text</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">All Products</li>
          <li className="list-group-item">Snackboxes</li>
          <li className="list-group-item">Craftboxes</li>
        </ul>
      </div>

      <div className='col-md-1'>
      </div>

          <ul className='list-unstyled'> {
            this.props.products && this.props.products.map( (product, idx) =>
              <li key={idx} className='product col-md-3'> 
                <Link to={`/products/${product.id}`} className='product-name'>
                  {product.name}
                  <img src='sample.jpg'></img>
                </Link>
                <p>${product.price}</p>
                <button className='btn btn-default'>add to cart</button>
              </li>
            )
          } 
          </ul>

      </div>
    )
  }
}
