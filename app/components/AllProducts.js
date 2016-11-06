import React, { Component } from 'react';
import {Link} from 'react-router';

export default ({products, filter, handleChange, postItemToCart}) => (
  <div className='row'>

    <div className="row jumbotron">
      <h3>Hi! Welcome to</h3>
      <h1 className='brand'>
        Care<img src='pumpkin-logo.png' />Full&nbsp;
      </h1>
      <h3>~the best in class care packages, curated by our expert style elves~</h3>
      <hr/>
      <h2>Get ready for Black Box Friday</h2>
      <p><a className="btn btn-default" href="#" role="button">Check out these deals!</a></p>
    </div>

    <div className="panel col-md-2 ">
      <div className="panel-heading"><h3>Categories</h3></div>
      <div className="panel-body">
        <p>descriptive text</p>

        <input 
          type='text'
          value={filter}
          placeholder='search by name'
          onChange={handleChange}
        />


    </div>
    <ul className="list-group">
      <li className="list-group-item">All Products</li>
      <li className="list-group-item">Snackboxes</li>
      <li className="list-group-item">Craftboxes</li>
    </ul>
  </div>

      <ul className='list-unstyled'> {
        products && products.map( (product, idx) =>
          <li key={idx} className='product col-md-3'> 
            <Link to={`/products/${product.id}`} className='product-name'>
              {product.name}
              <img src='sample.jpg'></img>
            </Link>
            <p>${product.price}</p>
            <button onClick={ () => postItemToCart(product) } className='btn btn-default'>add to cart</button>
          </li>
        )
      } 
      </ul>
    
  </div>
)

